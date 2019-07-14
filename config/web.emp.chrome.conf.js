const { config } = require('./web.shared.conf.js');

config.specs = ['./tests/web-employee/specs/*.js'];

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome'
  }
];

config.baseUrl = 'https://distribution-employee-frontend.cxapalawandev.com/';

exports.config = { ...config };
