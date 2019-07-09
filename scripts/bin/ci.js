'use strict';

const yargs = require('yargs');
const main = require('./ci/main');
const conf = require('../../config/scripts.config');

const options = {
  platform: {
    alias: 'p',
    describe: 'choose a platform',
    choices: ['ios', 'android'],
    default: 'android'
  }
};

// prettier-ignore
const argv = yargs
  .help('help', 'show help').alias('help', 'h')
  .command('run', 'only for CI pipeline', (yargs) => {
    yargs.options({
      ...options,
      tests: {
        alias: 't',
        describe: 'run tests',
        default: true
      }
    })
  })
  .command('clean', 'uninstall app and close the emulator', (yargs) => {
    yargs.options(options)
  })
  .demandCommand(1, 'choose a command')
  .argv;

main(argv, conf);
