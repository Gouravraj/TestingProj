'use strict';

const { compose, map, filter, reduce, split } = require('ramda');
const _extractInfo = require('./internal/_extractInfo');

function json(out) {
  return JSON.parse(out);
}

function dir(path = '') {
  let stream = path.split('/');

  if (path.indexOf('.') > -1) {
    stream = stream.slice(0, -1);
  }

  if (stream[stream.length - 1]) {
    stream = [...stream, ''];
  }

  return stream.join('/');
}

function trim(str = '') {
  return str.trim();
}

trim.line = function line(token = /\n/g) {
  return compose(
    trim,
    reduce((acc, ln) => {
      if (!ln) {
        return acc;
      }

      return `${acc}\n${trim(ln)}`;
    }, ''),
    split(token)
  );
};

trim.stream = function stream(token = /\n/g) {
  return compose(
    filter((m) => m),
    map(trim),
    split(token)
  );
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
    _extractInfo(rootName),
    json
  );
}

exports.dir = dir;
exports.trim = trim;
exports.cut = cut;
exports.json = json;
exports.iosOnly = iosOnly;
