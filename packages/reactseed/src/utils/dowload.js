/**
 * download template from npm
 */

const path = require('path');
const http = require('http');
const fs = require('fs-extra');
const ProxyAgent = require('proxy-agent');
const execSync = require('child_process').execSync;
const urllib = require('urllib');
const rimraf = require('mz-modules/rimraf');
const homedir = require('node-homedir');
const compressing = require('compressing');
const { getProxySettings } = require('get-proxy-settings');
const { registry, downloadTempPath } = require('./constant');
const { logger } = require('./index');
const chalk = require('chalk');
const httpClient = urllib.create();
const downloadTmpDir = path.resolve(process.cwd(), downloadTempPath);

const configHttpClientProxy = async () => {
  const proxyHost = await getProxySettings();
  if (proxyHost) {
    httpClient.agent = proxyHost.http ? new ProxyAgent(proxyHost.http) : '';
    httpClient.httpsAgent = proxyHost.https
      ? (httpClient.httpsAgent = new ProxyAgent(proxyHost.https))
      : '';
  }
};

const httpRequest = async (url, options) => {
  await configHttpClientProxy();
  const result = await httpClient.request(url, options);
  return result;
};

const getRegistryType = () => {
  const systemRegistry = execSync('npm config get registry', {
    stdio: ['ignore', 'pipe', 'pipe'],
  })
    .toString()
    .replace(/\n$/, '');
  let url =
    process.env.npm_registry ||
    process.env.npm_config_registry ||
    systemRegistry ||
    registry;
  url = url.replace(/\/$/, '');
  return url;
};

const getNpmRegistryUrl = (packageName) => {
  let registryUrl = getRegistryType();
  return `${registryUrl}/${packageName}`;
};

const getNpmPackageResourceUrl = async (packageName) => {
  const packageUrl = getNpmRegistryUrl(packageName);
  const result = await httpRequest(packageUrl, {
    dataType: 'json',
    followRedirect: true,
    maxRedirects: 5,
    timeout: 5000,
  });

  if (result.status === 200) {
    const latestVersion = result.data['dist-tags']['latest'];
    const latestInfo = result.data.versions[latestVersion];
    const tgzUrl = latestInfo.dist.tarball;
    return tgzUrl;
  } else {
    throw new Error('get package message error, please check it!');
  }
};

const downloadTemplate = async (packageName, savePath) => {
  try {
    const resourceUrl = await getNpmPackageResourceUrl(packageName);
    const response = await httpRequest(resourceUrl, {
      responseType: 'stream',
      followRedirect: true,
    });

    await rimraf(downloadTmpDir);
    await compressing.tgz.uncompress(response.data, downloadTmpDir);
    const templatePath = path.join(downloadTmpDir, '/package');
    const targetPath = savePath || process.cwd();
    if (savePath === downloadTempPath) {
      throw new Error(`'The save path name cannot be ${downloadTempPath}`);
    }
    await fs.move(templatePath, targetPath, { overwrite: true });
    logger.success(
      `template download success! path: `,
      chalk.green(targetPath)
    );
    await rimraf(downloadTmpDir);
    process.exit(0);
  } catch (error) {
    logger.error('download error: ', error);
    process.exit(1);
  }
};

const downloadFromGit = async (gitUrl, savePath) => {
  await rimraf(savePath);
  fs.mkdirSync(savePath);

  execSync(`cd ${savePath} && git clone ${gitUrl}`);
  logger.success('success! cd', path.join(process.cwd(), savePath));
};

module.exports = {
  downloadTemplate,
  downloadFromGit,
};
