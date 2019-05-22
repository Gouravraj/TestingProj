#!/usr/bin/env node

const yargs = require('yargs');
const main = require('./main');
const options = require('../yargs.options');

// prettier-ignore
const argv = yargs
  .help('help', 'show help').alias('help', 'h')
  .command('create', 'create virtual device', (yargs) => {
    yargs.options(options)
  })
  .command('list', 'list virtual devices')
  .command('update', 'update SDK')
  .command('open', 'open virtual device')
  .command('delete', 'delete virtual device')
  .command('uninstall', 'remove .apk from device')
  .command('close', 'close virtual device')
  .demandCommand(1, 'choose a command')
  .argv;

const { _ } = argv;
const [command] = _;

main(command, argv);
