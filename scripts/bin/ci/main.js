'use strict';

const run = require('./commands/run');
const clean = require('./commands/clean');
const { getExecDir } = require('../../lib/path');
const { isRunning } = require('../../lib/check');

async function main(argv, conf) {
  const { _, platform } = argv;
  const [command] = _;
  const cli = getExecDir(platform);

  if (command === 'run') {
    run(argv, conf.ci[platform], cli);
  }

  if (command === 'clean' && isRunning(platform)) {
    clean(conf.pkg[platform], cli);
  }
}

module.exports = main;
