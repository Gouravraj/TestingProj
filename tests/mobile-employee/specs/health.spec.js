// import health from '../actions/health.action';
// import healthData from '../../data/health.data';
import { loginAs } from '../actions/login.action';
import { validCredentials } from '../../data/login.data';
import * as healthAction from '../actions/health.action';
// import { SSL_OP_EPHEMERAL_RSA } from 'constants';

describe('Employee should,', () => {
  beforeAll(() => {
    loginAs(validCredentials);
  });

  afterAll(() => {
    driver.reset();
  });

  it('Story: Displaying of the health landing page #4', () => {
    console.log('Story: Displaying of the health landing page #4');
    expect(healthAction.isLandingHealthPageDisplayed()).toBeTruthy();
  });

  it('Story: Displaying of BMI and Prediabetes results #22', () => {
    // Pre-con. set up data
    const submitHealthData = {
      Height: '168',
      Weight: '55',
      Ethnicity: 'East Asian',
      MyChoices: 'I exercise more than 20 minutes each day',
      SugaryBeverages: '0 to 2 times per week',
      DoingThings: 'Not at all',
      FeelingDown: 'Not at all'
    };
    // Step 1. Click update my health data button
    healthAction.clickUpdateHealthDataButton();

    // Step 2. Input data and click next
    healthAction.updateHealthAs(submitHealthData);

    // VP. Verify BMI
    expect(
      healthAction.isBMIDisplayCorrectly(
        '19.5',
        'Healthy',
        'Your BMI looks great - keep it up! Eat well and exercise regularly to stay healthy.'
      )
    ).toBeTruthy();

    // VP. Verify Diabetes
    expect(
      healthAction.isDiabeteDisplayCorrectly(
        'Low risk',
        'Awesome! Maintain a healthy lifestyle to keep your risk low.'
      )
    ).toBeTruthy();

    // VP. Verify Alcohol
    expect(
      healthAction.isAlcoholDisplayCorrectly('None', 'Good job!')
    ).toBeTruthy();

    // VP. Verify Tobacco
    expect(
      healthAction.isTobaccoDisplayCorrectly(
        'Non-smoker',
        'Good job! Be careful to avoid exposure to second-hand smoke.'
      )
    ).toBeTruthy();

    // VP. Verify Exercise
    expect(
      healthAction.isExerciseDisplayCorrectly(
        'Active',
        'Well done, keep it up!'
      )
    ).toBeTruthy();

    // VP. Verify Nutrition
    expect(
      healthAction.isNutritionDisplayCorrectly(
        'Normal',
        'Good! Choose water instead of sweetened drinks whenever possible.'
      )
    ).toBeTruthy();

    // VP. Verify Sleep
    expect(
      healthAction.isSleepDisplayCorrectly(
        'Well rested',
        'Nice! Try to get at least 7-9 hours sleep each night to stay focused and avoid sleep-related health problems.'
      )
    ).toBeTruthy();

    // VP. Verify Mental
    expect(
      healthAction.isMentalDisplayCorrectly('Doing well', 'Keep it up!')
    ).toBeTruthy();
  });

  afterEach(() => {
    driver.reset();
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
