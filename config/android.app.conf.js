const { join } = require('path');
const { config } = require('./wdio.shared.conf');

config.specs = ['./tests/specs/**/*.spec.js'];

config.capabilities = [
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
];

exports.config = { ...config };
