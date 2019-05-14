# dstribution-mobile-automation

# Install with dependencies

```bash
yarn install # npm install
```

- appium-doctor

To check dependencies.

```bash
npm install appium-doctor -g
appium-doctor
```

- idevicelocation

First of, we can easily install by using `brew` with `--HEAD` argument.

```bash
brew install idevicelocation --HEAD
```

We can install manually. You can follow [here](https://github.com/JonGabilondoAngulo/idevicelocation). But if you got error while running `sudo make install` like this,

```
install: /usr/bin/idevicelocation: Operation not permitted
```

you can do this as alternatively way. Because you cannot install directly to `/usr/bin` in macOS, we should install into `/usr/local` directory instead.

```bash
./configure --prefix=/usr/local
```

- bundletool.jar

You can download [here](https://github.com/google/bundletool/releases). Once you've download finished, you can rename as `bundletool.jar` and put into `$ANDRIOD_SDK/bundle-tools/bundletool.jar`. Then, make sure the file is applied in `$PATH`.

## Extract app packages (.app, .apk)

WebDriver will install app package on simulator before running scripts. So you must put file(s) inside `/path/current_repo/app`. Like `./app/app-debug.apk`. You can put files manually.

Also, you can extract app package direct from simulator by `extract-pkg`. [Github](https://github.com/jsveron23/extract-pkg)

To extract, simulator already booted and should be installed package on that. then,

```bash
extract-pkg ios -id=com.cxagroup.mobile.EmployeePortal --to=./app --rename=app-debug.app
```

Android is also same.

## Run tests

```bash
yarn run ios # yarn run android
```

## Troubleshooting

- 'RoutingHTTPServer/RoutingConnection.h' file not found FBWebServer.m

If you see this error message when testing iOS, WebDriver dependencies is not install properly. You can follow this,

```bash
cd ./node_modules/appium-xcuitest-driver/WebDriverAgent
./Scripts/bootstrap.sh -d
```

Then, they will download dependencies.
