'use strict';

const exec = require('../../lib/exec');

module.exports = function list(options = {}) {
  return (id) => exec('./open.sh', [id], { ...options, cwd: __dirname });
};
