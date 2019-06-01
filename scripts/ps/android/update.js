'use strict';

const exec = require('../../lib/exec');

module.exports = function update(options = {}) {
  return () => exec('sdkmanager', ['--update'], options);
};
