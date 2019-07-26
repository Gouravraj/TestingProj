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

    // VP1. Verify BMI info is correctly
    expect(
      healthAction.isBMIDisplayCorrectly(
        expectResultHealthData.BMI,
        expectResultHealthData.BMIStatus,
        expectResultHealthData.BMIStatement
      )
    ).toBeTruthy();

    // Pending: Because currently, we only care about height and weight so I pending verify these
    /*
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
    */
  });

  /*
  it('Story #30: Take photo via camera on mobile for face aging', () => {
    // Pre-con 1. Log in as landing credentials account
    loginAs(validCredentials);

    // Pre-con 2. Click update my health data button
    healthAction.clickUpdateHealthDataButton();

    // Pre-con 3. Remove photo (if have)
    healthAction.removePhoto();

    // Step 3. Take photo (if have)
    healthAction.takePhoto();

    // VP1. Verify taken photo displays on Update page
    expect(healthAction.isPhotoExistingOnUpdatePage()).toBeTruthy();

    // Step 4. Click Next
    healthAction.clickNextButton();

    //VP2. Verify taken photo displays on Health page
    //Pending because the photo taken by simulator cannot be displayed on Health page
    // expect(healthAction.isPhotoExistingOnLifestylePage()).toBeTruthy();
  });
  */

  it('Story #31: Upload photo from mobile gallery for face aging', () => {
    // Pre-con 0. Copy image to iOS
    healthAction.copyImageToLibrary();

    // Pre-con 1. Log in as landing credentials account
    loginAs(validCredentials);

    // Pre-con 2. Click update my health data button
    healthAction.clickUpdateHealthDataButton();

    // Pre-con 3. Remove photo (if have)
    healthAction.removePhoto();

    // Step 3. Select photo (if have)
    healthAction.selectPhoto();

    // VP1. Verify taken photo displays on Update page
    expect(healthAction.isPhotoExistingOnUpdatePage()).toBeTruthy();

    // Step 4. Click Next
    healthAction.clickNextButton();

    //VP2. Verify taken photo displays on Health page
    expect(healthAction.isPhotoExistingOnLifestylePage()).toBeTruthy();
  });

  it('Story #32: Face aging slider', () => {
    // Pre-con 0. Copy image to iOS
    healthAction.copyImageToLibrary();

    // Pre-con 1. Log in as landing credentials account
    loginAs(validCredentials);

    // Pre-con 2. Click update my health data button
    healthAction.clickUpdateHealthDataButton();

    // Pre-con 3. Remove photo (if have)
    healthAction.removePhoto();

    // Step 3. Select photo (if have)
    healthAction.selectPhoto();

    // VP1. Verify taken photo displays on Update page
    expect(healthAction.isPhotoExistingOnUpdatePage()).toBeTruthy();

    // Step 4. Click Next
    healthAction.clickNextButton();

    // VP2. Verify selected photo displays on Health page
    expect(healthAction.isPhotoExistingOnLifestylePage()).toBeTruthy();

    // Step 5. Slide face aging to 25%
    healthAction.slideFaceAging(0, 0.25);

    // VP3. Verify future you at the age display of 45
    expect(healthAction.isFutureYouAtTheAgeOf('45')).toBeTruthy();

    // Step 6. Slide face aging to 25%
    healthAction.slideFaceAging(0.25, 0.5);

    // VP4. Verify future you at the age display of 55
    expect(healthAction.isFutureYouAtTheAgeOf('55')).toBeTruthy();

    // Step 7. Slide face aging to 25%
    healthAction.slideFaceAging(0.5, 0.75);

    // VP5. Verify future you at the age display of 67
    expect(healthAction.isFutureYouAtTheAgeOf('67')).toBeTruthy();

    // Step 8. Slide face aging to 25%
    healthAction.slideFaceAging(0.75, 1);

    // VP6. Verify future you at the age display of 75
    expect(healthAction.isFutureYouAtTheAgeOf('75')).toBeTruthy();
  });
});
