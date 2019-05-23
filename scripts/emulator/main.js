const { cli } = require('../helpers/path');
const { isRunning } = require('../helpers/check');
const exec = require('../helpers/exec');

function main(command, args) {
  const { name, device, api } = args;

  if (command === 'uninstall' && isRunning()) {
    const conf = require('../config');
    const uninstall = require('../commands/uninstall')(cli);

    exec(...uninstall(conf.android.id));
  }

  if (command === 'close' && isRunning()) {
    const close = require('../commands/close')(cli);

    exec(...close());
  }

  if (command === 'create') {
    const create = require('../commands/create');

    exec(...create(name, device, api));
  }

  if (command === 'list') {
    const list = require('../commands/list')(cli);
    const after = (res) => {
      return res
        .split(/\n/g)
        .reduce(
          (acc, line, idx) => [...acc, line.replace('Name:', `${idx + 1}.`)],
          []
        )
        .slice(0, -1)
        .join('\n');
    };

    exec(...[...list(), { after }]);
  }

  if (command === 'open' || command === 'delete') {
    const readlineSync = require('readline-sync');
    const list = require('../commands/list')(cli);
    const { getDevices } = require('../helpers/parser');

    const { stdout } = exec.ninja(list());
    const deviceList = getDevices(stdout.toString());

    if (deviceList.length === 0) {
      process.exit(0);
    }

    // if (command === 'delete' && !pick) {
    //   deviceList.forEach((name) => {
    //     exec(
    //       `./${command}.sh`,
    //       [name],
    //       {
    //         cwd: cli
    //       },
    //       {
    //         silence: true
    //       }
    //     );
    //   });
    // }

    const idx = readlineSync.keyInSelect(deviceList, 'Select a device');
    const device = deviceList[idx];

    if (device) {
      exec(`./${command}.sh`, [device], { cwd: cli });
    }
  }

  if (command === 'update') {
    exec('./update.sh', { cwd: cli });
  }
}

module.exports = main;
