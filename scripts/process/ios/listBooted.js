'use strict';

const exec = require('../../lib/exec');

module.exports = function listBooted(options = {}) {
  return () =>
    exec('xcrun', ['simctl', 'list', '|', 'grep', 'Booted'], {
      ...options,
      shell: true
    });
};
