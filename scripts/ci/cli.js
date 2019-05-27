'use strict';

const yargs = require('yargs');
const main = require('./main');

const option = [
  'platform',
  {
    alias: 'p',
    describe: 'choose a platform',
    choices: ['ios', 'android'],
    default: 'android'
  }
];

// prettier-ignore
const argv = yargs
  .help('help', 'show help').alias('help', 'h')
  .command('run', 'only for CI pipeline', (yargs) => {
    yargs.option(...option)
  })
  .command('clean', 'uninstall app and close the emulator', (yargs) => {
    yargs.option(...option)
  })
  .demandCommand(1, 'choose a command')
  .argv;

const { _, platform } = argv;
const [command] = _;

main(command, platform);
