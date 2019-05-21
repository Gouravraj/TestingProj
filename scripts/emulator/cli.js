#!/usr/bin/env node

const yargs = require('yargs');
const readlineSync = require('readline-sync');
const getDeviceList = require('./helpers/getDeviceList');
const options = require('./helpers/options');
const conf = require('../pkg/config');
const exec = require('../utils/exec');

// prettier-ignore
const argv = yargs
  .help('help', 'show help').alias('help', 'h')
  .command('create', 'create virtual device', (yargs) => {
    yargs.options(options)
  })
  .command('list', 'list devices')
  .command('update', 'update SDK')
  .command('open', 'open a device')
  .command('delete', 'delete a device')
  .command('uninstall', 'remove package from device')
  .demandCommand(1, 'choose a command')
  .argv;

const { _, name, api } = argv;
const [command] = _;
const baseName = `${__dirname}/commands/${command}`;
const baseFile = `${baseName}.sh`;

if (command === 'create') {
  exec(...require('./commands/create.js')(name, api));
}

if (command === 'list' || command === 'update') {
  exec(baseFile);
}

if (command === 'open' || command === 'delete') {
  const { stdout } = exec(baseFile, null, null, {
    silence: true
  });

  const deviceList = getDeviceList(stdout);
  const idx = readlineSync.keyInSelect(deviceList, 'Select a device');
  const device = deviceList[idx];

  if (device) {
    exec(baseFile, [device]);
  }
}

if (command === 'uninstall') {
  exec(baseFile, [conf.android.id]);
}
