const chalk = require('chalk');

function print(type) {
  let prefix;

  return (message) => {
    if (type === 'warn') {
      prefix = chalk.yellow('Warning: ');
    } else if (type === 'error') {
      prefix = chalk.red('Error: ');

      message = message.replace(/error(.?)/i, '').trim();
    } else if (type === 'info') {
      prefix = chalk.blue('Info: ');
    } else if (type === 'device') {
      prefix = chalk.white('Device: ');
    } else if (type === 'log') {
      prefix = '';
    }

    process.stdout.write(`${prefix}\n`);
    process.stdout.write(`${message}\n`);
  };
}

print.custom = function custom(color) {
  color = color || 'white';

  return (prefix = '', message) => {
    prefix = chalk[color](prefix);

    process.stdout.write(`${prefix}${message}\n`);
  };
};

print.stream = function stream(prefix, indent) {
  prefix = prefix || 'STEP:';
  indent = indent || '...';

  return (message, cb) => {
    const line = `${chalk.blue(prefix)} ${message}`;

    process.stdout.write(`${line} ${indent}\r`);

    return new Promise((resolve) => {
      if (typeof cb === 'function') {
        cb((endText) => {
          endText = endText || '✓';

          process.stdout.write(`${line} ${indent} ${chalk.green(endText)}\n`);

          resolve(process.stdout);
        });
      } else {
        process.stdout.write('\n');

        resolve(process.stdout);
      }
    });
  };
};

module.exports = print;
