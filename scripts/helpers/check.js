const exec = require('./exec');

function isRunning() {
  const { stdout } = exec(
    'adb',
    ['devices'],
    { encoding: 'utf8' },
    { silence: true }
  );
  const devices = stdout
    .split(/\n/g)
    .filter((line) => line)
    .slice(1);

  return devices.length > 0;
}

exports.isRunning = isRunning;
