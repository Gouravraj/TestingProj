const exec = require('./exec');
const sleep = require('./sleep');
const { cli } = require('./path');

/**
 * @deprecated shell script will do
 */
async function waitEmu(ms) {
  ms = ms || 2000;

  let isReady = false;

  while (!isReady) {
    await sleep(ms);

    const { stdout } = exec.ninja([
      './check_emulator_ready.sh',
      null,
      {
        encoding: 'utf8',
        cwd: cli
      }
    ]);

    if (stdout.trim() === '1') {
      isReady = true;
    }
  }
}

module.exports = waitEmu;
