'use strict';

const { compose, join, map, uniq, prop } = require('ramda');
const { getExecDir } = require('../../lib/path');
const { isRunning } = require('../../lib/check');
const { readline } = require('../../lib/line');
const print = require('../../lib/logger');
const exec = require('../../lib/exec');
const {
  getDevices,
  getVMInfo,
  getDeviceTypes,
  getRuntimes
} = require('../../compute/ios');

const log = print('log');
const PLATFORM = 'ios';

// TODO: move to `lib`
const _getProps = (propName) =>
  compose(
    uniq,
    map(prop(propName))
  );

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
    const { stdout: tOut } = exec.ninja(
      'xcrun',
      ['simctl', 'list', '--json', 'devicetypes'],
      { encoding: 'utf8' }
    );
    const deviceTypes = getDeviceTypes(tOut);
    const tNames = _getProps('name')(deviceTypes);
    const tIdx = readline(tNames, 'Select a device type');
    const deviceType = compose(
      prop(tIdx),
      _getProps('identifier')
    )(deviceTypes);

    const { stdout: rOut } = exec.ninja(
      'xcrun',
      ['simctl', 'list', '--json', 'runtimes'],
      { encoding: 'utf8' }
    );
    const runtimes = getRuntimes(rOut);
    const rNames = _getProps('name')(runtimes);
    const rIdx = readline(rNames, 'Select a runtime');
    const runtime = compose(
      prop(rIdx),
      _getProps('identifier')
    )(runtimes);

    if (deviceType && runtime) {
      exec('xcrun', ['simctl', 'create', `${name}`, deviceType, runtime], {
        cwd,
        shell: true
      });
    }
  }

  if (command === 'list') {
    const { stdout } = exec.ninja(
      'xcrun',
      ['simctl', 'list', '--json', 'devices', 'available'],
      { encoding: 'utf8' }
    );

    compose(
      log,
      join('\n'),
      _getProps('name'),
      getDevices
    )(stdout);
  }

  if (command === 'open' || command === 'remove') {
    const { stdout } = exec.ninja(
      'xcrun',
      ['simctl', 'list', '--json', 'devices', 'available'],
      { encoding: 'utf8' }
    );
    const vm = getVMInfo(stdout);
    const names = _getProps('name')(vm);
    const idx = readline(names, 'Select a device');
    const ids = _getProps('udid')(vm);
    const udid = ids[idx];

    if (udid) {
      exec(`./${command}.sh`, [udid], { cwd });
    }
  }
}

module.exports = main;
