import { updateHealthAs, isHealthResult } from '../actions/health.action';
import { updateHealthData } from '../../data/health.data';
import { loginAs } from '../actions/login.action';
import { validCredentials } from '../../data/login.data';

describe('Employee should,', () => {
  beforeAll(() => {
    loginAs(validCredentials);
  });

  afterAll(() => {
    driver.reset();
  });

  // it('be able to submit health data', () => {
  //   // expect(health.isHealthResult()).toBeTruthy();
  // });

  it('be able to update health data', () => {
    updateHealthAs(updateHealthData);
    expect(isHealthResult()).toBeTruthy();
  });

  // it('be able to submit health data with Image', () => {
  //   //ToDo :
  // });
  //
  // it('be able to view Face aging details', () => {
  //   //ToDo :
  // });
});
