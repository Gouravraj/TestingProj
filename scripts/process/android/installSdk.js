'use strict';

const exec = require('../../lib/exec');

module.exports = function installSdk(options = {}) {
  return (api, alu) =>
    exec(
      'sdkmanager',
      [`"system-images;android-${api};google_apis;x86${alu}"`],
      { ...options, shell: true }
    );
};
