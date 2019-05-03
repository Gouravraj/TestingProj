const repoDir = process.cwd();

const defaults = {
  // fullReset: true,
  // isHeadless: true
};

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
  automationName: 'XCUITest',
  noReset: true
});

module.exports = {
  android,
  ios
};
