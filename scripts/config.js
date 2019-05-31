'use strict';

const { homeDir } = require('./lib/path');
const ios = require('../config/ios.app.conf');
const android = require('../config/android.app.conf');

module.exports = {
  ci: {
    ios: {
      defaults: {
        devicetype: 'iPhone X',
        runtime: '12.2'
      },

      devices: {
        auto: true,

        list: ['iPhone X']
      }
    },

    android: {
      defaults: {
        api: '28',
        alu: '64', // ['64', '32'],
        abi: 'google_apis/x86_64',
        device: 'Nexus 6P'
      },

      sdk: {
        repos: `${homeDir}/.android/repositories.cfg`
      },

      devices: {
        auto: true,

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
