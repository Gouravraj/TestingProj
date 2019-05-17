#!/usr/bin/env node

const yargs = require('yargs');
const options = require('./options');
const exec = require('../../utils/exec');

function cmd(name, api, device) {
  return [
    'avdmanager',
    [
      'create',
      'avd',
      '--force',
      '--name',
      name,
      '--abi',
      'google_apis/x86_64',
      '--package',
      `'system-images;android-${api};google_apis;x86_64'`,
      '--device',
      `'${device}'`
    ],
    {
      shell: true
    }
  ];
}

// prettier-ignore
const argv = yargs
  .help('help', 'show help').alias('help', 'h')
  .options(options)
  .argv;

const { name, api, device } = argv;

exec(...cmd(name, api, device));

module.exports = cmd;
