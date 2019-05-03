const { android, iOS } = require('../../appium/capabilities/capabilities')

module.exports = {
  android: {
    port: 5554,
    appId: 'com.employeefrontend',
    to: android.app
  },
  ios: {
    appId: 'com.cxagroup.mobile.EmployeePortal',
    to: iOS.app
  }
};
