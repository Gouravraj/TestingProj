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

module.exports = print;
