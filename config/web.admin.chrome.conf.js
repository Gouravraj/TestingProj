const path = require('path');
const { config } = require('./web.shared.conf.js');

config.specs = ['./tests/web-admin/specs/*.js'];
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
