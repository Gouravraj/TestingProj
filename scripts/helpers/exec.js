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

  if (err && !extra.force) {
    if (typeof err !== 'string') {
      err = JSON.stringify(err, null, 2);
    }

    const errMessage = err
      .split(/null|\n/g)
      .filter((m) => m)
      .join('');

    printError(errMessage);

    process.exit(1);
  }

  if (options.stdio || extra.force) {
    return out;
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

exec.ninja = function ninja(command) {
  return exec.apply(null, [...command, { silence: true }]);
};

exec.touch = function touch(file) {
  const fs = require('fs');

  fs.closeSync(fs.openSync(file, 'w'));
};

module.exports = exec;
