const exec = require('./exec');
const { home } = require('./path');

function createTab(args, extra) {
  args = args || [];
  extra = extra || {};

  exec(
    './ttab',
    ['-G', ...args],
    {
      cwd: `${home}/node_modules/.bin`
    },
    extra
  );
}

module.exports = {
  createTab
};
