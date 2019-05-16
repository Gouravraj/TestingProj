const conf = require('./config');
const exec = require('../utils/exec');

function extract({ platform, id, to, rename }) {
  return (cwd = `${process.cwd()}/node_modules/.bin`) => {
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
