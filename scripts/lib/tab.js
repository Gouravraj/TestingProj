'use strict';

const dispatch = require('./dispatch');
const ttab = require('../process/ttab');

function createTab(option = '') {
  return (...args) => {
    if (option) {
      args = [option, ...args];
    }

    return dispatch(ttab(args));
  };
}

const tab = createTab();

tab.backround = createTab('-G');

// force to open a new tab in iTerm2
tab.force = createTab('-a iTerm2');

module.exports = tab;
