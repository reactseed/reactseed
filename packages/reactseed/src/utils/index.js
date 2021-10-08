const chalk = require('chalk');
const env = process.env;
const level =
  process.argv.includes('-d') || process.argv.includes('--debug')
    ? 'debug'
    : 'info';

const logger = {
  info: (...args) => {
    console.log(...args);
  },
  error: (...args) => {
    console.error(chalk.red(...args));
  },
  success: (...args) => {
    console.log(chalk.green(...args));
  },
  debug: (...args) => {
    if (level === 'debug') {
      console.debug(chalk.yellow('Debug: '), chalk.yellow(...args));
    }
  },
};

module.exports = {
  logger,
};
