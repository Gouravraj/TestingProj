'use strict';

const exec = require('../../lib/exec');

module.exports = function uninstall(options = {}) {
  return (id) => exec('adb', ['uninstall', id], options);
};
