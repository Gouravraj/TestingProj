import wd from 'wd';
import server from '../appium/server';
import { android } from '../appium/capabilities';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

const driver = wd.promiseChainRemote(server);

beforeAll(async () => {
  try {
    await driver.init(android);
    await driver.sleep(2000);
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);
  }
});

afterAll(async () => {
  try {
    await driver.quit();
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);
  }
});

test('valid user credential', async () => {
  await driver.sleep(7000).saveScreenshot('./screenshots/login-page.png');

  // keyboard off
  await driver
    .sleep(1000)
    .elementByXPath(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup'
    )
    .click();

  await driver
    .sleep(1000)
    .elementByXPath(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText'
    )
    .click()
    .type('twclient3');

  // keyboard off
  await driver
    .sleep(1000)
    .elementByXPath(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup'
    )
    .click();

  await driver
    .sleep(1000)
    .elementByXPath(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.EditText'
    )
    .click()
    .type('test3@test.com');

  // keyboard off
  await driver
    .sleep(1000)
    .elementByXPath(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup'
    )
    .click();

  await driver
    .sleep(1000)
    .elementByXPath(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.EditText'
    )
    .click()
    .type('P@ssw0rd');

  // keyboard off
  await driver
    .sleep(1000)
    .elementByXPath(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup'
    )
    .click();

  await driver
    .sleep(1000)
    .elementByXPath('//android.view.ViewGroup[@content-desc="submit"]')
    .click();

  // TODO:
  // - create helper functions
  // - apply after login

  expect(Boolean('true')).toBe(true);
});
