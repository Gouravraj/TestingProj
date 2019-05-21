const { spawnSync } = require('child_process');
const print = require('./logger');

module.exports = function exec(
  cmd,
  args = [],
  options = {},
  extra = {
    silence: false
  }
) {
  const printError = print('error');
  const printLog = print('log');
  const out = spawnSync(cmd, args, options);
  const { stdout, stderr, error } = out;
  let err = error || (stderr ? stderr.toString() : null);

  if (err) {
    if (typeof err !== 'string') {
      err = JSON.stringify(err, null, 2);
    }

    const errMessage = err
      .split(/null\n/g)
      .filter((m) => m)
      .join('');

    printError(errMessage);

    process.exit(1);
  }

  if (!extra.silence) {
    printLog(stdout.toString());
  }

  return out;
};
