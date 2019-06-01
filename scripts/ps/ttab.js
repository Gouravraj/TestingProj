'use strict';

const exec = require('../lib/exec');
const { localBinDir } = require('../lib/path');

module.exports = function ttab(args = []) {
  return exec('./ttab', args, { cwd: localBinDir });
};
