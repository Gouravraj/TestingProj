#!/usr/bin/env node

// extract package(.app, .apk) file(s) from simulalor and emulator

const argv = require('yargs').argv;

if (argv.ios) {
  require('./ios');
}

if (argv.android) {
  require('./android');
}
