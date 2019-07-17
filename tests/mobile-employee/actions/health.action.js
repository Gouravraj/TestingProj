import HealthScreen from '../screenobjects/health.screen';
import HealthLandingScreen from '../screenobjects/health.landing.screen';
import HealthUpdateScreen from '../screenobjects/health.update.screen';

//import NavigationBar from '../screenobjects/navigationbar.screen';

export function isLandingHealthPageDisplayed() {
  HealthLandingScreen.waitForIsShown(true);
  return HealthLandingScreen.landingPageText().isExisting();
}

export function clickAddMyHealthDataButton() {
  HealthLandingScreen.waitForIsShown(true);
  HealthLandingScreen.addMyHealthDataButton.click();
}

export function clickUpdateHealthDataButton() {
  HealthScreen.waitForIsShown(true);
  HealthScreen.updateHealthDataButton.click();
}

export function updateHealthAs(updateHealthData) {
  HealthUpdateScreen.waitForIsShown(true);

  // Height
  HealthUpdateScreen.heightField.click();
  HealthUpdateScreen.heightField.setValue(updateHealthData.Height);

  // Weight
  HealthUpdateScreen.weightField.click();
  HealthUpdateScreen.weightField.setValue(updateHealthData.Weight);
  HealthUpdateScreen.AboutMe.click();

  // Waist
  HealthUpdateScreen.waistField.click();
  HealthUpdateScreen.waistField.setValue(updateHealthData.Waist);
  HealthUpdateScreen.AboutMe.click();

  // Ethnicity
  // HealthUpdateScreen.ethnicityDropdown.click();
  // HealthUpdateScreen.eastAsianItem.click();

  // My choices
  HealthUpdateScreen.scrollDownToElement(HealthUpdateScreen.exercise20);
  HealthUpdateScreen.exercise20.click();

  // Sugar beverages
  HealthUpdateScreen.scrollDownToElement(HealthUpdateScreen.sugaryBeverage);
  HealthUpdateScreen.sugaryBeverage.click();

  // My health (pending)

  // Doing interesting
  HealthUpdateScreen.scrollDownToElement(HealthUpdateScreen.notAtAll);
  HealthUpdateScreen.notAtAll.click();

  // Feeling down
  // HealthUpdateScreen.notAtAll.click();

  // Click Next
  HealthUpdateScreen.scrollDownToElement(HealthUpdateScreen.next);
  HealthUpdateScreen.next.click();

  HealthScreen.waitForIsShown(true);
}

export function isBMIDisplayCorrectly(scope, status, statement) {
  return (
    HealthScreen.isTextExisting(scope) &&
    HealthScreen.isTextExisting(status) &&
    HealthScreen.isTextExisting(statement)
  );
}

export function isDiabeteDisplayCorrectly(status, text) {
  return (
    HealthScreen.isTextExisting(status) && HealthScreen.isTextExisting(text)
  );
}

export function isAlcoholDisplayCorrectly(assessment, statement) {
  return (
    HealthScreen.isTextExisting(assessment) &&
    HealthScreen.isTextExisting(statement)
  );
}

export function isTobaccoDisplayCorrectly(assessment, statement) {
  return (
    HealthScreen.isTextExisting(assessment) &&
    HealthScreen.isTextExisting(statement)
  );
}

export function isExerciseDisplayCorrectly(assessment, statement) {
  return (
    HealthScreen.isTextExisting(assessment) &&
    HealthScreen.isTextExisting(statement)
  );
}

export function isNutritionDisplayCorrectly(assessment, statement) {
  return (
    HealthScreen.isTextExisting(assessment) &&
    HealthScreen.isTextExisting(statement)
  );
}

export function isSleepDisplayCorrectly(assessment, statement) {
  return (
    HealthScreen.isTextExisting(assessment) &&
    HealthScreen.isTextExisting(statement)
  );
}

export function isMentalDisplayCorrectly(assessment, statement) {
  return (
    HealthScreen.isTextExisting(assessment) &&
    HealthScreen.isTextExisting(statement)
  );
}

export function isHealthResult() {
  return (
    HealthScreen.diabetesText('Low risk').isExisting() &&
    HealthScreen.bmiScore('27.2').isExisting()
  );
}
