'use strict';

const { androidHomeDir } = require('../../../lib/path');
const { isDeviceExist } = require('../../../lib/check');
const step = require('../../../lib/step').withConf('STEP:');
const exec = require('../../../lib/exec');
const { touch } = require('../../../lib/files');
const print = require('../../../lib/logger');

const dLog = print.custom('cyan');

function run(argv, cfg, cli) {
  const { platform, tests } = argv;
  const { auto = false, list = [] } = cfg.devices;
  let device = {
    device: cfg.defaults.device,
    api: cfg.defaults.api,
    alu: cfg.defaults.alu,
    abi: cfg.defaults.abi
  };

  if (platform === 'android') {
    // TODO: multiple ports
    step('Checking ADB status (start if not running)', (done) => {
      exec('./start_adb.sh', null, { cwd: cli }, { force: true });

      done();
    });

    step('Checking SDK config file (create if not exist)', (done) => {
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
        const alu = device.alu === '64' ? '_64' : '';

        exec.ninja(
          'sdkmanager',
          [`"system-images;android-${device.api};google_apis;x86${alu}"`],
          { shell: true }
        );

        done();
      });
    }

    const isExist = isDeviceExist(device.name);

    if (isExist) {
      isCreated = true;
    }

    step(
      'Checking whether virtual device existence (`auto: true` - create if not exist)',
      (done) => {
        if (!isExist && auto) {
          exec.ninja(
            './avdmanager',
            [
              'create',
              'avd',
              '--force',
              '--name',
              `'${device.name}'`,
              '--abi',
              `${device.abi}`,
              '--package',
              `'system-images;android-${device.api};google_apis;x86_64'`,
              '--device',
              `'${device.device}'`
            ],
            {
              cwd: `${androidHomeDir}/tools/bin`,
              shell: true
            }
          );

          isCreated = true;
        }

        done();
      }
    );

    if (isCreated) {
      step('Opening virtual device', (done) => {
        exec('./open.sh', [device.name], { cwd: cli, stdio: 'ignore' });

        done();
      });

      step('Waiting until virtual device ready', (done) => {
        exec.ninja('./check_emulator_ready.sh', null, { cwd: cli });

        done();
      });

      if (tests) {
        // TODO: will apply suite
        step('Launching UI test scripts', (done) => {
          exec('npm', ['run', 'android'], { stdio: 'inherit' });

          done();
        });
      }
    }

    dLog('\n>> Finish << ', `[${device.name}]\n`);
  }
}

module.exports = run;
