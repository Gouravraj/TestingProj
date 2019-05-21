#!/usr/bin/env node

const yargs = require('yargs');
const options = require('../helpers/options');
const exec = require('../../utils/exec');

function cmd(name, api) {
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
      `'system-images;android-${api};google_apis;x86_64'`
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

const { name, api } = argv;

exec(...cmd(name, api));

module.exports = cmd;
