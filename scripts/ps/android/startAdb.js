'use strict';

const exec = require('../../lib/exec');

module.exports = function startAdb(options = {}) {
  return () =>
    exec('adb', ['shell', 'getprop', 'service.adb.tcp.port'], options);
};
