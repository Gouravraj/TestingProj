#!/usr/bin/env node

const { ios } = require('./config');
const { exec } = require('./helpers');

const { appId, to } = ios;

exec('Extract `.app` from running iOS simulator', 'xcrun', [
  'simctl',
  'get_app_container',
  'booted',
  appId
]).then(({ stdout }) => {
  const pkgDir = stdout
    .toString()
    .split('\n')
    .join('');

  console.log('>>> '.green, `Copy & Rename - '${pkgDir}' to ${to}`); // eslint-disable-line

  exec('cp', ['-r', pkgDir, to]);
});
