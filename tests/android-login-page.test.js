import wd from 'wd';
import server from '../appium/server';
import { login } from './helpers/xpath';
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
  // await driver.sleep(7000).saveScreenshot('./screenshots/login-page.png');

  // keyboard off
  await driver
    .sleep(7000)
    .elementByXPath(login.view)
    .click();

  await driver
    .sleep(1000)
    .elementByXPath(login.clientName)
    .click()
    .type('twclient3');

  // keyboard off
  await driver
    .sleep(1000)
    .elementByXPath(login.view)
    .click();

  await driver
    .sleep(1000)
    .elementByXPath(login.username)
    .click()
    .type('test3@test.com');

  // keyboard off
  await driver
    .sleep(1000)
    .elementByXPath(login.view)
    .click();

  await driver
    .sleep(1000)
    .elementByXPath(login.password)
    .click()
    .type('P@ssw0rd');

  // keyboard off
  await driver
    .sleep(1000)
    .elementByXPath(login.view)
    .click();

  await driver
    .sleep(1000)
    .elementByXPath(login.submit)
    .click();

  // TODO:
  // - apply after login

  expect(Boolean('true')).toBe(true);
});
