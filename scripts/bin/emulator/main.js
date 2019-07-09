'use strict';

const { isRunning } = require('../../lib/check');
const dispatch = require('../../lib/dispatch');
const { addLineNo, readline } = require('../../lib/line');

const PLATFORM = 'android';

function main(command, args) {
  const { name, device, api } = args;

  if (command === 'uninstall' && isRunning(PLATFORM)) {
    const { pkg } = require('../../../config/scripts.config');
    const uninstall = require('../../ps/android/uninstall')();

    dispatch(uninstall(pkg.android.id));
  }

  if (command === 'close' && isRunning(PLATFORM)) {
    const closeAll = require('../../ps/android/closeAll')();

    dispatch(closeAll());
  }

  if (command === 'create') {
    const create = require('../../ps/android/create')();

    dispatch(create(name, 'google_apis/x86_64', api, device));
  }

  if (command === 'list') {
    const log = require('../../lib/logger')('log');
    const list = require('../../ps/android/list')();
    const applyLineNo = addLineNo.replace(/^Name:/);
    const { stdout } = dispatch.ninja(list());

    log(applyLineNo(stdout));
  }

  if (command === 'open' || command === 'remove') {
    const list = require('../../ps/android/list')();
    const { stdout } = dispatch.ninja(list());
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
      const ps = require(`../../ps/android/${command}`)({
        stdio: 'ignore'
      });

      dispatch(ps(device));
    }
  }

  if (command === 'update') {
    const update = require('../../ps/android/update')();

    dispatch(update());
  }
}

module.exports = main;
