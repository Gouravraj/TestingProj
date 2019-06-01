'use strict';

const exec = require('../lib/exec');

module.exports = function osHome(options = {}) {
  return () => exec('echo', ['$HOME'], { ...options, shell: true });
};
