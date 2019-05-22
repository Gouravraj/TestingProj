const exec = require('../../utils/exec');
const { emulator } = require('../../path');

function close() {
  exec(
    './close.sh',
    null,
    {
      cwd: `${emulator}/commands`
    },
    {
      silence: true
    }
  );
}

module.exports = close;
