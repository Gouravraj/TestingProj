import health from '../actions/health.action';
import healthData from '../data/health.data';
import login from '../actions/login.action';
import loginData from '../data/login.data';

describe('Employee should,', () => {
  beforeAll(() => {
    login.loginAs(loginData.validCredentials);
  });

  afterAll(() => {
    driver.reset();
  });

  it('be able to submit health data', () => {
    //(health.isHealthResult()).toBeTruthy();
  });

  it('be able to update health data', () => {
    health.updateHealthAs(healthData.updateHealthData);
    expect(health.isHealthResult()).toBeTruthy();
  });

  it('be able to submit health data with Image', () => {
    //ToDo :
  });

  it('be able to view Face aging details', () => {
    //ToDo :
  });
});
