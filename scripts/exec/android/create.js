#!/usr/bin/env node

'use strict';

const yargs = require('yargs');
const id = require('shortid');
const exec = require('../helpers/exec');
const { androidHome } = require('../helpers/path');

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
  .options(options)
  .argv;

const { name, device, api } = argv;

exec(
  './avdmanager',
  [
    'create',
    `--force`,
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
);
