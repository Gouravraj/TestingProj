'use strict';

const { compose, length, equals, prop } = require('ramda');
const { trim, cut } = require('./parser');
const dispatch = require('./dispatch');

function isRunning(platform = '') {
  const listBooted = require(`../process/${platform}/listBooted`)();
  const stdout = compose(
    prop('stdout'),
    dispatch.ninja,
    listBooted
  )();

  if (platform === 'ios') {
    return (id) => {
      // TODO: move to `parser`
      const found = stdout.split(/\n/g).find((line) => {
        const [name] = /[^(]*/.exec(line.trim());
        const [, udid] = /\((.*?)\)/.exec(line.trim());

        return [name, udid].includes(id);
      });

      return !!found;
    };
  } else if (platform === 'android') {
    // TODO: check with device name
    const len = compose(
      length,
      cut(1),
      trim.stream()
    )(stdout);

    return len > 0;
  }
}

function isDeviceExist(platform = '') {
  return (name = '') => {
    // TODO: create ios `process`
    const isDeviceExist = require(`../process/${platform}/isDeviceExist`)();

    return compose(
      equals('1'),
      trim,
      prop('stdout'),
      dispatch.ninja,
      isDeviceExist
    )(name);
  };
}

exports.isRunning = isRunning;
exports.isDeviceExist = isDeviceExist;
