'use strict';

const { localBinDir } = require('./path');
const exec = require('./exec');

// NOTE: will use for parallel devices testing
function createTab(option = '') {
  return (...args) => {
    if (option) {
      args = [option, ...args];
    }

    return exec('./ttab', args, { cwd: localBinDir });
  };
}

const tab = createTab();

tab.backround = createTab('-G');

// force to open a new tab in iTerm2
tab.force = createTab('-a iTerm2');

module.exports = tab;