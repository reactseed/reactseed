const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const homedir = require('node-homedir');
const aliasTemplate = /^default$/;
const localTemplateReg = /^file\:/;
const remoteUrlReg = /^http(s?)\:/;

const { logger } = require('../utils');
const { registry, registryCN } = require('./constant');

const isLocalTemplate = (template) => {
  return localTemplateReg.test(template);
};

const isAliasTemplate = (template) => {
  return aliasTemplate.test(template);
};

const isValidateTemplate = (template) => {
  if (!isLocalTemplate(template) && !isAliasTemplate(template)) {
    logger.error(`Invalid ${chalk.cyan('<template>')} option`);

    logger.info(
      `\n A custom ${chalk.cyan('--template')} can be one of:` +
        `\n  - a template alias: ${chalk.green('default')}` +
        `\n  - a local path relative to the current working directory: ${chalk.green(
          'file:../my-custom-template'
        )}`
    );

    process.exit(1);
  }
  return true;
};

/**
 * Get template type
 * @param {*} template
 *  - local：local files
 *  - alias：npm package
 *  - '': no template used
 */
const getTemplateType = (template) => {
  if (template !== undefined && isValidateTemplate(template)) {
    return isLocalTemplate(template) ? 'local' : 'alias';
  } else {
    return '';
  }
};

const isNeedReplaceContentFile = (templatePath) => {
  const needReplaceAppNameFilePath = [
    'package.json',
    'README.md',
    `public${path.sep}manifest.json`,
    `public${path.sep}index.html`,
  ];
  const needReplace = needReplaceAppNameFilePath.indexOf(templatePath) > -1;
  logger.debug(
    `isNeedReplaceContentFile templatePath:${templatePath} , needReplace: ${needReplace}`
  );
  return needReplace;
};

/**
 * get registryUrl by short name
 * @param {String} key - short name, support `china / npm / npmrc`, default to read from .npmrc
 * @return {String} registryUrl
 */
const getRegistryType = (key) => {
  switch (key) {
    case 'china':
      return registryCN;
    case 'npm':
      return registry;
    default: {
      if (/^https?:/.test(key)) {
        return key.replace(/\/$/, '');
      } else {
        const home = homedir();
        let url =
          process.env.npm_registry ||
          process.env.npm_config_registry ||
          registry;

        if (
          fs.existsSync(path.join(home, '.cnpmrc')) ||
          fs.existsSync(path.join(home, '.tnpmrc'))
        ) {
          url = registryCN;
        }
        url = url.replace(/\/$/, '');
        return url;
      }
    }
  }
};

module.exports = {
  isNeedReplaceContentFile,
  isLocalTemplate,
  isAliasTemplate,
  isValidateTemplate,
  getTemplateType,
  getRegistryType,
};
