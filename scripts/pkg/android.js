#!/usr/bin/env node

const { android } = require('./config');
const { exec } = require('./helpers');

const { appId, port, to } = android;

exec('Search path in Android emulator', 'adb', [
  'shell',
  'pm',
  'path',
  appId
]).then(({ stdout }) => {
  const pkgDir = stdout.toString().replace(/package:|\n/g, '');

  exec('Extract `.apk` from running Android emulator', 'adb', [
    'pull',
    pkgDir,
    to
  ]);
});
