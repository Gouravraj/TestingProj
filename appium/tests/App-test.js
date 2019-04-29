import wd from 'wd';
import capabilities from "../capabilities/capabilities"

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
  await driver.init(capabilities.android);
  await driver.sleep(2000);
})

test('appium renders', async () => {
  expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
	expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
});
