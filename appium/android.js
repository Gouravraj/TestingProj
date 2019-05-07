module.exports = function android(repoDir) {
  return {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: `${repoDir}/app/app-debug.apk`,
    automationName: 'UiAutomator2'
  };
};
