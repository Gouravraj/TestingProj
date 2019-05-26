'use strict';

const { compose } = require('ramda');
const { spawnSync } = require('child_process');
const print = require('./logger');
const { lineTrim } = require('./parser');

const printError = print('error');
const printLog = print('log');

function errorHandler(cmd, out, extra) {
  const { status, stderr, error } = out;
  let err = error || (stderr ? stderr.toString() : null);

  if (status === 1 && !err) {
    // if NPM script, they will print error.
    // So, we don't have to do it again.
    process.exit(cmd === 'npm' ? 0 : 1);
  }

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
}

/**
 * child_process.spawnSync
 * @param  {String}  cmd
 * @param  {Array?}  args
 * @param  {Object?} options spawnSync options
 * @param  {Object?} extra   custom options only for function
 * @return {Object}
 */
function exec(cmd, args = [], options = {}, extra = {}) {
  const out = spawnSync(cmd, args, options);
  const { stdout, stderr } = out;
  let res = '';

  errorHandler(cmd, out, extra);

  if (options.stdio || extra.force) {
    return out;
  }

  if (!extra.silence) {
    if (stdout) {
      res = stdout.toString();
    } else if (!stdout && stderr) {
      res = stderr.toString();
    }

    if (typeof extra.after === 'function') {
      res = extra.after(res);
    }

    printLog(res);
  }

  return out;
}

/**
 * Comparing between silence mode and stdio: 'ignore' option
 *
 * - `stdio: ignore`
 * cannot get `stdout, stderr`
 *
 * - silence (custom)
 * don't print `stdout, stderr`, but you can get those
 */
exec.ninja = function ninja(...command) {
  return exec.apply(null, [...command, { silence: true }]);
};

exec.touch = function touch(file) {
  const fs = require('fs');

  fs.closeSync(fs.openSync(file, 'w'));
};

module.exports = exec;
