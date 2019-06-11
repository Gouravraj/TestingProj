const { join } = require('path');
const { config } = require('./wdio.shared.conf');

config.specs = ['./tests/specs/**/*.spec.js'];

config.capabilities = [
  {
    deviceName: 'iPhone X',
    platformName: 'iOS',
    platformVersion: '12.2',
    orientation: 'PORTRAIT',
    maxInstances: 1,
    app: join(process.cwd(), 'app', 'app-debug.app'),
    useNewWDA: true,
    waitForQuiescence: false,
    automationName: 'XCUITest',
    connectHardwareKeyboard: false,
    newCommandTimeout: 240
  }
];

exports.config = { ...config };
