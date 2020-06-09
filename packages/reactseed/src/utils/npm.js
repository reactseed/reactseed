const os = require('os');
const childProcess = require('child_process');
const isWindows = /^win/i.test(os.platform());

const run = (cwd, command, ...args) => {
  const installProc = childProcess.spawn(
    isWindows ? 'npm.cmd' : 'npm',
    [command, ...args],
    { cwd, stdio: [0, 1, 2] }
  );
  return new Promise((resolve, reject) => {
    installProc.on('exit', (code) => {
      if (code) {
        reject(
          new Error(`npm ${command} ${args.join(' ')} exit with code ${code}`)
        );
      } else {
        resolve();
      }
    });
  });
};

module.exports = { run };
