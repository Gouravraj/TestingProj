'use strict';

const { compose, curry } = require('ramda');
const { spawnSync } = require('child_process');
const { trim } = require('./parser');
const print = require('./logger');

const printErr = print('error');
const printLog = print('log');

function exec(cmd, args, options, extra) {
  extra = extra || {};

  const out = spawnSync(cmd, args || [], { encoding: 'utf8', ...options });
  const { stdout, stderr } = out;
  let res = '';

  if (!extra.force) {
    _errorHandler(cmd, out);
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

module.exports = curry(exec);

function _errorHandler(cmd, out) {
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
