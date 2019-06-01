'use strict';

const exec = require('../../lib/exec');

module.exports = function list(options = {}) {
  return () =>
    exec(
      'xcrun',
      ['simctl', 'list', '--json', 'devices', 'available'],
      options
    );
};
