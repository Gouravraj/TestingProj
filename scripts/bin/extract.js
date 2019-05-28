'use strict';

const yargs = require('yargs');
const { ios, android } = require('./extract/platforms');

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
  ios();
}

if (command === 'android') {
  android();
}

if (command === 'both') {
  ios();
  android();
}
