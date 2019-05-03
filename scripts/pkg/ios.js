#!/usr/bin/env node

const colors = require('colors');
const { ios } = require('./config');
const { spawnSync } = require('child_process');

const { appId, to } = ios;

// to read time by time
Promise.resolve()
  .then(() => {
    console.log('>>> '.green, 'Check `app` directory existence');

    return spawnSync('cd', ['app'])
  })
  .then(({ stderr }) => {
    if (stderr) {
      console.log('>>> '.green, 'Create `.app` directory');

      spawnSync('mkdir', ['app']);
    }

    console.log('>>> '.green, 'Extract `.app` from running iOS simulator');

    return spawnSync('xcrun', ['simctl', 'get_app_container', 'booted', appId]);
  })
  .then(({ stdout }) => {
    const pkgDir = stdout.toString().split('\n').join('');

    console.log('>>> '.green, `Copy & Rename - '${pkgDir}' to ${to}`);

    spawnSync('cp', ['-r', pkgDir, to]);
  });
