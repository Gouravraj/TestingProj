#!/usr/bin/env node

const { spawnSync } = require('child_process');

const { stdout } = spawnSync('sdkmanager', ['--list'], { encoding: 'utf8' });

// eslint-disable-next-line
console.log(stdout);
