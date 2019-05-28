'use strict';

const conf = require('../../config');
const { localBinDir } = require('../../lib/path');
const exec = require('../../lib/exec');
const { dir } = require('../../lib/parser');

function extract(args) {
  let { platform, id, to, rename } = args;

  return (cwd = localBinDir) => {
    if (to.indexOf('.') > -1) {
      to = dir(to);
    }

    return exec(
      './extract-pkg',
      [platform, '--id', id, '--to', to, '--rename', rename],
      { cwd }
    );
  };
}

exports.ios = extract({ platform: 'ios', ...conf.ios });
exports.android = extract({ platform: 'android', ...conf.android });
