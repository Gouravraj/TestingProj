'use strict';

const exec = require('../../lib/exec');
const { androidHomeDir } = require('../../lib/path');

module.exports = function create(options = {}) {
  return (name, abi, api, device) =>
    exec(
      './avdmanager',
      [
        'create',
        'avd',
        '--force',
        '--name',
        `'${name}'`,
        '--abi',
        `${abi}`,
        '--package',
        `'system-images;android-${api};google_apis;x86_64'`,
        '--device',
        `'${device}'`
      ],
      {
        ...options,
        cwd: `${androidHomeDir}/tools/bin`,
        shell: true
      }
    );
};
