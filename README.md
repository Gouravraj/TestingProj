# dstribution-mobile-automation

## Install

```bash
npm install
```

## Check dependencies

Use Appium Doctor

```bash
npm install appium-doctor -g
appium-doctor
```

## Run tests

```bash
npm run ios
npm run android

# or run suite only
# you shoud set `claims` script in config file (`config/wdio.shared.conf.js`)
npm run ios -- --suite claims
```

## Scripts

Document [`here`](./scripts/README.md)

## Heap Snapshot

Once you have finished running scripts, you can save `.heapsnapshot` and you can debug by Chrome. First of, run this command after finished,

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
