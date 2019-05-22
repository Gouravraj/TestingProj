const exec = require('../../utils/exec');
const createArgs = require('../../emulator/commands/create');

function create(name, device, api) {
  const args = [
    ...createArgs(name, device, api),
    {
      silence: true
    }
  ];

  exec(...args);
}

module.exports = create;
