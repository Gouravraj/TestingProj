'use strict';

const path = require('path');
const findUp = require('find-up');
const exec = require('./exec');
const { dir } = require('./parser');

const repoDir = dir(findUp.sync('package.json', { cwd: __dirname }));
const scriptsDir = dir(findUp.sync('config.js', { cwd: __dirname }));

function _getAbsDir(...args) {
  return path.resolve(scriptsDir, ...args);
}

function getExecDir(platform = '') {
  return _getAbsDir('exec', platform);
}

function getHomeDir() {
  const { stdout } = exec.ninja('./os_home.sh', null, {
    cwd: getExecDir(),
    encoding: 'utf8'
  });

  return stdout.trim();
}

function getAndroidHomeDir() {
  const { stdout } = exec.ninja('./android_home.sh', null, {
    cwd: getExecDir(),
    encoding: 'utf8'
  });

  return stdout.trim();
}

exports.getExecDir = getExecDir;
exports.repoDir = repoDir;
exports.localBinDir = path.resolve(repoDir, 'node_modules', '.bin');
exports.homeDir = getHomeDir();
exports.androidHomeDir = getAndroidHomeDir();
exports.simulatorDir = _getAbsDir('bin', 'simulator');
exports.emulatorDir = _getAbsDir('bin', 'emulator');
