'use strict';

const exec = require('../lib/exec');
const { localBinDir } = require('../lib/path');

module.exports = function extractPkg(options = {}) {
  return (platform, id, to, rename) =>
    exec(
      './extract-pkg',
      [platform, '--id', id, '--to', to, '--rename', rename],
      { ...options, cwd: localBinDir }
    );
};
