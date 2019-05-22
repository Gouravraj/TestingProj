const exec = require('./exec');
const sleep = require('./sleep');
const { cli } = require('./path');

async function waitEmu(ms) {
  ms = ms || 2000;

  let isReady = false;

  while (!isReady) {
    await sleep(ms);

    const { stdout } = exec(
      './check_emulator_ready.sh',
      null,
      {
        encoding: 'utf8',
        cwd: cli
      },
      {
        silence: true
      }
    );

    if (stdout.trim() === '1') {
      isReady = true;
    }
  }
}

module.exports = waitEmu;
