'use strict';

const exec = require('../../lib/exec');

module.exports = function ready(options = {}) {
  return () =>
    exec('./ready.sh', null, {
      ...options,
      cwd: __dirname
    });
};
