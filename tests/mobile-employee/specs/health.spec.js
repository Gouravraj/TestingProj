// import health from '../actions/health.action';
// import healthData from '../../data/health.data';
import { loginAs } from '../actions/login.action';
import { landingCredentials } from '../../data/login.data';

import * as healthAction from '../actions/health.action';
// import { SSL_OP_EPHEMERAL_RSA } from 'constants';

describe('Employee should,', () => {
  beforeAll(() => {});

  afterEach(() => {
    driver.reset();
  });

  it('Story: Displaying of the health landing page #4', () => {
    loginAs(landingCredentials);

    console.log('Story: Displaying of the health landing page #4');

    console.log('VP1. Health tab is automatically selected');
    expect(healthAction.isLifeStyleTabSelected()).toBeTruthy();

    console.log('VP2. Health landing page is displayed');
    expect(healthAction.isLandingHealthPageDisplayed()).toBeTruthy();

    console.log(
      'VP3. "Enter Health Data" and "Search for clinics" button is displayed'
    );
    expect(healthAction.isAddMyHealthDataButtonDisplayed()).toBeTruthy();
    expect(healthAction.isSearchForClinicButtonDisplayed()).toBeTruthy();
  });

  // ----------
  /*
  it('be able to submit health data', () => {
    // expect(health.isHealthResult()).toBeTruthy();
  });

  it('be able to update health data', () => {
    // health.updateHealthAs(healthData.updateHealthData);
    // expect(health.isHealthResult()).toBeTruthy();
  });

  it('be able to submit health data with Image', () => {
    //ToDo :
  });

  it('be able to view Face aging details', () => {
    //ToDo :
  });
  */
});
