const path = require('path');
const exec = require('./utils/exec');

function getAbs(...args) {
  return path.resolve(__dirname, ...args);
}

function getAndroidHome() {
  const { stdout } = exec(
    './android_home.sh',
    { cwd: `${__dirname}/path` },
    null,
    {
      silence: true
    }
  );

  return stdout.toString().trim();
}

exports.home = getAbs('..');
exports.emulator = getAbs('emulator');
exports.androidHome = getAndroidHome();
