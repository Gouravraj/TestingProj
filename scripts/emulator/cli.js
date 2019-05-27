'use strict';

const yargs = require('yargs');
const id = require('shortid');
const main = require('./main');

const defaults = {
  name: id.generate(),
  api: '28',
  device: 'Nexus 6P'
};

const options = {
  name: {
    alias: 'n',
    description: 'device name',
    default: defaults.name
  },
  api: {
    alias: 'p',
    description: `API number, (e.g ${defaults.api})`,
    default: defaults.api
  },
  device: {
    alias: 'd',
    description: 'device type',
    default: defaults.device
  }
};

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
