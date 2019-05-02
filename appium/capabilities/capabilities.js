const repoDir = process.cwd();

module.exports = {
  android: {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: `${repoDir}/app/app-release.apk`,
    automationName: 'uiautomator2'
  },
  iOS: {
    platformName: 'iOS',
    platformVersion: '12.2',
    app: `${repoDir}/app/app-debug.app`,
    deviceName: 'iPhone X',
    wdaLaunchTimeout: 80000,
    wdaConnectionTimeout: 80000,
    preventWDAAttachments: true,
    clearSystemFiles: true,
    shouldUseSingletonTestManager: false,
    automationName: 'XCUITest',
    maxTypingFrequency: 10
  }
};;
