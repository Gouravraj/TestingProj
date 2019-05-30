'use strict';

const { compose, filter, prop } = require('ramda');
const _getExtractInfo = require('./_getExtractInfo');
const { json } = require('../../../lib/parser');

function _iosOnly(rootName, name) {
  return compose(
    filter((item) => !/iPad|Watch|TV/i.test(item[name])),
    _getExtractInfo(rootName),
    json,
    prop('stdout')
  );
}

module.exports = _iosOnly;
