const program = require('commander');
const chalk = require('chalk');
const localInit = require('../generators/app/localInit');
const { getTemplateType } = require('../utils/initUtils');

program.usage(
  `\n reactseed test ${chalk.green('<app-name>')} ${chalk.green(
    '<template>'
  )}\n` +
    `\n A custom ${chalk.cyan('--template')} can be one of:` +
    `\n  - a template alias: ${chalk.green('default')}` +
    `\n  - a local path relative to the current working directory: ${chalk.green(
      'file:../my-custom-template'
    )}`
);

program.parse(process.argv);
const [appName, template] = program.args;
const templateType = getTemplateType(template);

if (templateType !== '') {
  if (templateType === 'local') {
    localInit(template, appName);
  }
} else {
  console.error(
    chalk.red(
      `Error: Missing parameters ${chalk.green('--template')} or ${chalk.green(
        '--template'
      )}`
    )
  );
  program.outputHelp();
  console.log('\n');
  process.exit(1);
}
