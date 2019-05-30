'use strict';

const { isRunning } = require('../../lib/check');
const dispatch = require('../../lib/dispatch');
const { addLineNo, readline } = require('../../lib/line');

const PLATFORM = 'android';

function main(command, args) {
  const { name, device, api } = args;

  if (command === 'uninstall' && isRunning(PLATFORM)) {
    const { pkg } = require('../../config');
    const uninstall = require('../../process/android/uninstall')();

    dispatch(uninstall(pkg.android.id));
  }

  if (command === 'close' && isRunning(PLATFORM)) {
    const closeAll = require('../../process/android/closeAll')();

    dispatch(closeAll());
  }

  if (command === 'create') {
    const create = require('../../process/android/create')();

    dispatch(create(name, 'google_apis/x86_64', api, device));
  }

  if (command === 'list') {
    const log = require('../../lib/logger')('log');
    const list = require('../../process/android/list')();
    const applyLineNo = addLineNo.replace(/^Name:/);
    const { stdout } = dispatch.ninja(list());

    log(applyLineNo(stdout));
  }

  if (command === 'open' || command === 'remove') {
    const list = require('../../process/android/list')();
    const { stdout } = dispatch(list());
    const deviceList = stdout.split(/\n/g).reduce((acc, line) => {
      if (!line) {
        return acc;
      }

      const device = line.trim().replace('Name: ', '');

      return [...acc, device];
    }, []);
    const idx = readline(deviceList, 'Select a device');
    const device = deviceList[idx];

    if (device) {
      const ps = require(`../../process/android/${command}`)({
        stdio: 'ignore'
      });

      dispatch(ps(device));
    }
  }

  if (command === 'update') {
    const update = require('../../process/android/update')();

    dispatch(update());
  }
}

module.exports = main;
