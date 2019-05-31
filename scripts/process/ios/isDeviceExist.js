'use strict';

module.exports = function isDeviceExist(options = {}) {
  return require('./list')(options);
};
