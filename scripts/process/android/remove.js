'use strict';

const exec = require('../../lib/exec');

module.exports = function remove(options = {}) {
  return (name) => exec('avdmanager', ['delete', 'avd', '-n', name], options);
};
