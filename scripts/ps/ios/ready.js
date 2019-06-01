'use strict';

const exec = require('../../lib/exec');

module.exports = function ready(options = {}) {
  return (name) =>
    exec('xcrun', ['simctl', 'bootstatus', `"${name}"`], {
      ...options,
      cwd: __dirname,
      shell: true
    });
};
