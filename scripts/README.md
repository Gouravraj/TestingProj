# SCRIPTS

**!! Before running CI scripts !!**

App package file(s) must be provided already in './app’ directory.

## Structure

- `bin` - executable scripts (e.g. `node ./scripts/bin/simulator.js`)
- `lib` - libraries
- `process` - executable child processes by Node.js or bash scripts
- `config.js` - configure file for scripts

## CLI

```bash
# without platform arg, <android> is default
npm run ci # actual CI flow (same as `ci:android`)
npm run ci:dev # without UI testing (`npm run ci:dev -- ios`)
npm run ci:clean # same as `npm run cleanup` script - uninstall app and close

# `npm run ci:ios -- --no-tests`
npm run ci:ios
npm run ci:android

# debug - Inspector of Chrome browser
# npm start <NPM script name>
npm start ci
npm start simulator list

# to add arg, `-- --no-tests`, `-- --name=cxagroup`
npm run emulator create -- --name=cxagroup

# extract package
npm run pkg # ios, android
npm run pkg:ios
npm run pkg:android
```

#### Configure

`./scripts/config.js` for CI, extract packages

```javascript
module.exports = {
  ci: {
    ios: {
      defaults: {
        devicetype: 'iPhone X', // device types
        runtime: '12.2' // runtime (to install different iOS runtimes, use Xcode)
      },

      devices: {
        auto: true, // will create list name(s) if set `true`

        list: ['iPhone X'] // currently only 1 device support
      }
    },

    android: {
      defaults: {
        api: '28', // android API version (https://source.android.com/setup/start/build-numbers)
        alu: '64', // 64 bits or 32 bits, if no 64 will create 32 bits
        abi: 'google_apis/x86_64', // https://developer.android.com/ndk/guides/abis
        device: 'Nexus 6P' // base device
      },

      sdk: {
        repos: `${homeDir}/.android/repositories.cfg` // preventing warning message
      },

      devices: {
        auto: true,

        list: ['android_9']
      }
    }
  },

  // for `npm run pkg` - without args, will use this as defaults
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
```

### iOS Simulator

will update

### Android Emulator

will update

### Extract app package from simulator, emulator (.app, .apk)

To put file(s) inside like `./app/app-debug.apk`, you can extract app package direct from simulator by `extract-pkg`. [Github](https://github.com/jsveron23/extract-pkg)

To extract, simulator already booted and should be installed package on virtual device.

```bash
extract-pkg ios -id=com.cxagroup.mobile.EmployeePortal --to=./app --rename=app-debug.app
```

Extract package by those NPM commands. (arguments already set from `./scripts/config.js#pkg`)

```bash
npm run pkg # extract both platforms
npm run pkg:ios
npm run pkg:android
```
