'use strict';

const exec = require('../../lib/exec');

module.exports = function listDeviceTypes(options = {}) {
  return () =>
    exec('xcrun', ['simctl', 'list', '--json', 'devicetypes'], options);
};
