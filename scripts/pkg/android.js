#!/usr/bin/env node

const { android } = require('./config');
const cmd = require('./cmd');

const { appId, port, to } = android;

cmd('Search path in Android emulator', 'adb', ['shell', 'pm', 'path', appId])
  .then(({ stdout }) => {
    const pkgDir = stdout.toString().replace(/package:|\n/g, '');

    cmd('Extract `.app` from running Android emulator', 'adb', ['pull', pkgDir, to]);
  });
