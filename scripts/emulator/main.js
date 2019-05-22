const readlineSync = require('readline-sync');
const conf = require('../config');
const { emulator } = require('../path');
const { getDevices } = require('../utils/parser');
const exec = require('../utils/exec');

function main(command, args) {
  const { name, device, api } = args;
  const commandsDir = `${emulator}/commands`;

  if (command === 'create') {
    const createCmd = require('./commands/create');

    exec(...createCmd(name, device, api));
  }

  if (command === 'list') {
    exec(
      `./${command}.sh`,
      null,
      {
        cwd: commandsDir
      },
      {
        after: (res) => {
          return res
            .split(/\n/g)
            .reduce((acc, line) => [...acc, `- ${line}`], [])
            .slice(0, -1)
            .join('\n');
        }
      }
    );
  }

  if (command === 'open' || command === 'delete') {
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

    if (deviceList.length === 0) {
      process.exit(0);
    }

    const idx = readlineSync.keyInSelect(deviceList, 'Select a device');
    const device = deviceList[idx];

    if (device) {
      exec(`./${command}.sh`, [device], {
        cwd: commandsDir
      });
    }
  }

  if (command === 'uninstall') {
    exec(`./${command}.sh`, [conf.android.id], {
      cwd: commandsDir
    });
  }

  if (command === 'update' || command === 'close') {
    exec(`./${command}.sh`, {
      cwd: commandsDir
    });
  }
}

module.exports = main;
