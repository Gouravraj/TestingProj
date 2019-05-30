'use strict';

const exec = require('../../lib/exec');

module.exports = function remove(options = {}) {
  return (id) => exec('xcrun', ['simctl', 'erase', id], options);
};
