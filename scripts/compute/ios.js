'use strict';

const { compose, keys, reduce, prop } = require('ramda');
const { json } = require('../lib/parser');

function getVMInfo(out) {
  const obj = compose(
    prop('devices'),
    json
  )(out);

  return Object.keys(obj)
    .reduce((acc, runtimeName) => {
      const info = obj.devices[runtimeName];
      const vm = info.reduce((innerAcc, item) => {
        if (item.name.indexOf('iPhone') > -1) {
          return [...innerAcc, item];
        }

        return innerAcc;
      }, []);

      if (vm.length) {
        return [...acc, vm];
      }

      return acc;
    }, [])
    .flat();
}

function getDevices(out) {
  const deviceIds = _getExtractInfo(json(out), 'devices');

  return deviceIds.filter(({ name }) => !/iPad|Watch|TV/g.test(name));
}

function getDeviceTypes(out) {
  const deviceTypes = _getExtractInfo(json(out), 'devicetypes');

  return deviceTypes.filter(
    _filterId('com.apple.CoreSimulator.SimDeviceType.iPhone')
  );
}

function getRuntimes(out) {
  const runtimes = _getExtractInfo(json(out), 'runtimes');
  const names = runtimes.filter(
    _filterId('com.apple.CoreSimulator.SimRuntime.iOS')
  );

  return names;
}

exports.getVMInfo = getVMInfo;
exports.getDevices = getDevices;
exports.getDeviceTypes = getDeviceTypes;
exports.getRuntimes = getRuntimes;

function _filterId(key) {
  return ({ identifier }) => identifier.indexOf(key) > -1;
}

function _getExtractInfo(obj, propName) {
  const parent = obj[propName];
  const isArray = Array.isArray(parent);

  return compose(
    reduce((acc, key) => {
      if (isArray) {
        return [...acc, ...parent];
      }

      return [...acc, ...parent[key]];
    }, []),
    keys
  )(parent);
}
