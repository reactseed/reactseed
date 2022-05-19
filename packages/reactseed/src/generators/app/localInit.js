const os = require('os');
const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const childProcess = require('child_process');
const yarn = require('../../utils/yarn');
const { logger } = require('../../utils');

const { exec } = childProcess;

const initLocalTemplate = async (localPath, appName) => {
  logger.info('localPath: ', localPath);
  const cwd = path.resolve('.');
  const filePath = localPath.replace('file:', '');
  const exists = await fs.pathExists(filePath);
  const toPath = path.resolve(cwd, appName);

  const needReplaceAppNameFilePath = [
    toPath + path.sep + 'package.json',
    toPath + path.sep + 'README.md',
    toPath + path.sep + 'public' + path.sep + 'manifest.json',
    toPath + path.sep + 'public' + path.sep + 'index.html',
  ];

  if (exists) {
    const fp = await fs.stat(filePath);
    if (fp.isDirectory()) {
      logger.info(chalk.cyan('⌛  (1/3) Copying code...'));
      fs.copySync(filePath + '/template', toPath, {
        filter: (file) => {
          return file.indexOf('node_modules') === -1;
        },
      });

      logger.info(chalk.cyan('⌛  (2/3) Generating code...'));
      needReplaceAppNameFilePath.forEach((file) => {
        const fileData = fs.readFileSync(file, 'utf-8');
        const replaceData = fileData.replace('__$name$__', appName);
        fs.writeFileSync(file, replaceData);
      });

      const commitmsg = toPath + path.sep + '.husky/commit-msg';
      const precommit = toPath + path.sep + '.husky/pre-commit';
      await fs.chmod(commitmsg, 0o775, (err) => {
        if (err) throw err;
        logger.info('chmod +x ', chalk.green(commitmsg));
      });
      await fs.chmod(precommit, 0o775, (err) => {
        if (err) throw err;
        logger.info('chmod +x ', chalk.green(precommit));
      });

      logger.info(chalk.cyan('⌛  (3/3) Installing dependencies...'));

      await yarn.run(toPath, 'install');
      process.chdir(`./${appName}`);

      logger.info(
        `Success! Created ${chalk.cyan(appName)} at ${chalk.green(toPath)}`
      );
      logger.info('We suggest that you begin by typing:');
      logger.info(`  ${chalk.cyan('cd')} ${chalk.green(appName)}`);
      logger.info(`  ${chalk.cyan('yarn start')}`);
      logger.info(
        `To initialize ${chalk.green('Git')} and ${chalk.green(
          'Husky'
        )}, you can run:`
      );
      logger.info(`  ${chalk.cyan('git init')}`);
      logger.info(`  ${chalk.cyan('npm run prepare')}`);
    } else {
      console.error(chalk.red('path is not directory'));
    }
  } else {
    console.error(chalk.red('path is not exist, please check'));
  }
};

module.exports = initLocalTemplate;
