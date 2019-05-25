const conf = require('../config');
const exec = require('../helpers/exec');
const print = require('../helpers/logger');
const sleep = require('../helpers/sleep');
const { getExec, androidHome } = require('../helpers/path');
const { isRunning, isDeviceExist } = require('../helpers/check');

const log = print('log');
const dLog = print.custom('cyan');
const step = print.stream();

// TODO: multi-platform commands
async function main(command, platform) {
  const cfg = conf.ci[platform];
  const cli = getExec(platform);

  if (command === 'run') {
    const { auto = false, list = [] } = cfg.devices;

    if (platform === 'android') {
      step('Checking ADB status (start if not running)', (done) => {
        exec('./start_adb.sh', null, { cwd: cli }, { force: true });

        done();
      });

      step('Checking SDK config file (create if not exist)', (done) => {
        exec.touch(cfg.sdk.repos);

        done();
      });

      step('Installing system-image (sdkmanager)', (done) => {
        exec.ninja('./sdk.sh', null, { cwd: cli });

        done();
      });
    }

    for (let i = 0, len = list.length; i < len; i++) {
      const item = list[i];
      let isCreated = false;
      let device = {};

      if (typeof item === 'string') {
        device.name = item;
      } else {
        device = { ...item };
      }

      dLog('\n>> DEVICE << ', `[${device.name}]\n`);

      const isExist = isDeviceExist(device.name);

      if (isExist) {
        isCreated = true;
      }

      step(
        'Checking whether virtual device existence (create if not exist)',
        (done) => {
          if (!isExist && auto) {
            const api = device.api || cfg.defaults.ap;

            exec.ninja(
              './avdmanager',
              [
                'create',
                'avd',
                '--name',
                `'${device.name}'`,
                '--package',
                `'system-images;android-${api};google_apis;x86_64'`,
                '--device',
                `'${device.device || cfg.defaults.device}'`
              ],
              {
                cwd: `${androidHome}/tools/bin`,
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

        // TODO: remove sleep after creating check script
        await sleep(15000);

        step('Waiting until virtual device ready', (done) => {
          exec.ninja('./check_emulator_ready.sh', null, { cwd: cli });

          done();
        });

        // TODO: will apply suite
        step('Launching test scripts', (done) => {
          exec('npm', ['run', 'android'], { stdio: 'inherit' });

          done();
        });

        log('Finish UI test.');
      }
    }
  }

  if (command === 'clean' && isRunning(platform)) {
    step('Uninstalling app', (done) => {
      exec.ninja('./uninstall.sh', [conf.pkg.android.id], { cwd: cli });

      done();
    });

    await sleep(8000);

    step('Closing the emulator', (done) => {
      exec.ninja('./close.sh', null, { cwd: cli });

      done();
    });

    log('Finish cleanup.');
  }
}

module.exports = main;
