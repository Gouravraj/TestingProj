const exec = require('../../utils/exec');

function tests() {
  exec('npm', ['run', 'android']);
}

module.exports = tests;
