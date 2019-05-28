'use strict';

const readlineSync = require('readline-sync');

function readline(list, text) {
  return readlineSync.keyInSelect(list, text);
}

function createLineNo(replace) {
  return (out = []) => {
    return out.split(/\n/g).reduce((acc, line, idx) => {
      if (!line) {
        return acc;
      }

      const no = idx + 1;

      return `${acc}\n${line.replace(replace, `${no}.`)}`;
    }, '');
  };
}

const addLineNo = createLineNo(/^/);

addLineNo.replace = createLineNo;

exports.readline = readline;
exports.addLineNo = addLineNo;
