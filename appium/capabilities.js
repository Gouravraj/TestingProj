const repoDir = process.cwd();

const android = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: `${repoDir}/app/app-debug.apk`
  // automationName: 'uiautomator2'
};

const ios = {
  platformName: 'iOS',
  platformVersion: '12.2',
  app: `${repoDir}/app/app-debug.app`,
  deviceName: 'iPhone X',
  useNewWDA: true,
  automationName: 'XCUITest'
};

module.exports = {
  android,
  ios
};
