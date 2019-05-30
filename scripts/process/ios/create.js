'use strict';

const exec = require('../../lib/exec');

module.exports = function create(options = {}) {
  return (name, deviceType, runtime) =>
    exec('xcrun', ['simctl', 'create', `${name}`, deviceType, runtime], {
      ...options,
      shell: true
    });
};
