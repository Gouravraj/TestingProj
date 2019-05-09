# dstribution-mobile-automation

## Install dependencies for Appium

`appium-doctor` will help you check dependencies.

```bash
npm install appium-doctor -g
appium-doctor
```

- idevicelocation

First of, we can easily install by using `brew` with `--HEAD` argument.

```bash
brew install idevicelocation --HEAD
```

Also, we can install manually. You can follow [here](https://github.com/JonGabilondoAngulo/idevicelocation). But if you got error while running `sudo make install` like this,

```
install: /usr/bin/idevicelocation: Operation not permitted
```

you can do this as alternatively way. Because we cannot install directly on `/usr/bin` in macOS, we should install into `/usr/local` directory instead.

```bash
./configure --prefix=/usr/local
```

- bundletool.jar

You can download [here](https://github.com/google/bundletool/releases). Once you've download finished, you can rename as `bundletool.jar` and put into `$ANDRIOD_SDK/bundle-tools/bundletool.jar`. Then, make sure the file is applied in `$PATH`.

## Start Appium server

Before running test scripts, you must run Appium server. Easiest way is installing `Appium Desktop`. But if you prefer running the command on terminal,

```bash
yarn run appium # or npm run appium
# or
npm install appium -g
appium
```

## Extract app packages (.app, .apk)

WebDriver will install app package on virtual device(Simulator, Emulator) before running script, so you must put file(s) inside `/path/current_repo/app`. Like `../app/app-debug.apk`.

Also, you can extract development package by `extract-pkg`, [Github](https://github.com/jsveron23/extract-pkg).

To extract, virtual device already booted and should be installed package on that. You can do,

```bash
# distribution-employee-mobile
npm run ios # or android
```

If finish booted,

```bash
# distribution-mobile-automation
extract-pkg ios -id=com.cxagroup.mobile.EmployeePortal --to=./app --rename=app-debug.app
```

## Run tests

This will test iOS, Android.

```bash
yarn test
```

or,

```bash
yarn run test:ios # or test:android
```
