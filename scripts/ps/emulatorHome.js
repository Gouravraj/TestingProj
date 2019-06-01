'use strict';

const exec = require('../lib/exec');

module.exports = function emulatorHome(options = {}) {
  return () =>
    exec('echo', ['$(dirname $(which emulator))'], { ...options, shell: true });
};
