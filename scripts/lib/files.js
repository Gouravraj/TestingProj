'use strict';

const fs = require('fs');

function touch(file) {
  return fs.closeSync(fs.openSync(file, 'w'));
}

exports.touch = touch;
