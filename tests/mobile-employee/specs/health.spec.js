import { loginAs } from '../actions/login.action';
import { landingCredentials, validCredentials } from '../../data/login.data';
import {
  updateHealthData,
  expectResultHealthData
} from '../../data/health.data';

import * as healthAction from '../actions/health.action';
// import { SSL_OP_EPHEMERAL_RSA } from 'constants';

describe('Employee should,', () => {
  beforeAll(() => {});

  afterEach(() => {
    driver.reset();
  });

  it('Story #4: Displaying of the health landing page', () => {
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

  it('Story #22: Displaying of BMI and Prediabetes results', () => {
    // Pre-con. Log in
    loginAs(validCredentials);

    // Step 1. Click update my health data button
    healthAction.clickUpdateHealthDataButton();

    // Step 2. Input data and click next
    healthAction.updateHealthAs(updateHealthData);

    // VP2. Verify Diabetes info is correctly
    expect(
      healthAction.isDiabeteDisplayCorrectly(
        expectResultHealthData.DiabeteStatus,
        expectResultHealthData.DiabeteStatement
      )
    ).toBeTruthy();

    // VP3. Verify Alcohol info is correctly
    expect(
      expectResultHealthData.AlcoholAssessment,
      expectResultHealthData.AlcoholStatement
    ).toBeTruthy();

    // VP4. Verify Tobacco info is correctly
    expect(
      healthAction.isTobaccoDisplayCorrectly(
        expectResultHealthData.TobaccoAssessment,
        expectResultHealthData.TobaccoStatement
      )
    ).toBeTruthy();

    // VP5. Verify Exercise info is correctly
    expect(
      healthAction.isExerciseDisplayCorrectly(
        expectResultHealthData.ExerciseAssessment,
        expectResultHealthData.ExerciseStatement
      )
    ).toBeTruthy();

    // VP6. Verify Nutrition info is correctly
    expect(
      healthAction.isNutritionDisplayCorrectly(
        expectResultHealthData.NutritionAssessment,
        expectResultHealthData.NutritionStatement
      )
    ).toBeTruthy();

    // VP7. Verify Sleep info is correctly
    expect(
      healthAction.isSleepDisplayCorrectly(
        expectResultHealthData.SleepAssessment,
        expectResultHealthData.SleepStatement
      )
    ).toBeTruthy();

    // VP8. Verify Mental info is correctly
    expect(
      expectResultHealthData.MentalAssessment,
      expectResultHealthData.MentalStatement
    ).toBeTruthy();
  });

  fit('Story #30: Take photo via camera on mobile for face aging', () => {
    // Pre-con. Log in as landing credentials account
    loginAs(validCredentials);

    // Step 1. Click update my health data button
    healthAction.clickUpdateHealthDataButton();

    // Step 2. Remove photo (if have)
    healthAction.removePhoto();

    // Step 3. Take photo (if have)
    healthAction.takePhoto();
  });

  it('be able to update health data', () => {
    healthAction.updateHealthAs(updateHealthData);
    expect(healthAction.isHealthResult()).toBeTruthy();
  });
});
