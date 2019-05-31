'use strict';

const { compose, filter } = require('ramda');
const _getExtractInfo = require('./internal/_getExtractInfo');

function json(out) {
  let tmp = out;

  if (typeof out !== 'string') {
    tmp = out.string();
  }

  return JSON.parse(tmp);
}

function dir(path = '') {
  if (path.indexOf('.') === -1) {
    return path;
  }

  return path
    .split('/')
    .slice(0, -1)
    .join('/');
}

function trim(str = '') {
  return str.trim();
}

trim.line = function line(token = /\n/g) {
  return (out) => {
    return out.split(token).reduce((acc, ln) => {
      if (!ln) {
        return acc;
      }

      return `${acc}\n${ln}`;
    }, '');
  };
};

trim.stream = function stream(token = /\n/g) {
  return (out) => out.split(token).filter((m) => m);
};

function cut(start, end) {
  return (out = []) => {
    end = end || out.length;

    return out.slice(start, end);
  };
}

function iosOnly(rootName, name) {
  return compose(
    filter((item) => !/iPad|Watch|TV/i.test(item[name])),
    _getExtractInfo(rootName),
    json
  );
}

exports.dir = dir;
exports.trim = trim;
exports.cut = cut;
exports.json = json;
exports.iosOnly = iosOnly;
