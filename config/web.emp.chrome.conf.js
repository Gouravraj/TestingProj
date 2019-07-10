const { config } = require('./web.shared.web.conf.js');

config.specs = ['./tests/specs/web-employee/*.js'];

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome'
  }
];

config.baseUrl = 'https://twclient3.cxapalawandev.com';

exports.config = { ...config };
