const Generator = require('./index');

module.exports = function () {
  const generator = new Generator(process.argv.slice(2), {
    name: 'basic',
    env: {
      cwd: process.cwd(),
    },
    resolved: __dirname,
  });

  generator.run();
};
