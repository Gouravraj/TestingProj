#!/usr/bin/env node

const exec = require('../utils/exec');
const yargs = require('yargs');
const options = require('./create/options');

// prettier-ignore
const argv = yargs
  .help('help', 'show help').alias('help', 'h')
  .command('create', 'create virtual device', (yargs) => {
    yargs.options(options)
  })
  .command('list', 'list devices')
  .command('open', 'open a device', (yargs) => {
    yargs.options({
      device: options.device
    })
  })
  .command('delete', 'delete virtual device', (yargs) => {
    yargs.options({
      device: options.device
    })
  })
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

if (command === 'open' || command === 'delete') {
  exec('./cli.sh', [argv.device], {
    cwd
  });
}
