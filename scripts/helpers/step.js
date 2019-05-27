'use strict';

const chalk = require('chalk');

function createStep(prefix = '', indent = '') {
  return (message = '', cb) => {
    const line = `${chalk.blue(prefix)} ${message}`;

    process.stdout.write(`${line} ${indent}\r`);

    return new Promise((resolve) => {
      const symbol = '✓';

      if (typeof cb === 'function') {
        cb((endText) => {
          endText = endText || symbol;

          process.stdout.write(`${line} ${indent} ${chalk.green(endText)}\n`);

          resolve();
        });
      } else {
        process.stdout.write('\n');

        resolve();
      }
    });
  };
}

const step = createStep();

step.withConf = createStep;

module.exports = step;
