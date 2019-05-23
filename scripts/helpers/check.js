const exec = require('./exec');

function isRunning() {
  const { stdout } = exec.ninja(['adb', ['devices'], { encoding: 'utf8' }]);
  const devices = stdout
    .split(/\n/g)
    .filter((line) => line)
    .slice(1);

  return devices.length > 0;
}

exports.isRunning = isRunning;
