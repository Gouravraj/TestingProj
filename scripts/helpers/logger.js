const { green, blue, yellow, red } = require('chalk');

function print(type) {
  let prefix;

  return (message) => {
    if (type === 'warn') {
      prefix = yellow('Warning: ');
    } else if (type === 'error') {
      prefix = red('Error: ');

      message = message.replace(/error(.?)/i, '').trim();
    } else if (type === 'info') {
      prefix = blue('Info: ');
    } else if (type === 'log') {
      prefix = '';
    }

    process.stdout.write(`${prefix}\n`);
    process.stdout.write(`${message}\n`);
  };
}

print.stream = function stream(prefix) {
  prefix = prefix || 'STEP:';

  return (message, cb) => {
    const line = `${blue(prefix)} ${message}`;

    process.stdout.write(`${line}\r`);

    return new Promise((resolve) => {
      if (typeof cb === 'function') {
        cb((separator, endText) => {
          separator = separator || '...';
          endText = endText || 'Done';

          process.stdout.write(`${line} ${separator} ${green(endText)}\n`);

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
