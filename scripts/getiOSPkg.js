#!/usr/bin/env node

const { appId, to } = require('./config');
const { spawnSync } = require('child_process');
const colors = require('colors');

function errorHandler(stderr) {
  if (stderr) {
    console.log('Error: '.red, stderr);

    process.exit(1);
  }
}

const xcrun = spawnSync(
  'xcrun',
  ['simctl', 'get_app_container', 'booted', appId],
  {
    encoding: 'utf8'
  }
);

errorHandler(xcrun.stderr);

if (xcrun.stdout) {
  const pkgDir = xcrun.stdout.split('\n').join('');
  const cp = spawnSync('cp', ['-r', pkgDir, `${to}/.`], {
    encoding: 'utf8'
  });

  errorHandler(cp.stderr);
}
