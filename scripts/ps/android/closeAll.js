'use strict';

const exec = require('../../lib/exec');

module.exports = function closeAll(options = {}) {
  return () => exec('./close_all.sh', [], { ...options, cwd: __dirname });
};
