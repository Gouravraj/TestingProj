const { android, ios } = require('../../appium/capabilities');

module.exports = {
  android: {
    id: 'com.employeefrontend',
    to: android.app,
    rename: 'app-debug.apk'
  },

  ios: {
    id: 'com.cxagroup.mobile.EmployeePortal',
    to: ios.app,
    rename: 'app-debug.app'
  }
};
