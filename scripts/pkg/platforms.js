const conf = require('../config');
const exec = require('../helpers/exec');
const { localBin } = require('../helpers/path');
const { dirOnly } = require('../helpers/parser');

function extract(args) {
  let { platform, id, to, rename } = args;

  return (cwd) => {
    cwd = cwd || localBin;

    if (to.indexOf('.') > -1) {
      to = dirOnly(to);
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
