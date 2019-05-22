const conf = require('../config');
const exec = require('../helpers/exec');
const print = require('../helpers/logger');
const sleep = require('../helpers/sleep');
const { getDevices } = require('../helpers/parser');
const { createTab } = require('../helpers/tab');
const { cli } = require('../helpers/path');
const waitEmu = require('../helpers/waitEmu');
const { isRunning } = require('../helpers/check');
const create = require('../commands/create');
const sdk = require('../commands/sdk')(cli);
const list = require('../commands/list')(cli);
const uninstall = require('../commands/uninstall')(cli);
const close = require('../commands/close')(cli);

function ninja(cli) {
  return exec(...[...cli, { silence: true }]);
}

async function main(command, args) {
  const log = print('ci');
  const { name, device, api } = args;

  if (command === 'run') {
    log('Creating package(SDK)...');
    ninja(sdk());

    await sleep(1000);

    log('Creating virtual device...');
    ninja(create(name, device, api));

    await sleep(1000);

    log('Opening virtual device... (open new tab & launch Android emulator)');
    const { stdout } = ninja(list());
    const deviceList = getDevices(stdout.toString());

    if (deviceList[0]) {
      const cmd = `${cli}/open.sh ${deviceList[0]}`;

      createTab([cmd], {
        silence: true
      });
    }

    await sleep(20000);

    log('Waiting the emulator...');
    await waitEmu(1000);

    log('Launching test scripts...');
    exec('npm', ['run', 'android'], { stdio: 'inherit' });

    await sleep(1000);

    log('Uninstalling app...');
    ninja(uninstall(conf.android.id));

    await sleep(8000);

    log('Closing the emulator...');
    ninja(close());

    await sleep(1000);

    log('Finish UI test, awesome!');
  }

  if (command === 'clean' && isRunning()) {
    log('Uninstalling app...');
    ninja(uninstall(conf.android.id));

    await sleep(8000);

    log('Closing the emulator...');
    ninja(close());

    await sleep(1000);

    log('Finish cleanup, awesome!');
  }
}

module.exports = main;
