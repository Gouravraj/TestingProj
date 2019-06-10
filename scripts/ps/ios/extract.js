'use strict';

const exec = require('../../lib/exec');

module.exports = function list(options = {}) {
  return (id, to) =>
    exec('./extract.sh', [id, to], { ...options, shell: true });
};
