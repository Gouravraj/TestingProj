#!/usr/bin/env node

const yargs = require('yargs');

// prettier-ignore
const argv = yargs
  .help('help', 'show help').alias('help', 'h')
  .command('ios', 'extract .app')
  .command('android', 'extract .apk')
  .command('both', 'ios, android')
  .demandCommand(1, 'choose a platform, <ios|android|both>')
  .argv;

const { _ } = argv;
const [command] = _;

if (command === 'ios') {
  require('./platforms').ios();
}

if (command === 'android') {
  require('./platforms').android();
}

if (command === 'both') {
  require('./platforms').ios();
  require('./platforms').android();
}
