#!/usr/bin/env node

const yargs = require('yargs');
const readlineSync = require('readline-sync');
const getDeviceList = require('./getDeviceList');
const options = require('./options');
const exec = require('../utils/exec');

// prettier-ignore
const argv = yargs
  .help('help', 'show help').alias('help', 'h')
  .command('create', 'create virtual device', (yargs) => {
    yargs.options(options)
  })
  .command('list', 'list devices')
  .command('update', 'update packages')
  .command('open', 'open a device')
  .command('delete', 'delete a device')
  .demandCommand(1, 'choose a command')
  .argv;

const { _, name, api, device } = argv;
const [command] = _;
const cwd = `${__dirname}/${command}`;

if (command === 'create') {
  const cmd = require('./create/cli');

  exec(...cmd(name, api, device));
}

if (command === 'list') {
  exec('./cli.sh', [], {
    cwd
  });
}

if (command === 'update') {
  exec('./cli.sh', [], {
    cwd
  });
}

if (command === 'open' || command === 'delete') {
  const { stdout } = exec(
    './cli.sh',
    [],
    {
      cwd: `${__dirname}/list`
    },
    {
      silence: true
    }
  );

  const deviceList = getDeviceList(stdout);
  const idx = readlineSync.keyInSelect(deviceList, 'Select a device');
  const device = deviceList[idx];

  if (device) {
    exec('./cli.sh', [device], {
      cwd
    });
  }
}
