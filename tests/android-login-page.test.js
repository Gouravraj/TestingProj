import wd from 'wd';
import server from '../appium/server';
import { navi, login } from './helpers/xpath';
import { android } from '../appium/capabilities';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

const driver = wd.promiseChainRemote(server);

beforeAll(async () => {
  await driver.init(android);
  await driver.sleep(2000);
});

afterAll(async () => {
  await driver.quit();
});

test('valid user credential', async () => {
  await driver
    .sleep(10000)
    .elementByXPath(login.android.clientName)
    .click()
    .type('twclient3');

  await driver
    .sleep(3000)
    .elementByXPath(login.android.screen)
    .click();

  await driver
    .sleep(1000)
    .elementByXPath(login.android.username)
    .click()
    .type('test3@test.com');

  await driver
    .sleep(3000)
    .elementByXPath(login.android.screen)
    .click();

  await driver
    .sleep(1000)
    .elementByXPath(login.android.password)
    .click()
    .type('P@ssw0rd');

  await driver
    .sleep(3000)
    .elementByXPath(login.android.screen)
    .click();

  await driver
    .sleep(1000)
    .elementByXPath(login.android.submit)
    .click();

  expect(
    await driver.sleep(10000).elementByXPath(navi.android.health)
  ).toBeDefined();
});
