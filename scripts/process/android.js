'use strict';

const _getVM = require('./internal/_getVM')('android');

function open(out) {
  return _getVM(out);
}

exports.open = open;
