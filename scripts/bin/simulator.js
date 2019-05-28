'use strict';

const yargs = require('yargs');
const id = require('shortid');
const main = require('./simulator/main');

const options = {
  name: {
    alias: 'n',
    description: 'device name',
    default: id.generate()
  }
};

// prettier-ignore
const argv = yargs
  .help('help', 'show help').alias('help', 'h')
  .command('create', 'create a device', (yargs) => {
    yargs.options(options)
  })
  .command('remove', 'remove a device')
  .command('list', 'list devices')
  .command('open', 'open a device')
  .command('close', 'close a device')
  .command('uninstall', 'uninstall .app')
  .demandCommand(1, 'choose a command')
  .argv;

const { _ } = argv;
const [command] = _;

main(command, argv);
