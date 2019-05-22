#!/usr/bin/env node

const { androidHome } = require('../../path');

const isCLI = !module.parent;

function cmd(name, device, api) {
  return [
    './avdmanager',
    [
      'create',
      'avd',
      '--name',
      `'${name}'`,
      '--package',
      `'system-images;android-${api};google_apis;x86_64'`,
      '--device',
      `'${device}'`
    ],
    {
      cwd: `${androidHome}/tools/bin`,
      shell: true
    }
  ];
}

if (isCLI) {
  const yargs = require('yargs');
  const options = require('../../yargs/options');
  const exec = require('../../utils/exec');

  // prettier-ignore
  const argv = yargs
    .help('help', 'show help').alias('help', 'h')
    .options(options)
    .argv;

  const { name, device, api } = argv;

  exec(...cmd(name, device, api));
} else {
  module.exports = cmd;
}
