'use strict';

const { osHome } = require('./helpers/path');
const ios = require('../config/ios.app.conf');
const android = require('../config/android.app.conf');

module.exports = {
  ci: {
    ios: {},

    android: {
      defaults: {
        api: '28',
        alu: '64', // ['64', '32'],
        abi: 'google_apis/x86_64',

        // run `./scripts/exec/android/available_devices.sh`
        device: 'Nexus 6P'
      },

      sdk: {
        repos: `${osHome}/.android/repositories.cfg`
      },

      devices: {
        // listed device will create automatically if set `true` here (with `android.defaults`)
        // if set `false`, invalid devices name will be ignored while testing
        auto: true,

        // add a device name that you want testing with
        // TODO: parallel testing
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
