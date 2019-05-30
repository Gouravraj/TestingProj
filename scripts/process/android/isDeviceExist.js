'use strict';

const exec = require('../../lib/exec');

module.exports = function isDeviceExist(options = {}) {
  return (name) =>
    exec('./is_device_exist.sh', [name], {
      ...options,
      cwd: __dirname
    });
};
