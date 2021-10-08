const program = require('commander');
const chalk = require('chalk');
const { isGitUrlTemplate } = require('../utils/initUtils');
const { downloadTemplate } = require('../utils/dowload');
const generatorAppWithYo = require('../generators/app/run-generator');
program
  .usage(`\n reactseed init`)
  .option('-d, --debug', 'output extra debugging')
  .option('-t, --template <template>', 'npm package name')
  .option('-p, --path <path>', 'download destination path')
  .parse(process.argv);

const template = program.template;
const savePath = program.path;
template ? downloadTemplate(template, savePath) : generatorAppWithYo();
