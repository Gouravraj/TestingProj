#!/usr/bin/env node

const yargs = require('yargs');
const main = require('./main');
const options = require('../yargs/options');

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

const { _ } = argv;
const [command] = _;

main(command, argv);