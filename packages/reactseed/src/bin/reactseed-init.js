const program = require('commander');
const chalk = require('chalk');

program.usage(`\n reactseed init`);
program.option('-d, --debug', 'output extra debugging');
program.parse(process.argv);

const generatorAppWithYo = require('../generators/app/run-generator');
generatorAppWithYo();
