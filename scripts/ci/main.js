const conf = require('../config');
const exec = require('../helpers/exec');
const print = require('../helpers/logger');
const sleep = require('../helpers/sleep');
const { createTab } = require('../helpers/tab');
const { cli, osHome } = require('../helpers/path');
const waitEmu = require('../helpers/waitEmu');
const { isRunning } = require('../helpers/check');
const create = require('../commands/create');
const sdk = require('../commands/sdk')(cli);
const uninstall = require('../commands/uninstall')(cli);
const close = require('../commands/close')(cli);

const DEVICE_NAME = 'android_9';
const SDK_CFG = `${osHome}/.android/repositories.cfg`;

async function main(command, args) {
  const log = print('ci');
  const { name, device, api } = args;

  if (command === 'run') {
    log('Checking SDK config file... (will create if not exist)');
    exec.touch(SDK_CFG);

    await sleep(1000);

    log('Creating package(SDK)...');
    exec.ninja(sdk());

    await sleep(1000);

    log(
      'Checking whether virtual device existence... (will create if not exist)'
    );
    const { stdout: isDeviceExist } = exec.ninja([
      './is_device_exist.sh',
      [DEVICE_NAME],
      { cwd: cli, encoding: 'utf8' }
    ]);

    await sleep(1000);

    if (isDeviceExist.trim() === '0') {
      exec.ninja(create(DEVICE_NAME || name, device, api));

      await sleep(1000);
    }

    log('Opening virtual device... (open new tab & launch Android emulator)');
    createTab([`${cli}/open.sh ${DEVICE_NAME}`], { silence: true });

    await sleep(20000);

    log('Waiting the emulator... (is device ready?)');
    await waitEmu(1000);

    log('Launching test scripts...');
    exec('npm', ['run', 'android'], { stdio: 'inherit' });

    await sleep(1000);

    log('Finish UI test, awesome!');
  }

  if (command === 'clean' && isRunning()) {
    log('Uninstalling app...');
    exec.ninja(uninstall(conf.android.id));

    await sleep(8000);

    log('Closing the emulator...');
    exec.ninja(close());

    await sleep(1000);

    log('Finish cleanup, awesome!');
  }
}

module.exports = main;
