const chalk = require('chalk');

module.exports = function print(type) {
  return (message) => {
    let prefix;

    if (type === 'warn') {
      prefix = chalk.yellow('Warning: ');
    } else if (type === 'error') {
      prefix = chalk.red('Error: ');

      message = message.replace(/error(.?)/i, '').trim();
    } else if (type === 'info') {
      prefix = chalk.blue('Info: ');
    }

    // eslint-disable-next-line
    console.log(prefix);

    // eslint-disable-next-line
    console.log(message);
  };
};
