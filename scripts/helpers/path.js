'use strict';

const path = require('path');
const findUp = require('find-up');
const exec = require('./exec');
const { dirOnly } = require('./parser');

const baseDir = dirOnly(findUp.sync('config.js', { cwd: __dirname }));
const repo = dirOnly(findUp.sync('package.json', { cwd: __dirname }));

function getAbs(...args) {
  return path.resolve(baseDir, ...args);
}

function getExec(platform = '') {
  return getAbs('exec', platform);
}

function getOSHome() {
  const { stdout } = exec.ninja('./os_home.sh', null, {
    cwd: getExec(),
    encoding: 'utf8'
  });

  return stdout.trim();
}

function getAndroidHome() {
  const { stdout } = exec.ninja('./android_home.sh', null, {
    cwd: getExec(),
    encoding: 'utf8'
  });

  return stdout.trim();
}

exports.repo = repo;
exports.localBin = path.resolve(repo, 'node_modules', '.bin');
exports.getExec = getExec;
exports.osHome = getOSHome();
exports.androidHome = getAndroidHome();
exports.emulator = getAbs('emulator');
