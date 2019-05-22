const path = require('path');
const findUp = require('find-up');
const exec = require('./exec');

function getAbs(...args) {
  return path.resolve(__dirname, '..', ...args);
}

const cli = getAbs('cli');

function getAndroidHome() {
  const { stdout } = exec(
    './android_home.sh',
    null,
    { cwd: cli, encoding: 'utf8' },
    {
      silence: true
    }
  );

  return stdout.trim();
}

exports.home = findUp
  .sync('package.json')
  .split('/')
  .slice(0, -1)
  .join('/');
exports.cli = cli;
exports.emulator = getAbs('emulator');
exports.androidHome = getAndroidHome();
