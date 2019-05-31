'use strict';

module.exports = function isDeviceExist(options = {}) {
  const list = require('./list')(options);

  return list;
};
