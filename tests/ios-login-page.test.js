import wd from 'wd';
import server from '../appium/server';
import { navi, login } from './helpers/xpath';
import { ios } from '../appium/capabilities';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

const driver = wd.promiseChainRemote(server);

beforeAll(async () => {
  await driver.init(ios);
  await driver.sleep(2000);
});

afterAll(async () => {
  await driver.quit();
});

test('valid user credential', async () => {
  await driver
    .sleep(7000)
    .elementByXPath(login.ios.clientName)
    .click()
    .type('twclient3');

  await driver
    .sleep(1000)
    .elementByXPath(login.ios.username)
    .click()
    .type('test3@test.com');

  await driver
    .sleep(1000)
    .elementByXPath(login.ios.password)
    .click()
    .type('P@ssw0rd');

  await driver
    .sleep(1000)
    .elementByXPath(login.ios.submit)
    .click();

  expect(
    await driver.sleep(15000).elementByXPath(navi.ios.health)
  ).toBeDefined();
});
