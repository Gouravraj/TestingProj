const { join } = require('path');
const { config } = require('./mobile.shared.config');

exports.config = {
  ...config,
  specs: ['./tests/mobile-emp/specs/**/*.spec.js'],
  capabilities: [
    {
      automationName: 'UiAutomator2',
      deviceName: 'emulator-5554',
      platformName: 'Android',
      orientation: 'PORTRAIT',
      maxInstances: 1,
      app: join(process.cwd(), 'app', 'app-debug.apk'),
      newCommandTimeout: 240,
      autoGrantPermissions: true
    }
  ]
};
