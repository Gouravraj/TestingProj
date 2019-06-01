'use strict';

const exec = require('../lib/exec');

module.exports = function androidHome(options = {}) {
  return () => exec('echo', ['$ANDROID_HOME'], { ...options, shell: true });
};
