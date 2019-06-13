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
    _errorHandler(out);
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

function _errorHandler(out) {
  const { status, stderr, error } = out;
  let err = error || (stderr ? stderr.toString() : null);

  if (status !== 0 && !err) {
    process.exit(status);
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

    process.exit(status);
  }

  return err;
}
