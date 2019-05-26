'use strict';

const chalk = require('chalk');

function print(type) {
  let prefix = '';

  if (type === 'warn') {
    prefix = chalk.yellow('Warning: ');
  } else if (type === 'error') {
    prefix = chalk.red('Error: ');
  } else if (type === 'info') {
    prefix = chalk.blue('Info: ');
  } else if (type === 'device') {
    prefix = chalk.white('Device: ');
  }

  return (message = '') => {
    process.stdout.write(`\n${prefix}\n`);
    process.stdout.write(`${message}\n`);
  };
}

print.custom = function custom(color = 'white') {
  return (prefix = '', message = '') => {
    prefix = chalk[color](prefix);

    process.stdout.write(`${prefix}${message}\n`);
  };
};

print.stream = function stream(prefix = '', indent = '') {
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
};

module.exports = print;
