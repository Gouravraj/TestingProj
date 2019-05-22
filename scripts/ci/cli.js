#!/usr/bin/env node

const yargs = require('yargs');
const main = require('./main');
const options = require('../yargs/options');

// prettier-ignore
const argv = yargs
  .help('help', 'show help').alias('help', 'h')
  .command('run', 'only for CI pipeline', (yargs) => {
    yargs.options(options)
  })
  .demandCommand(1, 'choose a command')
  .argv;

const { _ } = argv;
const [command] = _;

if (command === 'run') {
  main(argv);
}
