'use strict';

const { isRunning } = require('../../lib/check');
const { getExecDir, androidHomeDir } = require('../../lib/path');
const { addLineNo, readline } = require('../../lib/line');
const exec = require('../../lib/exec');
const { open } = require('../../compute/android');

const PLATFORM = 'android';

function main(command, args) {
  const cwd = getExecDir(PLATFORM);
  const { name, device, api } = args;

  if (command === 'uninstall' && isRunning(PLATFORM)) {
    const { pkg } = require('../../config');

    exec('./uninstall.sh', [pkg.android.id], { cwd });
  }

  if (command === 'close' && isRunning(PLATFORM)) {
    exec('./close.sh', null, { cwd });
  }

  if (command === 'create') {
    exec(
      './avdmanager',
      [
        'create',
        'avd',
        '--name',
        `'${name}'`,
        '--package',
        `'system-images;android-${api};google_apis;x86_64'`,
        '--device',
        `'${device}'`
      ],
      {
        cwd: `${androidHomeDir}/tools/bin`,
        shell: true
      }
    );
  }

  if (command === 'list') {
    exec('./list.sh', null, { cwd }, { after: addLineNo.replace('Name:') });
  }

  if (command === 'open' || command === 'remove') {
    const { stdout } = exec.ninja('./list.sh', null, {
      cwd,
      encoding: 'utf8'
    });

    const deviceList = open(stdout);
    const idx = readline(deviceList, 'Select a device');
    const device = deviceList[idx];

    if (device) {
      exec(`./${command}.sh`, [device], { cwd, stdio: 'ignore' });
    }
  }

  if (command === 'update') {
    exec('./update.sh', null, { cwd });
  }
}

module.exports = main;
