'use strict';

const { compose, map, join, prop } = require('ramda');
const { isRunning } = require('../../lib/check');
const print = require('../../lib/logger');
const dispatch = require('../../lib/dispatch');
const { addLineNo, readline } = require('../../lib/line');
const { iosOnly } = require('../../lib/parser');

const PLATFORM = 'ios';

function main(command, args) {
  const { name } = args;
  const log = print('log');

  if (command === 'uninstall' && isRunning(PLATFORM)) {
    const { pkg } = require('../../config');
    const uninstall = require('../../process/ios/uninstall')();

    dispatch(uninstall(pkg.ios.id));
  }

  if (command === 'close' && isRunning(PLATFORM)) {
    const closeAll = require('../../process/ios/closeAll')();

    dispatch(closeAll());
  }

  if (command === 'create') {
    // device types
    const listDeviceTypes = require('../../process/ios/listDeviceTypes')();
    const deviceTypes = compose(
      iosOnly('devicetypes', 'name'),
      prop('stdout'),
      dispatch.ninja,
      listDeviceTypes
    )();
    const dtNames = deviceTypes.map(({ name }) => name);
    const dtIdx = readline(dtNames, 'Select a device type');
    const dtIds = deviceTypes.map(({ identifier }) => identifier);
    const deviceType = dtIds[dtIdx];

    // runtimes
    const listRuntimes = require('../../process/ios/listRuntimes')();
    const runtimes = compose(
      iosOnly('runtimes', 'name'),
      prop('stdout'),
      dispatch.ninja,
      listRuntimes
    )();

    const rtNames = runtimes.map(({ name }) => name);
    const rtIdx = readline(rtNames, 'Select a runtime');
    const rtIds = runtimes.map(({ identifier }) => identifier);
    const runtime = rtIds[rtIdx];

    if (deviceType && runtime) {
      const create = require('../../process/ios/create')();

      dispatch(create(name, deviceType, runtime));
    }
  }

  if (command === 'list') {
    const list = require('../../process/ios/list')();

    compose(
      log,
      addLineNo,
      join('\n'),
      map(({ name }) => ` ${name}`),
      iosOnly('devices', 'name'),
      prop('stdout'),
      dispatch.ninja,
      list
    )();
  }

  if (command === 'open' || command === 'remove') {
    const list = require('../../process/ios/list')();
    const vm = compose(
      iosOnly('devices', 'name'),
      prop('stdout'),
      dispatch.ninja,
      list
    )();
    const { names, ids } = vm.reduce(
      (acc, item) => {
        return {
          names: [...acc.names, item.name],
          ids: [...acc.ids, item.udid]
        };
      },
      { names: [], ids: [] }
    );
    const idx = readline(names, 'Select a device');
    const udid = ids[idx];

    if (udid) {
      const ps = require(`../../process/ios/${command}`)();

      dispatch(ps(udid));
    }
  }
}

module.exports = main;
