module.exports = function ios(repoDir) {
  return {
    platformName: 'iOS',
    platformVersion: '12.2',
    app: `${repoDir}/app/app-debug.app`,
    deviceName: 'iPhone X',
    useNewWDA: true,
    waitForQuiescence: false,
    automationName: 'XCUITest',
    noReset: true,
    newCommandTimeout: 0
  };
};
