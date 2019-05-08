import wd from 'wd';
import server from '../appium/server';
import accid from './helpers/accessibility-id';
import { ios } from '../appium/capabilities';

const { login: accidLogin, navi: accidNavi } = accid;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

const driver = wd.promiseChainRemote(server);

beforeAll(async () => {
  await driver.init(ios);
  await driver.sleep(2000);
});

afterAll(async () => {
  await driver.quit();
});

test('valid user credential', async (done) => {
  const asserters = wd.asserters;

  driver
    .waitForElementByAccessibilityId(
      accidLogin.clientName,
      asserters.isDisplayed,
      10000
    )
    .click()
    .type('twclient3')
    .elementByAccessibilityId(accidLogin.username)
    .click()
    .type('test3@test.com')
    .elementByAccessibilityId(accidLogin.password)
    .click()
    .type('P@ssw0rd')
    .elementByAccessibilityId(accidLogin.submit)
    .click()
    .then(async () => {
      expect(
        await driver.waitForElementByAccessibilityId(accidNavi.health, 20000)
      ).toBeDefined();

      done();
    });
});
