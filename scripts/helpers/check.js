'use strict';

const { compose } = require('ramda');
const exec = require('./exec');
const { getExec } = require('./path');
const { lineTrim, cut } = require('./parser');

function isRunning(platform = 'android') {
  if (platform === 'android') {
    const { stdout } = exec.ninja('adb', ['devices'], { encoding: 'utf8' });
    const devices = compose(
      cut(1),
      lineTrim.stream()
    )(stdout);

    return devices.length > 0;
  } else if (platform === 'ios') {
    // TODO: implement

    return false;
  }
}

function isDeviceExist(name = '') {
  const { stdout } = exec.ninja('./is_device_exist.sh', [name], {
    // TODO: multi-platform
    cwd: getExec('android'),
    encoding: 'utf8'
  });

  return stdout.trim() === '1';
}

exports.isRunning = isRunning;
exports.isDeviceExist = isDeviceExist;
