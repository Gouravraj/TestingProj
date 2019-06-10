'use strict';

const run = require('./run');
const clean = require('./clean');
const { isRunning } = require('../../lib/check');

function main(argv, conf) {
  const { _, platform } = argv;
  const [command] = _;

  if (command === 'run') {
    run(argv, platform, conf.ci[platform]);
  }

  if (command === 'clean' && isRunning(platform)) {
    clean(platform, conf.pkg[platform]);
  }
}

module.exports = main;
