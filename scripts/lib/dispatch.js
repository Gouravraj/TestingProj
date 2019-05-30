'use strict';

const { _ } = require('ramda');

function dispatch(exec) {
  return exec(_);
}

dispatch.ninja = function ninja(exec) {
  return exec({ silence: true });
};

dispatch.force = function force(exec) {
  return exec({ force: true, silence: true });
};

module.exports = dispatch;
