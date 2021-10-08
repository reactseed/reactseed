const os = require('os');
const childProcess = require('child_process');
const isWindows = /^win/i.test(os.platform());

const run = (cwd, command, ...args) => {
  const installProc = childProcess.spawn(
    isWindows ? 'yarn.cmd' : 'yarn',
    [command, ...args],
    { cwd, stdio: [0, 1, 2] }
  );
  return new Promise((resolve, reject) => {
    installProc.on('exit', (code) => {
      if (code) {
        reject(code);
      } else {
        resolve();
      }
    });
  });
};

module.exports = { run };
