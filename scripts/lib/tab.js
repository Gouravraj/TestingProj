'use strict';

const dispatch = require('./dispatch');
const ttab = require('../ps/ttab');

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

module.exports = tab;
