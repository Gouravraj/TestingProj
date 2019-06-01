'use strict';

const exec = require('../../lib/exec');

module.exports = function test(options = {}) {
  return () => exec('npm', ['run', 'ios'], options);
};
