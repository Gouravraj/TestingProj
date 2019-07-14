'use strict';

const exec = require('../../lib/exec');

module.exports = function test(options = {}) {
  return (suite) => {
    const args = suite
      ? ['run', 'android', '--', '--suite', suite]
      : ['run', 'android'];

    return exec('npm', args, options);
  };
};
