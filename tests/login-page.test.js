import wd from 'wd';
import { android } from '../appium/capabilities';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;

describe('Appium', () => {
  const driver = wd.promiseChainRemote('0.0.0.0', PORT);

  beforeAll(async () => {
    await driver.init(android);
    await driver.sleep(2000);
  });

  test('renders some use case', async () => {
    // await driver.sleep(4000).saveScreenshot('./test.png')

    expect(await driver.sleep(4000).hasElementByAccessibilityId('WTF')).toBe(
      true
    );
  });
});
