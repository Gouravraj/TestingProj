'use strict';

const step = require('../../../lib/step').withConf('STEP:');
const exec = require('../../../lib/exec');
const print = require('../../../lib/logger');
const sleep = require('../../../lib/sleep');

const dLog = print.custom('cyan');

async function clean(cfg, cli) {
  step('Uninstalling app', (done) => {
    exec.ninja('./uninstall.sh', [cfg.id], { cwd: cli }, { force: true });

    done();
  });

  await sleep(8000);

  step('Closing the emulator', (done) => {
    exec.ninja('./close.sh', null, { cwd: cli }, { force: true });

    done();
  });

  dLog('\n>> Finish Cleanup <<');
}

module.exports = clean;
