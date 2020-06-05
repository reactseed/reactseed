#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const { version } = require('../../package.json');
const { logger } = require('../utils/');

program.version(version);
program.command('init', 'Creating a new React app');
program.command('test', 'Testing reactseed for CLI developer');
program.on('--help', () => {
  console.log(`\nIf you have any problems, do not hesitate to file an issue:`);
  console.log(
    `      ${chalk.cyan('https://github.com/reactseed/reactseed/issues')}\n`
  );
});

program.on('command:*', function (command) {
  const firstCommand = command[0];
  if (!this.commands.find((c) => c._name == firstCommand)) {
    console.error(
      chalk.red(
        `Invalid command: ${chalk.green(
          firstCommand
        )}\nSee --help for a list of available commands.`
      )
    );
    program.outputHelp();
    process.exit(1);
  }
});

program.parse(process.argv);
