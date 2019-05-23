const exec = require('./exec');
const { localBin } = require('./path');

function createTab(args, extra) {
  args = args || [];
  extra = extra || {};

  exec('./ttab', ['-G', ...args], { cwd: localBin }, extra);
}

module.exports = {
  createTab
};
