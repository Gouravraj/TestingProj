const id = require('shortid');

const defaults = {
  name: id.generate(),
  api: '28',
  device: 'Nexus 6P'
};

module.exports = {
  name: {
    alias: 'n',
    description: 'device name',
    default: defaults.name
  },
  api: {
    alias: 'p',
    description: `API number, (e.g ${defaults.api})`,
    default: defaults.api
  },
  device: {
    alias: 'd',
    description: 'device type',
    default: defaults.device
  }
};
