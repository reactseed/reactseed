const Generator = require('yeoman-generator');
const path = require('path');
const os = require('os');
const fs = require('fs-extra');
const compressing = require('compressing');
const glob = require('globby');
const mkdirp = require('mkdirp');
const homedir = require('node-homedir');
const rimraf = require('mz-modules/rimraf');
const isTextOrBinary = require('istextorbinary');
const url = require('url');
const commandExistsSync = require('command-exists').sync;
const ProxyAgent = require('proxy-agent');
const urllib = require('urllib');
const chalk = require('chalk');

const { logger } = require('../../utils/index');
const { templateMap, templateList } = require('../../utils/constant');
const npm = require('../../utils/npm');
const yarn = require('../../utils/yarn');
const {
  isNeedReplaceContentFile,
  getRegistryType,
} = require('../../utils/initUtils');

const cwdName = path.basename(path.resolve(process.cwd()));
const downloadTmpDir = path.resolve(process.cwd(), '.reactseed');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    logger.debug('args ', args);
    logger.debug('opts ', JSON.stringify(opts));
    logger.debug('process.env.http_proxy ', process.env.http_proxy);
    logger.debug('process.env.https_proxy ', process.env.https_proxy);

    this.httpClient = urllib.create();
    this.registryUrl = getRegistryType(args.registry);
    const proxyHost =
      process.env.http_proxy ||
      process.env.https_proxy ||
      process.env.HTTP_PROXY ||
      process.env.HTTPS_PROXY;
    this.proxyUrl = {};

    if (proxyHost) {
      const proxyAgent = new ProxyAgent(proxyHost);
      this.httpClient.agent = proxyAgent;
      this.httpClient.httpsAgent = proxyAgent;
      logger.debug(`Using http_proxy: ${proxyHost}`);
    }

    this.argument('name', { type: String, required: false });
    this.intialData = { appName: '', isDefault: true };
  }

  async _curl(url, options) {
    return await this.httpClient.request(url, options);
  }

  async prompting() {
    logger.info(`Welcome to the React Seed!`);
    const answers = await this.prompt([
      {
        type: 'input',
        name: 'appName',
        message: 'Your project name? (Default to current folder name)',
        default: '',
      },
    ]);
    this.answers = answers;
    logger.debug('appName: ', answers.appName);
    if (answers.appName === '') {
      this.isCurrentDir = true;
      answers.appName = cwdName;
      // Check if there are already package.json in the current directory
      const isExist = await fs.pathExists(
        process.cwd() + path.sep + 'package.json'
      );

      if (isExist) {
        logger.info(
          `The directory ${chalk.green(
            process.cwd()
          )} contains files that could conflict.`
        );
        logger.info(
          'Either try using a new directory name, or remove the files listed above.'
        );
        process.exit(1);
      }
    } else {
      this.intialData.isDefault = false;

      // Check if there is a folder with the same name under the current directory
      const isExist = await fs.pathExists(
        process.cwd() + path.sep + answers.appName
      );

      if (isExist) {
        logger.info(
          `The directory ${chalk.green(
            process.cwd() + path.sep + answers.appName
          )} contains files that could conflict.`
        );
        logger.info(
          'Either try using a new directory name, or remove the files listed above.'
        );

        process.exit(1);
      }
    }

    const answersNext = await this.prompt([
      {
        type: 'list',
        name: 'template',
        message: 'The template you want to use?',
        choices: templateList,
      },
      {
        type: 'confirm',
        name: 'install',
        message: 'Whether to install dependencies?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'useYarn',
        message: 'Use Yarn?',
        when: (currentAnswers) =>
          commandExistsSync('yarn') && currentAnswers.install,
        default: true,
      },
    ]);

    logger.debug('AnswersNext: ', JSON.stringify(answersNext));
    this.data = { ...this.intialData, ...answers, ...answersNext };
    return answersNext;
  }

  async writing() {
    logger.debug('Writing: ', JSON.stringify(this.data));

    const { template, isDefault, appName } = this.data;
    const templatePackageName = templateMap[template];
    const templateDir = await this._downloadTemplate(templatePackageName);
    const targetDir = isDefault
      ? path.resolve('')
      : path.resolve('') + path.sep + appName;
    this.targetDir = targetDir;

    return this._processFiles(targetDir, templateDir);
  }

  async _downloadTemplate(templatePackageName) {
    try {
      const registryUrl = getRegistryType();
      const result = await this._curl(
        `${this.registryUrl}/${templatePackageName}`,
        {
          dataType: 'json',
          followRedirect: true,
          maxRedirects: 5,
          timeout: 5000,
        }
      );

      const latestVersion = result.data['dist-tags']['latest'];
      const latestInfo = result.data.versions[latestVersion];
      const tgzUrl = latestInfo.dist.tarball;
      logger.info(`Downloading ${tgzUrl}`);

      const templateDir = downloadTmpDir;
      await rimraf(templateDir);
      const response = await this._curl(tgzUrl, {
        responseType: 'stream',
        followRedirect: true,
      });

      await compressing.tgz.uncompress(response.data, templateDir);
      logger.info(`Extracting to ${chalk.green(templateDir)}`);
      return path.join(templateDir, '/package');
    } catch (error) {
      console.error(`Get npm info error：${error}`);
      process.exit(1);
    }
  }

  async _processFiles(targetDir, templateDir) {
    logger.debug(`processFiles templateDir: ${templateDir}`);
    const src = path.join(templateDir, 'template');
    const files = glob.sync('**/*', { cwd: src, dot: true });
    const locals = {};
    files.forEach((file) => {
      const from = path.join(src, file);

      const to = path.join(targetDir, this._replaceTemplate(file, locals));
      let content = fs.readFileSync(from);
      const _isTextOrBinary = isTextOrBinary.isTextSync(from, content);
      logger.debug(`fileName: ${file}, ${_isTextOrBinary}`);
      logger.info('Writing to', chalk.green(to));
      if (isNeedReplaceContentFile(file)) {
        content = content.toString().replace(/__name__/g, this.data.appName);
      }

      const result = _isTextOrBinary
        ? this._replaceTemplate(content.toString('utf8'), locals)
        : content;

      mkdirp.sync(path.dirname(to));
      fs.writeFileSync(to, result);
    });

    const commitmsg = path.join(targetDir, '.husky/commit-msg');
    const precommit = path.join(targetDir, '.husky/pre-commit');
    await fs.chmod(commitmsg, 0o775, (err) => {
      if (err) throw err;
      logger.info('chmod +x ', chalk.green(commitmsg));
    });
    await fs.chmod(precommit, 0o775, (err) => {
      if (err) throw err;
      logger.info('chmod +x ', chalk.green(precommit));
    });

    return files;
  }

  _replaceTemplate(content, scope) {
    return content
      .toString()
      .replace(/(\\)?{{ *(\w+) *}}/g, (block, skip, key) => {
        if (skip) {
          return block.substring(skip.length);
        }
        return scope.hasOwnProperty(key) ? scope[key] : block;
      });
  }

  async install() {
    const { useYarn, install } = this.data;
    this.isInstallSuccess = true;
    const appPath = this.targetDir;

    try {
      if (install) {
        if (!useYarn) {
          logger.info('Installing dependencies using NPM...');
          await npm.run(appPath, 'install');
        } else {
          logger.info('Installing dependencies using Yarn...');
          await yarn.run(appPath, 'install');
        }
      }
    } catch (error) {
      this.isInstallSuccess = false;
      logger.error('Error installing dependencies:', error && error.message);
    }
  }

  async end() {
    const { useYarn } = this.data;

    if (this.isInstallSuccess === false) {
      logger.error('Installation dependency failed, please install manually!');
      return;
    }
    await rimraf(downloadTmpDir);

    logger.info('\n');
    logger.info(
      `Success! Created ${chalk.cyan(this.answers.appName)} at ${chalk.green(
        this.targetDir
      )}`
    );
    logger.info('We suggest that you begin by typing:');
    if (!this.isCurrentDir) {
      logger.info(`  ${chalk.cyan(`cd ${chalk.green(this.answers.appName)}`)}`);
    }
    logger.info(`  ${chalk.cyan(`${useYarn ? 'yarn' : 'npm'} start`)}`);
    logger.info(
      `To initialize ${chalk.green('Git')} and ${chalk.green(
        'Husky'
      )}, you can run:`
    );
    logger.info(`  ${chalk.cyan('git init')}`);
    logger.info(`  ${chalk.cyan('npm run prepare')}`);
    logger.info('\n');
  }
};
