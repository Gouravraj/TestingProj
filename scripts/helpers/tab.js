const exec = require('./exec');
const { localBin } = require('./path');

// NOTE: will use for parallel devices testing
function createTab(args = [], extra = {}) {
  exec('./ttab', ['-G', ...args], { cwd: localBin }, extra);
}

exports.createTab = createTab;
