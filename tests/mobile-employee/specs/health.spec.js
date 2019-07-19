import { loginAs } from '../actions/login.action';
import { landingCredentials } from '../../data/login.data';
import { validCredentials } from '../../data/login.data';
import { updateHealthData } from '../../data/health.data';

import * as healthAction from '../actions/health.action';
// import { SSL_OP_EPHEMERAL_RSA } from 'constants';

describe('Employee should,', () => {
  beforeAll(() => {});

  afterEach(() => {
    driver.reset();
  });

  it('Story: Displaying of the health landing page #4', () => {
    // Pre-con. Log in as landing credentials account
    loginAs(landingCredentials);

    // VP1. Health tab is automatically selected
    expect(healthAction.isLifeStyleTabSelected()).toBeTruthy();

    // VP2. Health landing page is displayed
    expect(healthAction.isLandingHealthPageDisplayed()).toBeTruthy();

    // VP3. "Enter Health Data" and "Search for clinics" button is displayed
    expect(healthAction.isAddMyHealthDataButtonDisplayed()).toBeTruthy();
    expect(healthAction.isSearchForClinicButtonDisplayed()).toBeTruthy();
  });

  it('Story: Displaying of BMI and Prediabetes results #22', () => {
    // Pre-con. Log in
    loginAs(validCredentials);

    // Pre-con. Set up data'
    const submitHealthData = updateHealthData;

    // Step 1. Click update my health data button
    healthAction.clickUpdateHealthDataButton();

    // Step 2. Input data and click next
    healthAction.updateHealthAs(submitHealthData);

    // VP1. Verify BMI info is correctly
    expect(
      healthAction.isBMIDisplayCorrectly(
        '19.5',
        'Healthy',
        'Your BMI looks great - keep it up! Eat well and exercise regularly to stay healthy.'
      )
    ).toBeTruthy();

    // VP2. Verify Diabetes info is correctly
    expect(
      healthAction.isDiabeteDisplayCorrectly(
        'Low risk',
        'Awesome! Maintain a healthy lifestyle to keep your risk low.'
      )
    ).toBeTruthy();

    // VP3. Verify Alcohol info is correctly
    expect(
      healthAction.isAlcoholDisplayCorrectly('None', 'Good job!')
    ).toBeTruthy();

    // VP4. Verify Tobacco info is correctly
    expect(
      healthAction.isTobaccoDisplayCorrectly(
        'Non-smoker',
        'Good job! Be careful to avoid exposure to second-hand smoke.'
      )
    ).toBeTruthy();

    // VP5. Verify Exercise info is correctly
    expect(
      healthAction.isExerciseDisplayCorrectly(
        'Active',
        'Well done, keep it up!'
      )
    ).toBeTruthy();

    // VP6. Verify Nutrition info is correctly
    expect(
      healthAction.isNutritionDisplayCorrectly(
        'Normal',
        'Good! Choose water instead of sweetened drinks whenever possible.'
      )
    ).toBeTruthy();

    // VP7. Verify Sleep info is correctly
    expect(
      healthAction.isSleepDisplayCorrectly(
        'Well rested',
        'Nice! Try to get at least 7-9 hours sleep each night to stay focused and avoid sleep-related health problems.'
      )
    ).toBeTruthy();

    // VP8. Verify Mental info is correctly
    expect(
      healthAction.isMentalDisplayCorrectly('Normal', 'Keep it up!')
    ).toBeTruthy();
  });

  it('be able to update health data', () => {
    healthAction.updateHealthAs(updateHealthData);
    expect(healthAction.isHealthResult()).toBeTruthy();
  });
});
