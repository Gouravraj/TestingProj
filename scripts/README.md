# SCRIPTS

**!! Before running CI scripts !!**

App package file(s) must be provided in './app’ directory.

## Structure

- `bin` - executable scripts (e.g. `node ./scripts/bin/simulator.js`)
- `lib` - libraries
- `ps` - executable child processes by Node.js or bash scripts
- `config.js` - configure file for scripts

## Commands

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

## iOS Simulator

```bash
# npm run simulator <command>
npm run simulator list # list simulator that available to open
npm run simulator open # show simulator list and choose to open
npm run simulator remove # show simulator list and choose to remove
npm run simulator close # close all simulators
npm run simulator uninstall # uninstall all from opened simulator
npm run simulator create # create custom simulator
```

## Android Emulator

```bash
# npm run emulator <command>
npm run emulator list # list emulator that available to open
npm run emulator update # update installed SDK package(s)
npm run emulator open # show emulator list and choose to open
npm run emulator remove # show emulator list and choose to remove
npm run emulator close # close all emulators
npm run emulator uninstall # uninstall all from opened emulator
npm run emulator create # create custom emulator
```

## Extract app package from simulator, emulator (.app, .apk)

To put file(s) inside like `./app/app-debug.apk`, you can extract app package direct from simulator by `extract-pkg`. [Github](https://github.com/jsveron23/extract-pkg)

To extract, simulator already booted and should be installed package on virtual device.

```bash
extract-pkg ios -id=com.cxagroup.mobile.EmployeePortal --to=./app --rename=app-debug.app
```

Extract package by those NPM commands. (arguments already set from `../scripts.config.js#pkg`)

```bash
npm run pkg # extract both platforms
npm run pkg:ios
npm run pkg:android
```

## Path issues

If you have Android SDK but installed by Android Studio. Probably, you've got some path issues with Android tools. These scripts will fix,

```bash
npm run path:emulator
npm run path:sdkmanager
npm run path:avdmanager
```
