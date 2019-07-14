# dstribution-mobile-automation

## Structure

- `app` - App package files (e.g app-debug.apk) **create if no exist**
- `config` - Config files
- `scripts` - Implements of `NPM` scripts (package.json#scripts)
- `tests` - UI test scripts

## Install

```bash
npm install
```

It will install dependencies only for repository. You should install another dependencies to run script as well. Important thing is Xcode and Android SDK. You can check from below.

## Check dependencies

Use Appium Doctor to check dependencies. If you install everything in `required` section, you are ready to run test scripts.

```bash
npm install appium-doctor -g
appium-doctor
```

## Run tests

If you run CI script, it will launch (si|e)mulator automatically. Otherwise, you should run it manually. You can check [`here`](./scripts/README.md)

```bash
# run test scripts
npm run ios
npm run android

# run CI script on local
npm run ci:android
npm run ci:ios

# run suite only
# you shoud set `claims` script in config file (`config/wdio.shared.conf.js`)
npm run ios -- --suite claims
npm run ci:android -- --suite claims
```

## Scripts

Document [`here`](./scripts/README.md)

## Heap Snapshot

Once you have finished running scripts, you can save `.heapsnapshot` and you can debug from Chrome. Run this command after finished,

```bash
ps -a
```

Then, you can find process of Appium scripts, and put process id(number),

```bash
kill -USR2 <pid>
```

Once you tried, it automatically generating `.heapsnapshot` on the repo. Now, open Chrome browser and open `inspector`. Go to `memory` tab then press `Load` button.

Now, you can see memory information, which is useful when we faced memory leaks issue.

## Troubleshooting

- Installing `idevicelocation`

We can easily install by using `brew` with `--HEAD` argument. Please use `--HEAD` if you're using latest MacOS.

```bash
brew install idevicelocation --HEAD
```

We can install manually with sources. You can follow [here](https://github.com/JonGabilondoAngulo/idevicelocation). But if you got error while running `sudo make install` like this,

```
install: /usr/bin/idevicelocation: Operation not permitted
```

Because you cannot install directly to `/usr/bin` in macOS, we should install into `/usr/local` directory instead.

```bash
./configure --prefix=/usr/local
```

- Installing `bundletool.jar`

You can download [here](https://github.com/google/bundletool/releases). Once you've download finished, you can rename as `bundletool.jar` and put into `$ANDRIOD_SDK/bundle-tools/bundletool.jar`. Then, make sure the file is applied in `$PATH`.

- 'RoutingHTTPServer/RoutingConnection.h' file not found FBWebServer.m

If you see this error message when testing iOS, WebDriver dependencies is not install properly. You can follow this,

```bash
cd ./node_modules/appium/node_modules/appium-xcuitest-driver/WebDriverAgent
./Scripts/bootstrap.sh -d
```

Then, it will build again.
