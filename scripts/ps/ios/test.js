'use strict';

const exec = require('../../lib/exec');

module.exports = function test(options = {}) {
  return (suite) => {
    const args = suite
      ? ['run', 'ios', '--', '--suite', suite]
      : ['run', 'ios'];

    return exec('npm', args, options);
  };
};
