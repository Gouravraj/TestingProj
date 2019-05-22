const exec = require('../../utils/exec');
const { getDevices } = require('../../utils/parser');
const { createTab } = require('../../utils/tab');
const { emulator } = require('../../path');

function open(idx) {
  const commandsDir = `${emulator}/commands`;
  const { stdout } = exec(
    './list.sh',
    null,
    {
      cwd: commandsDir
    },
    {
      silence: true
    }
  );

  const deviceList = getDevices(stdout.toString());
  const device = deviceList[idx];

  if (device) {
    const cmd = `${commandsDir}/open.sh ${device}`;

    createTab([cmd], {
      silence: true
    });
  }
}

module.exports = open;
