const { android, ios } = require('../appium/capabilities');

module.exports = {
  android: {
    port: 5554,
    appId: 'com.employeefrontend',
    to: android.app,
    emulator: 'Nexus6P'
  },
  ios: {
    appId: 'com.cxagroup.mobile.EmployeePortal',
    to: ios.app
  }
};
