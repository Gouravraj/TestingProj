const exec = require('../../utils/exec');

async function waitEmu() {
  let isReady = false;

  return new Promise((resolve) => {
    while (!isReady) {
      const { stdout } = exec(
        'adb',
        ['shell', 'getprop', 'init.svc.bootanim'],
        null,
        {
          silence: true
        }
      );

      const isStopped =
        stdout
          .toString()
          .split(/\n/g)
          .filter((line) => line)
          .join('')
          .trim() === 'stopped';

      if (isStopped) {
        isReady = true;

        resolve();
      }
    }
  });
}

module.exports = waitEmu;
