'use strict';

const step = require('../../lib/step').withConf('STEP:');
const dispatch = require('../../lib/dispatch');
const print = require('../../lib/logger');
const sleep = require('../../lib/sleep');

const dLog = print.custom('cyan');

async function clean(platform, cfg) {
  step('Uninstalling app', (done) => {
    const uninstall = require(`../../process/${platform}/uninstall`)();

    dispatch.ninja(uninstall(cfg.id));

    done();
  });

  await sleep(8000);

  step('Closing the emulator', (done) => {
    const closeAll = require(`../../process/${platform}/closeAll`)();

    dispatch.ninja(closeAll());

    done();
  });

  dLog('\n>> Finish Cleanup <<');
}

module.exports = clean;
