'use strict';

const exec = require('../../lib/exec');

module.exports = function listBooted(options = {}) {
  return () => exec('adb', ['devices'], options);
};
