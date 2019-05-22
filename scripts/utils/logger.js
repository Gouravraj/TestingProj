const { blue, yellow, red } = require('chalk');

module.exports = function print(type) {
  let prefix;

  return (message) => {
    if (type === 'ci') {
      // eslint-disable-next-line
      console.log(blue('[STEP]: '), message);
    } else {
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

      // eslint-disable-next-line
      console.log(prefix);

      // eslint-disable-next-line
      console.log(message);
    }
  };
};
