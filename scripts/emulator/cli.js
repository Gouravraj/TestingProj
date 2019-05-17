#!/usr/bin/env node

const yargs = require('yargs');
const getDeviceList = require('./getDeviceList');
const options = require('./create/options');
const exec = require('../utils/exec');

// prettier-ignore
const argv = yargs
  .help('help', 'show help').alias('help', 'h')
  .command('create', 'create virtual device', (yargs) => {
    yargs.options(options)
  })
  .command('list', 'list devices')
  .command('open', 'open a device')
  .command('delete', 'delete virtual device', (yargs) => {
    yargs.options({
      device: options.device
    })
  })
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

if (command === 'open') {
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

  const device = getDeviceList(stdout);

  if (device) {
    exec('./cli.sh', [device], {
      cwd
    });
  }
}

if (command === 'delete') {
  exec('./cli.sh', [argv.device], {
    cwd
  });
}
