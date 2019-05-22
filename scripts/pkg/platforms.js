const conf = require('../config');
const exec = require('../helpers/exec');
const { home } = require('../helpers/path');

function extract(args) {
  let { platform, id, to, rename } = args;

  return (cwd) => {
    cwd = cwd || `${home}/node_modules/.bin`;

    if (to.indexOf('.') > -1) {
      to = to
        .split('/')
        .slice(0, -1)
        .join('/');
    }

    return exec(
      './extract-pkg',
      [platform, '--id', id, '--to', to, '--rename', rename],
      {
        cwd
      }
    );
  };
}

exports.ios = extract({ platform: 'ios', ...conf.ios });
exports.android = extract({ platform: 'android', ...conf.android });
