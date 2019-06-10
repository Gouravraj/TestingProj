'use strict';

const conf = require('../../config');
const dispatch = require('../../lib/dispatch');
const { dir } = require('../../lib/parser');

function extract(args) {
  let { platform, id, to, rename } = args;

  return () => {
    const extract = require(`../../ps/${platform}/extract`)();

    if (to.indexOf('.') > -1) {
      to = dir(to);
    }

    return dispatch(extract(id, `${to}/${rename}`));
  };
}

exports.ios = extract({ platform: 'ios', ...conf.ios });
exports.android = extract({ platform: 'android', ...conf.android });
