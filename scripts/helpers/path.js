const path = require('path');
const findUp = require('find-up');
const exec = require('./exec');

function getAbs(...args) {
  return path.resolve(__dirname, '..', ...args);
}

const repo = findUp
  .sync('package.json')
  .split('/')
  .slice(0, -1)
  .join('/');
const cli = getAbs('cli');

function getOSHome() {
  const { stdout } = exec.ninja([
    './os_home.sh',
    null,
    { cwd: cli, encoding: 'utf8' }
  ]);

  return stdout.trim();
}

function getAndroidHome() {
  const { stdout } = exec.ninja([
    './android_home.sh',
    null,
    { cwd: cli, encoding: 'utf8' }
  ]);

  return stdout.trim();
}

exports.home = repo;
exports.cli = cli;
exports.localBin = path.resolve(repo, 'node_modules', '.bin');
exports.emulator = getAbs('emulator');
exports.osHome = getOSHome();
exports.androidHome = getAndroidHome();
