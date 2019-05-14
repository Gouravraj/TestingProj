const { spawnSync } = require('child_process');
const print = require('./logger');

module.exports = function exec(cmd, args, options = {}) {
  const printError = print('error');
  const printInfo = print('info');

  if (!Array.isArray(args)) {
    printError('Argments format is wrong!');

    process.exit(1);
  }

  const out = spawnSync(cmd, args, options);
  const { stdout, stderr, error } = out;
  const err = error || (stderr ? stderr.toString() : null);

  if (err) {
    const errMessage = err
      .split(/null\n/g)
      .filter((m) => m)
      .join('');

    printError(errMessage);

    process.exit(1);
  }

  printInfo(stdout.toString());

  return out;
};
