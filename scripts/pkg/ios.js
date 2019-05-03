#!/usr/bin/env node

const { ios } = require('./config');
const cmd = require('./cmd');

const { appId, to } = ios;

cmd('Extract `.app` from running iOS simulator', 'xcrun', ['simctl', 'get_app_container', 'booted', appId])
  .then(({ stdout }) => {
    const pkgDir = stdout.toString().split('\n').join('');

    console.log('>>> '.green, `Copy & Rename - '${pkgDir}' to ${to}`);

    cmd('cp', ['-r', pkgDir, to]);
  });
