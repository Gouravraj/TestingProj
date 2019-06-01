'use strict';

const exec = require('../../lib/exec');

module.exports = function closeAll(options = {}) {
  return () => exec('./close-all.sh', [], { ...options, cwd: __dirname });
};
