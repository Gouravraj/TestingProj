// eslint-disable-next-line
const colors = require('colors');

module.exports = function print(type, message) {
  let prefix;

  if (type === 'warn') {
    prefix = 'Warning: '.yellow;
  } else if (type === 'error') {
    prefix = 'Error: '.red;

    message = message.replace(/error(.?)/i, '').trim();
  } else if (type === 'info') {
    prefix = 'Info: '.blue;
  }

  // eslint-disable-next-line
  console.log(prefix);

  // eslint-disable-next-line
  console.log(message);
};
