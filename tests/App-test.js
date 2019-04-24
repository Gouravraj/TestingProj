import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
    "automationName": "XCUITest",
    "platformName": "iOS",
    "app": "/Users/harisan/Downloads/EmployeeFrontend.app.dSYM",
    "wdaLaunchTimeout": 80000,
    "deviceName": "iPhone Xs",
    "wdaConnectionTimeout": 80000,
    "preventWDAAttachments": true,
    "shouldUseSingletonTestManager": false,
    "simpleIsVisibleCheck": true,
    "maxTypingFrequency": 10,
    "platformVersion" : 12.2
};
const androidConfig = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: './build/app-release.apk'
};

const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
  await driver.init(androidConfig);
  await driver.sleep(2000); 
})

test('appium renders', async () => {
  expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
	expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
});
