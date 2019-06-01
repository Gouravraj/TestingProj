'use strict';

const conf = require('../../config');
const dispatch = require('../../lib/dispatch');
const { dir } = require('../../lib/parser');

function extract(args) {
  let { platform, id, to, rename } = args;

  return () => {
    const extractPkg = require('../../ps/extractPkg')();

    if (to.indexOf('.') > -1) {
      to = dir(to);
    }

    return dispatch(extractPkg(platform, id, to, rename));
  };
}

exports.ios = extract({ platform: 'ios', ...conf.ios });
exports.android = extract({ platform: 'android', ...conf.android });
