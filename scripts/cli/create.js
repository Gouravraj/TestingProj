#!/usr/bin/env node

const yargs = require('yargs');
const exec = require('../helpers/exec');
const create = require('../commands/create');
const options = require('../yargs.options');

// prettier-ignore
const argv = yargs
  .help('help', 'show help').alias('help', 'h')
  .options(options)
  .argv;

const { name, device, api } = argv;

exec(...create(name, device, api));
