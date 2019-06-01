'use strict';

const exec = require('../../lib/exec');

module.exports = function list(options = {}) {
  return () =>
    exec(
      'avdmanager',
      [
        'list',
        'avd',
        '|',
        'grep',
        'Name',
        '|',
        'sed',
        '-e',
        "'s/^[[:space:]]*//'"
      ],
      {
        ...options,
        shell: true
      }
    );
};
