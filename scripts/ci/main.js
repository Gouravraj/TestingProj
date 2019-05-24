const conf = require('../config');
const exec = require('../helpers/exec');
const print = require('../helpers/logger');
const sleep = require('../helpers/sleep');
const { createTab } = require('../helpers/tab');
const { cli, osHome } = require('../helpers/path');
const { isRunning } = require('../helpers/check');
const create = require('../commands/create');
const sdk = require('../commands/sdk')(cli);
const uninstall = require('../commands/uninstall')(cli);
const close = require('../commands/close')(cli);

const log = print('log');
const dLog = print.stream();

const DEVICE_NAME = 'android_9';
const SDK_CFG = `${osHome}/.android/repositories.cfg`;

async function main(command, args) {
  const { name, device, api } = args;

  if (command === 'run') {
    dLog('Checking SDK config file (create if not exist)', (done) => {
      exec.touch(SDK_CFG);

      done();
    });

    dLog('Installing system-image (sdkmanager)', (done) => {
      exec.ninja(sdk());

      done();
    });

    dLog(
      'Checking whether virtual device existence (create if not exist)',
      (done) => {
        const { stdout: isDeviceExist } = exec.ninja([
          './is_device_exist.sh',
          [DEVICE_NAME],
          { cwd: cli, encoding: 'utf8' }
        ]);

        if (isDeviceExist.trim() === '0') {
          exec.ninja(create(DEVICE_NAME || name, device, api));
        }

        done();
      }
    );

    // close emulators if already opened
    // it might not be using when multiple devices testing
    if (isRunning()) {
      dLog('Closing opened emulator', async (done) => {
        exec.ninja(close());

        done();
      });

      await sleep(4000);
    }

    dLog(
      'Opening virtual device (open new tab & launch Android emulator)',
      (done) => {
        createTab([`${cli}/open.sh ${DEVICE_NAME}`], { silence: true });

        done();
      }
    );

    // TODO: remove sleep after creating check script
    await sleep(10000);

    dLog('Waiting the emulator (is device ready?)', async (done) => {
      exec.ninja(['./check_emulator_ready.sh', null, { cwd: cli }]);

      done();
    });

    dLog('Launching test scripts', (done) => {
      exec('npm', ['run', 'android'], { stdio: 'inherit' });

      done();
    });

    log('Finish UI test.');
  }

  if (command === 'clean' && isRunning()) {
    dLog('Uninstalling app', (done) => {
      exec.ninja(uninstall(conf.android.id));

      done();
    });

    await sleep(8000);

    dLog('Closing the emulator', (done) => {
      exec.ninja(close());

      done();
    });

    log('Finish cleanup.');
  }
}

module.exports = main;
