const { osHome } = require('./helpers/path');
const ios = require('../config/ios.app.conf');
const android = require('../config/android.app.conf');

module.exports = {
  ci: {
    ios: {},

    android: {
      defaults: {
        api: '28',
        device: 'Nexus 6P'
      },

      sdk: {
        repos: `${osHome}/.android/repositories.cfg`
      },

      devices: {
        // create automatically if no exist
        // if set `false`, invalid devices name will be ignored while testing
        auto: true,

        // add a device name that you want testing with
        list: ['android_9']
      }
    }
  },

  pkg: {
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
  }
};
