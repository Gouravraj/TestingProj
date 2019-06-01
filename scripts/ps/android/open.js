'use strict';

const exec = require('../../lib/exec');
const { emulatorHomeDir } = require('../../lib/path');

module.exports = function open(options = {}) {
  return (name) =>
    exec('exec', ['nohup', './emulator', '-avd', name, '&'], {
      ...options,
      cwd: emulatorHomeDir,
      shell: true
    });
};
