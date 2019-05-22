const { spawnSync } = require('child_process');
const print = require('./logger');

const printError = print('error');
const printLog = print('log');

function exec(cmd, args, options, extra) {
  args = args || [];
  options = options || {};
  extra = extra || {};

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

  let res = stdout.toString();

  if (typeof extra.after === 'function') {
    res = extra.after(res);
  }

  if (!extra.silence) {
    printLog(res);
  }

  return out;
}

module.exports = exec;
