const path = require('path');
const { config } = require('./wdio.shared.web.conf.js');

config.specs = ['./tests/specs/web-admin/*.js'];
config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
      prefs: {
        'download.default_directory': path.resolve('.')
      }
    }
  }
];

config.baseUrl = 'https://distribution-admin-portal.cxapalawandev.com/';

exports.config = { ...config };
