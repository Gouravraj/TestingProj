'use strict';

const path = require('path');
const { compose, trim, prop } = require('ramda');
const findUp = require('find-up');
const dispatch = require('./dispatch');
const { dir } = require('./parser');

const repoDir = dir(findUp.sync('package.json', { cwd: __dirname }));
const scriptsDir = dir(findUp.sync('config.js', { cwd: __dirname }));

function getExecDir(platform = '') {
  return _getAbsDir('exec', platform);
}

function getHomeDir() {
  const osHome = require('../process/osHome')();

  return _trim(osHome());
}

function getAndroidHomeDir() {
  const androidHome = require('../process/androidHome')();

  return _trim(androidHome());
}

function getEmulatorHomeDir() {
  const emulatorHome = require('../process/emulatorHome')();

  return _trim(emulatorHome());
}

exports.getExecDir = getExecDir;
exports.repoDir = repoDir;
exports.localBinDir = path.resolve(repoDir, 'node_modules', '.bin');
exports.homeDir = getHomeDir();
exports.androidHomeDir = getAndroidHomeDir();
exports.emulatorHomeDir = getEmulatorHomeDir();
exports.simulatorDir = _getAbsDir('bin', 'simulator');
exports.emulatorDir = _getAbsDir('bin', 'emulator');

function _getAbsDir(...args) {
  return path.resolve(scriptsDir, ...args);
}

function _trim(exec) {
  return compose(
    trim,
    prop('stdout'),
    dispatch.ninja
  )(exec);
}
