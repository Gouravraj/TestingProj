'use strict';

const { getExec, androidHome } = require('../helpers/path');
const { isRunning } = require('../helpers/check');
const exec = require('../helpers/exec');
const { getDevices } = require('../helpers/parser');
const addLineNo = require('../helpers/lineNo');

const PLATFORM = 'android';

function main(command, args) {
  const cli = getExec(PLATFORM);
  const { name, device, api } = args;

  if (command === 'uninstall' && isRunning(PLATFORM)) {
    const conf = require('../config');

    exec('./uninstall.sh', [conf.pkg.android.id], { cwd: cli });
  }

  if (command === 'close' && isRunning(PLATFORM)) {
    exec('./close.sh', null, { cwd: cli });
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
        cwd: `${androidHome}/tools/bin`,
        shell: true
      }
    );
  }

  if (command === 'list') {
    exec(
      './list.sh',
      null,
      { cwd: cli },
      { after: addLineNo.replace('Name:') }
    );
  }

  if (command === 'open' || command === 'delete') {
    const readlineSync = require('readline-sync');

    const { stdout } = exec.ninja('./list.sh', null, {
      cwd: cli,
      encoding: 'utf8'
    });
    const deviceList = getDevices(stdout);

    if (deviceList.length === 0) {
      process.exit(0);
    }

    const idx = readlineSync.keyInSelect(deviceList, 'Select a device');
    const device = deviceList[idx];

    if (device) {
      exec(`./${command}.sh`, [device], { cwd: cli });
    }
  }

  if (command === 'update') {
    exec('./update.sh', null, { cwd: cli });
  }
}

module.exports = main;
