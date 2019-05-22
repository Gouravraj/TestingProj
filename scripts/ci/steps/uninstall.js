const { emulator } = require('../../path');
const exec = require('../../utils/exec');
const conf = require('../../config');

function uninstall() {
  exec('./uninstall.sh', [conf.android.id], { cwd: `${emulator}/commands` });
}

module.exports = uninstall;
