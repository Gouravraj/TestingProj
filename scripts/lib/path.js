'use strict';

const path = require('path');
const { compose, trim, prop } = require('ramda');
const findUp = require('find-up');
const dispatch = require('./dispatch');
const { dir } = require('./parser');

const repoDir = dir(findUp.sync('package.json', { cwd: __dirname }));

function getHomeDir() {
  const osHome = require('../ps/osHome')();

  return _trim(osHome());
}

function getAndroidHomeDir() {
  const androidHome = require('../ps/androidHome')();

  return _trim(androidHome());
}

function getEmulatorHomeDir() {
  const emulatorHome = require('../ps/emulatorHome')();

  return _trim(emulatorHome());
}

exports.repoDir = repoDir;
exports.localBinDir = path.resolve(repoDir, 'node_modules', '.bin');
exports.homeDir = getHomeDir();
exports.androidHomeDir = getAndroidHomeDir();
exports.emulatorHomeDir = getEmulatorHomeDir();

function _trim(exec) {
  return compose(
    trim,
    prop('stdout'),
    dispatch.ninja
  )(exec);
}
