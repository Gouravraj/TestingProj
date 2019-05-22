const exec = require('./exec');
const { home } = require('../path');

function createTab(options = [], extra = {}) {
  exec(
    './ttab',
    ['-G', ...options],
    {
      cwd: `${home}/node_modules/.bin`
    },
    extra
  );
}

module.exports = {
  createTab
};
