const { mergeAll } = require('ramda');

const repoDir = process.cwd();

const ios = require('./ios')(repoDir);
const android = require('./android')(repoDir);

const defaults = {
  // defaults
};

module.exports = {
  android: mergeAll([defaults, android]),
  ios: mergeAll([defaults, ios])
};
