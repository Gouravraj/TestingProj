'use strict';

const step = require('../../lib/step').withConf('STEP:');
const dispatch = require('../../lib/dispatch');
const print = require('../../lib/logger');

function run(argv, platform, cfg) {
  const { test, suite } = argv;
  const { auto = false, devices = [] } = cfg;
  const dLog = print.custom('cyan');

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

  for (let i = 0, len = devices.length; i < len; i++) {
    const { name, devicetype, runtime, api, abi, device } = devices[i];
    let isCreated = false;

    dLog('\n>> Device << ', `[${name}]\n`);

    if (platform === 'android') {
      step('Installing system-image (sdkmanager)', (done) => {
        const installSdk = require('../../ps/android/installSdk')();

        dispatch.ninja(installSdk(api, '_64'));

        done();
      });
    }

    const isDeviceExist = require('../../lib/check').isDeviceExist(platform);
    const isExist = isDeviceExist(name);

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
              name,
              `${typePrefix}.${devicetype.replace(' ', '-')}`,
              `${runtimePrefix}.iOS-${runtime.replace('.', '-')}`
            );
          } else if (platform === 'android') {
            ps = create(name, abi, api, device);
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

        dispatch(open(name));

        done();
      });

      step('Waiting until virtual device ready', (done) => {
        const ready = require(`../../ps/${platform}/ready`)();

        dispatch.force(ready(name));

        done();
      });

      if (test) {
        // TODO: apply suite
        step('Launching UI test scripts', (done) => {
          const test = require(`../../ps/${platform}/test`)({
            stdio: 'inherit'
          });

          dispatch(test(suite));

          done();
        });
      }
    }

    dLog('\n>> Finish << ', `[${name}]\n`);
  }
}

module.exports = run;
