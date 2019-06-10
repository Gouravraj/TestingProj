'use strict';

const step = require('../../lib/step').withConf('STEP:');
const dispatch = require('../../lib/dispatch');
const print = require('../../lib/logger');

function run(argv, cfg) {
  const { platform, tests } = argv;
  const { auto = false, list = [] } = cfg.devices;
  const dLog = print.custom('cyan');
  let device = {};

  if (platform === 'ios') {
    device = {
      devicetype: cfg.defaults.devicetype,
      runtime: cfg.defaults.runtime
    };
  } else if (platform === 'android') {
    device = {
      device: cfg.defaults.device,
      api: cfg.defaults.api,
      alu: cfg.defaults.alu,
      abi: cfg.defaults.abi
    };
  }

  if (platform === 'android') {
    // TODO: multiple ports
    step('Checking ADB status (start if not running)', (done) => {
      const startAdb = require('../../ps/android/startAdb')();

      dispatch.force(startAdb());

      done();
    });

    step('Checking SDK config file (create if not exist)', (done) => {
      const { touch } = require('../../lib/files');

      touch(cfg.sdk.repos);

      done();
    });
  }

  for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i];
    let isCreated = false;

    if (typeof item === 'string') {
      device = {
        ...device,
        name: item
      };
    } else {
      device = {
        ...device,
        ...item
      };
    }

    dLog('\n>> Device << ', `[${device.name}]\n`);

    if (platform === 'android') {
      step('Installing system-image (sdkmanager)', (done) => {
        const installSdk = require('../../ps/android/installSdk')();
        const alu = device.alu === '64' ? '_64' : '';

        dispatch.ninja(installSdk(device.api, alu));

        done();
      });
    }

    const isDeviceExist = require('../../lib/check').isDeviceExist(platform);
    const isExist = isDeviceExist(device.name);

    if (isExist) {
      isCreated = true;
    }

    step(
      'Checking whether virtual device existence (`auto: true` - create if not exist)',
      (done) => {
        if (!isExist && auto) {
          const create = require(`../../ps/${platform}/create`)();
          let ps = function() {};

          if (platform === 'ios') {
            const typePrefix = 'com.apple.CoreSimulator.SimDeviceType';
            const runtimePrefix = 'com.apple.CoreSimulator.SimRuntime';

            ps = create(
              device.name,
              `${typePrefix}.${device.devicetype.replace(' ', '-')}`,
              `${runtimePrefix}.iOS-${device.runtime.replace('.', '-')}`
            );
          } else if (platform === 'android') {
            ps = create(device.name, device.abi, device.api, device.device);
          }

          dispatch.ninja(ps);

          isCreated = true;
        }

        done();
      }
    );

    if (isCreated) {
      step('Opening virtual device', (done) => {
        const open = require(`../../ps/${platform}/open`)({
          stdio: 'ignore'
        });

        dispatch(open(device.name));

        done();
      });

      step('Waiting until virtual device ready', (done) => {
        const ready = require(`../../ps/${platform}/ready`)();

        dispatch.force(ready(device.name));

        done();
      });

      if (tests) {
        // TODO: apply suite
        step('Launching UI test scripts', (done) => {
          const test = require(`../../ps/${platform}/test`)({
            stdio: 'inherit'
          });

          dispatch(test());

          done();
        });
      }
    }

    dLog('\n>> Finish << ', `[${device.name}]\n`);
  }
}

module.exports = run;
