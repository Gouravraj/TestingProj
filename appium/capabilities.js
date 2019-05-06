const repoDir = process.cwd();

const defaults = {};

const android = Object.assign({}, defaults, {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: `${repoDir}/app/app-debug.apk`,
  automationName: 'UiAutomator2'
});

const ios = Object.assign({}, defaults, {
  platformName: 'iOS',
  platformVersion: '12.2',
  app: `${repoDir}/app/app-debug.app`,
  deviceName: 'iPhone X',
  useNewWDA: true,
  waitForQuiescence: false,
  automationName: 'XCUITest',
  noReset: true,
  newCommandTimeout: 0
});

module.exports = {
  android,
  ios
};
