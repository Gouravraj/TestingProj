'use strict';

const exec = require('../../lib/exec');

module.exports = function listRuntimes(options = {}) {
  return () => exec('xcrun', ['simctl', 'list', '--json', 'runtimes'], options);
};
