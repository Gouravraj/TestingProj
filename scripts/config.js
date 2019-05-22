const ios = require('../config/ios.app.conf');
const android = require('../config/android.app.conf');

module.exports = {
  ios: {
    id: 'com.cxagroup.mobile.EmployeePortal',
    to: ios.config.capabilities[0].app,
    rename: 'app-debug.app'
  },

  android: {
    id: 'com.employeefrontend',
    to: android.config.capabilities[0].app,
    rename: 'app-debug.apk'
  }
};
