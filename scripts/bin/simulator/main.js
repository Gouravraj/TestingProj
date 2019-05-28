'use strict';

const { compose } = require('ramda');
const { getExecDir } = require('../../lib/path');
const { isRunning } = require('../../lib/check');
const { readline } = require('../../lib/line');
const print = require('../../lib/logger');
const exec = require('../../lib/exec');
const { list, open, create, remove } = require('../../process/ios');

const log = print('log');
const PLATFORM = 'ios';

function main(command, args) {
  const cwd = getExecDir(PLATFORM);
  const { name } = args;

  if (command === 'uninstall' && isRunning(PLATFORM)) {
    const { pkg } = require('../../config');

    exec('./uninstall.sh', [pkg.ios.id], { cwd });
  }

  if (command === 'close' && isRunning(PLATFORM)) {
    exec('./close.sh', null, { cwd });
  }

  if (command === 'create') {
    const { stdout } = exec.ninja('xcrun', ['simctl', 'list', '--json'], {
      encoding: 'utf8'
    });

    const { deviceId, runtimeId } = create(stdout);

    if (deviceId && runtimeId) {
      exec('./create.sh', [`${name}`, deviceId, runtimeId], {
        cwd,
        shell: true
      });
    }
  }

  if (command === 'list') {
    const { stdout } = exec.ninja('xcrun', ['simctl', 'list', '--json'], {
      encoding: 'utf8'
    });

    compose(
      log,
      list
    )(stdout);
  }

  if (command === 'open') {
    const { stdout } = exec.ninja(
      'xcrun',
      ['simctl', 'list', '--json', 'devices', 'available'],
      { encoding: 'utf8' }
    );

    const { ids, names } = open(stdout);
    const idx = readline(names, 'Select a device name');
    const udid = ids[idx];

    if (udid) {
      exec('./open.sh', [udid], { cwd });
    }
  }

  if (command === 'remove') {
    const { stdout } = exec.ninja(
      'xcrun',
      ['simctl', 'list', '--json', 'devices', 'available'],
      { encoding: 'utf8' }
    );

    const { ids, names } = remove(stdout);
    const idx = readline(names, 'Select a device name');
    const udid = ids[idx];

    if (udid) {
      exec('./remove.sh', [udid], { cwd });
    }
  }
}

module.exports = main;
