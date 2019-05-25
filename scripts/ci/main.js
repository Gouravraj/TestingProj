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
    let device = {
      device: cfg.defaults.device,
      api: cfg.defaults.api,
      alu: cfg.defaults.alu
    };

    if (platform === 'android') {
      step('Checking ADB status (start if not running)', (done) => {
        exec('./start_adb.sh', null, { cwd: cli }, { force: true });

        done();
      });

      step('Checking SDK config file (create if not exist)', (done) => {
        exec.touch(cfg.sdk.repos);

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

      dLog('\n>> DEVICE << ', `[${device.name}]\n`);

      step('Installing system-image (sdkmanager)', (done) => {
        const alu = device.alu === '64' ? '_64' : '';

        exec.ninja(
          'sdkmanager',
          [`"system-images;android-${device.api};google_apis;x86${alu}"`],
          { shell: true }
        );

        done();
      });

      const isExist = isDeviceExist(device.name);

      if (isExist) {
        isCreated = true;
      }

      step(
        'Checking whether virtual device existence (create if not exist)',
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
                'google_apis/x86_64',
                '--package',
                `'system-images;android-${device.api};google_apis;x86_64'`,
                '--device',
                `'${device.device}'`
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

        step('Waiting until virtual device ready', (done) => {
          exec.ninja('./check_emulator_ready.sh', null, { cwd: cli });

          done();
        });

        // TODO: will apply suite
        step('Launching test scripts', (done) => {
          exec('npm', ['run', 'android'], {
            stdio: [process.stdin, process.stdout, process.stderr]
          });

          done();
        });

        dLog('\n>> Finish << ', `[${device.name}]!\n`);
      }
    }
  }

  if (command === 'clean' && isRunning(platform)) {
    step('Uninstalling app', (done) => {
      exec.ninja('./uninstall.sh', [conf.pkg.android.id], {
        cwd: cli,
        force: true
      });

      done();
    });

    await sleep(8000);

    step('Closing the emulator', (done) => {
      exec.ninja('./close.sh', null, { cwd: cli, force: true });

      done();
    });

    log('Finish cleanup.');
  }
}

module.exports = main;
