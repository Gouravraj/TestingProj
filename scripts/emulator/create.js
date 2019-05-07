#!/usr/bin/env node

const { spawnSync } = require('child_process');
const yargs = require('yargs');

const argv = yargs
  .help('help', 'show help')
  .alias('help', 'h')
  .option('name', {
    alias: 'n',
    description: 'Device name',
    required: true
  })
  .option('api', {
    alias: 'p',
    description: 'API number, (e.g 28)',
    default: '28'
  })
  .option('device', {
    alias: 'd',
    description: 'Device',
    required: true
  }).argv;

const { stdout } = spawnSync(
  'avdmanager',
  [
    'create',
    'avd',
    '--force',
    '--name',
    argv.name,
    '--abi',
    'google_apis/x86_64',
    '--package',
    `"system-images;android-${argv.api};google_apis;x86_64"`,
    '--device',
    argv.device
  ],
  { encoding: 'utf8' }
);

// eslint-disable-next-line
console.log(stdout);
