'use strict';

const { compose, map, join } = require('ramda');
const { isRunning } = require('../../lib/check');
const print = require('../../lib/logger');
const dispatch = require('../../lib/dispatch');
const { addLineNo, readline } = require('../../lib/line');
const _iosOnly = require('./internal/_iosOnly');

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
      _iosOnly('devicetypes', 'name'),
      dispatch.ninja,
      listDeviceTypes()
    )();
    const dtNames = deviceTypes.map(({ name }) => name);
    const dtIdx = readline(dtNames, 'Select a device type');
    const dtIds = deviceTypes.map(({ identifier }) => identifier);
    const deviceType = dtIds[dtIdx];

    // runtimes
    const listRuntimes = require('../../process/ios/listRuntimes')();
    const runtimes = compose(
      _iosOnly('runtimes', 'name'),
      dispatch.ninja,
      listRuntimes()
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
      _iosOnly('devices', 'name'),
      dispatch.ninja,
      list()
    )();
  }

  if (command === 'open' || command === 'remove') {
    const list = require('../../process/ios/list')();
    const out = compose(
      dispatch.ninja,
      list()
    )();

    const names = compose(
      map(({ name }) => name),
      _iosOnly('devices', 'name')
    )(out);

    const ids = compose(
      map(({ udid }) => udid),
      _iosOnly('devices', 'name')
    )(out);

    const idx = readline(names, 'Select a device');
    const udid = ids[idx];

    if (udid) {
      const ps = require(`../../process/ios/${command}`)();

      dispatch(ps(udid));
    }
  }
}

module.exports = main;
