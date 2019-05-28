'use strict';

const _getVM = require('./internal/_getVM')('ios');
const _getIdentifiers = require('./internal/_getIdentifiers');
const { readline } = require('../lib/line');

function open(out) {
  const vm = _getVM(out);

  return {
    ids: vm.map(({ udid }) => udid),
    names: vm.map(({ name }) => name)
  };
}

function list(out) {
  const json = JSON.parse(out);
  const deviceIds = _getIdentifiers(json, 'devicetypes');

  return _filteredDeviceIds(deviceIds).join('\n');
}

function create(out) {
  const json = JSON.parse(out);
  const deviceIds = _getIdentifiers(json, 'devicetypes');
  const dIdx = readline(_filteredDeviceIds(deviceIds), 'Select a device name');

  if (deviceIds[dIdx]) {
    const runtimeIds = _getIdentifiers(json, 'runtimes');
    const rIdx = readline(
      runtimeIds.filter(_filterAvaliableRuntime),
      'Select a runtime id'
    );

    return { deviceId: deviceIds[dIdx], runtimeId: runtimeIds[rIdx] };
  }

  return { deviceId: deviceIds[dIdx] };
}

exports.create = create;
exports.remove = open;
exports.list = list;
exports.open = open;

function _filteredDeviceIds(deviceIds) {
  return deviceIds.filter(_filterAvaliableDevice).map(_pickDeviceName);
}

function _pickDeviceName(id) {
  return id
    .split('.')
    .slice(-1)
    .join('');
}

function _filterAvaliableDevice(id) {
  return id.indexOf('com.apple.CoreSimulator.SimDeviceType.iPhone') > -1;
}

function _filterAvaliableRuntime(id) {
  return id.indexOf('com.apple.CoreSimulator.SimRuntime.iOS') > -1;
}
