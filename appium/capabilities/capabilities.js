const repoDir = process.cwd();

module.exports = {
  android: {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: `${repoDir}/app/app-debug.apk`,
    automationName: 'uiautomator2'
  },
  iOS: {
    platformName: 'iOS',
    platformVersion: '12.2',
    app: `${repoDir}/app/app-debug.app`,
    deviceName: 'iPhone X',
    useNewWDA: true,
    automationName: 'XCUITest',
    maxTypingFrequency: 10
  }
};
