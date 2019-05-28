'use strict';

const { compose } = require('ramda');
const { spawnSync } = require('child_process');
const { trim } = require('./parser');
const print = require('./logger');

const printErr = print('error');
const printLog = print('log');

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

  if (!extra.force) {
    errorHandler(cmd, out);
  }

  if (options.stdio || extra.force) {
    return out;
  }

  if (stdout) {
    res = typeof stdout === 'string' ? stdout : stdout.toString();
  } else if (!stdout && stderr) {
    res = typeof stderr === 'string' ? stderr : stderr.toString();
  }

  if (!extra.silence) {
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
  let [cmd, args, options, extra] = command;

  extra = Object.assign({}, extra, { silence: true });

  return exec(cmd, args, options, extra);
};

function errorHandler(cmd, out) {
  const { status, stderr, error } = out;
  let err = error || (stderr ? stderr.toString() : null);

  if (status === 1 && !err) {
    // if NPM script, they will print error.
    // So, we don't have to do it again.
    process.exit(cmd === 'npm' ? 0 : 1);
  }

  if (err) {
    // TODO: display error object properly
    if (typeof err !== 'string') {
      err = JSON.stringify(err, null, 2);
    }

    compose(
      printErr,
      trim.line()
    )(err);
  }

  return err;
}

module.exports = exec;
