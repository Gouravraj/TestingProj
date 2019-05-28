'use strict';

const { compose, length } = require('ramda');
const { getExecDir } = require('./path');
const { trim, cut } = require('./parser');
const exec = require('./exec');

function isRunning(platform = '') {
  if (platform === 'ios') {
    return (id) => {
      const { stdout } = exec.ninja(
        'xcrun',
        ['simctl', 'list', '|', 'grep', 'Booted'],
        {
          encoding: 'utf8',
          shell: true
        }
      );

      const found = stdout.split(/\n/g).find((line) => {
        const [name] = /[^(]*/.exec(line.trim());
        const [, udid] = /\((.*?)\)/.exec(line.trim());

        return [name, udid].includes(id);
      });

      return !!found;
    };
  } else if (platform === 'android') {
    // TODO: check with device name
    const { stdout } = exec.ninja('adb', ['devices'], { encoding: 'utf8' });
    const len = compose(
      length,
      cut(1),
      trim.stream()
    )(stdout);

    return len > 0;
  }
}

function isDeviceExist(platform = '') {
  const cwd = getExecDir(platform);

  return (name = '') => {
    const { stdout } = exec.ninja('./is_device_exist.sh', [name], {
      cwd,
      encoding: 'utf8'
    });

    return stdout.trim() === '1';
  };
}

exports.isRunning = isRunning;
exports.isDeviceExist = isDeviceExist;
