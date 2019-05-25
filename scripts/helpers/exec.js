const { compose } = require('ramda');
const { spawnSync } = require('child_process');
const print = require('./logger');
const { lineTrim } = require('./parser');

const printError = print('error');
const printLog = print('log');

/**
 * child_process.spawnSync
 * @param  {String}  cmd
 * @param  {Array?}  args
 * @param  {Object?} options spawnSync options
 * @param  {Object?} extra   custom options only for function
 * @return {Object?}
 */
function exec(cmd, args = [], options = {}, extra = {}) {
  const out = spawnSync(cmd, args, options);
  const { stdout, stderr, error } = out;
  let err = error || (stderr ? stderr.toString() : null);
  let res;

  if (err && !extra.force) {
    // TODO: display error object properly
    if (typeof err !== 'string') {
      err = JSON.stringify(err, null, 2);
    }

    compose(
      printError,
      lineTrim()
    )(err);
  }

  if (options.stdio || extra.force) {
    return out;
  }

  res = stdout.toString();

  if (typeof extra.after === 'function') {
    res = extra.after(res);
  }

  if (!extra.silence) {
    printLog(res);
  }

  return out;
}

exec.ninja = function ninja(...command) {
  return exec.apply(null, [...command, { silence: true }]);
};

exec.touch = function touch(file) {
  const fs = require('fs');

  fs.closeSync(fs.openSync(file, 'w'));
};

module.exports = exec;
