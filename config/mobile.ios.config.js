const { join } = require('path');
const { config } = require('./mobile.shared.config');

exports.config = {
  ...config,
  specs: ['./tests/mobile-emp/specs/**/*.spec.js'],
  capabilities: [
    {
      deviceName: 'iPhone X',
      platformName: 'iOS',
      platformVersion: '12.2',
      orientation: 'PORTRAIT',
      maxInstances: 1,
      app: join(process.cwd(), 'app', 'app-debug.app'),
      // useNewWDA: true,
      waitForQuiescence: false,
      automationName: 'XCUITest'
    }
  ]
};