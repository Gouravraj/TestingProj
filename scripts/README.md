# scripts

## bin

Executable scripts

### CI pipeline

```bash
npm run ci # actual ci flow
npm run ci:dev # without ui testing
npm run ci:ios # run ios ui testing scripts
npm run ci:android # run android ui testing scripts
npm run ci:clean # same as `npm run cleanup` script - uninstall app and close
npm run ci:debug # debug mode - will open Chrome inspector with sources
```

#### Before running scripts

App package file(s) must be provided already from './app’ directory.

#### Configure

Will update...

### iOS Simulator

Will update

### Android Emulator

```bash
./scripts/bin/emulator.js <command>
#or
npm run emulator <command>
```

Except `create` command, no require argument. You can check actual commands from `./scripts/exec/android`.

```bash
# check device list `./scripts/exec/android/available_devices.sh`
npm run emulator create --name=<device name> --api=<API version> ---device=<device> # arguments is not required
npm run emulator list
npm run emulator update # sdkmanager
npm run emulator open
npm run emulator delete
npm run emulator uninstall # uninstall app
npm run emulator close
```

### Extract app package from simulator, emulator (.app, .apk)

You must put file(s) inside `/path/current_repo/app`. Like `./app/app-debug.apk`. Or, you can put file(s) manually.

You can extract app package direct from simulator by `extract-pkg`. [Github](https://github.com/jsveron23/extract-pkg)

To extract, simulator already booted and should be installed package on that. then,

```bash
extract-pkg ios -id=com.cxagroup.mobile.EmployeePortal --to=./app --rename=app-debug.app
```

The scripts to be handled by NPM scripts. You should open one of simulator which already installed app package. (`./scripts/config.js#pkg`)

```bash
npm run pkg # extract both platforms
npm run pkg:ios
npm run pkg:android
```

---

## exec

actual commands

---

## lib

helpers, utils
