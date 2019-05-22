const create = require('./steps/create');
const open = require('./steps/open');
const waitEmu = require('./steps/waitEmu');
const tests = require('./steps/tests');
const uninstall = require('./steps/uninstall');
const close = require('./steps/close');
const print = require('../utils/logger');
const sleep = require('../utils/sleep');

const log = print('ci');

async function main(args) {
  const { name, device, api } = args;

  log('Creating virtual device...');
  create(name, device, api);

  await sleep(1000);

  log('Opening virtual device... (open new tab & launch Android emulator)');
  open(0);

  await sleep(5000);

  log('Waiting the emulator...');
  await waitEmu();

  await sleep(1000);

  log('Launching test scripts...');
  tests();

  await sleep(1000);

  log('Uninstalling app...');
  uninstall();

  await sleep(5000);

  log('Closing the emulator...');
  close();

  await sleep(1000);

  log('Finish UI test, awesome!');
}

module.exports = main;
