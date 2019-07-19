import HealthScreen from '../screenobjects/health.screen';
import HealthLandingScreen from '../screenobjects/health.landing.screen';
import HealthUpdateScreen from '../screenobjects/health.update.screen';
import NavigationBar from '../screenobjects/navigationbar.screen';
import txt from '../helpers/text';

export function isLifeStyleTabSelected() {
  HealthLandingScreen.waitForIsShown(true);
  const isSelected = NavigationBar.getAttributeOfElement(
    NavigationBar.healthNavigator(),
    'selected'
  );
  return isSelected;
}

export function isLandingHealthPageDisplayed() {
  HealthLandingScreen.waitForIsShown(true);
  return HealthLandingScreen.landingPageText().isExisting();
}

export function isAddMyHealthDataButtonDisplayed() {
  HealthLandingScreen.waitForIsShown(true);
  return HealthLandingScreen.addMyHealthDataButton().isExisting();
}

export function isSearchForClinicButtonDisplayed() {
  HealthLandingScreen.waitForIsShown(true);
  return HealthLandingScreen.searchForClinicButton().isExisting();
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
  HealthUpdateScreen.ethnicityDropdown.click();
  $(txt(updateHealthData.Ethnicity)).click();

  // My choices
  if (updateHealthData.ExerciseMoreThan20 === 'true') {
    // TODO: if not selected
    HealthUpdateScreen.scrollDownToElement(HealthUpdateScreen.exercise20);
    HealthUpdateScreen.exercise20.click();
  }

  // Sugar beverages
  // HealthUpdateScreen.scrollDownToElement($('~' + updateHealthData.sugaryBeverage));
  // ($('~' + updateHealthData.sugaryBeverage)).click();
  HealthUpdateScreen.scrollDownToElement(
    $(txt(updateHealthData.SugaryBeverage))
  );
  $(txt(updateHealthData.SugaryBeverage)).click();

  // My health (pending)

  // Doing interesting
  if (updateHealthData.Interest === 'Not at all') {
    HealthUpdateScreen.scrollDownToElement(
      HealthUpdateScreen.notAtAllInteresting
    );
    HealthUpdateScreen.notAtAllInteresting.click();
  } else {
    HealthUpdateScreen.scrollDownToElement($(txt(updateHealthData.Interest)));
    $(txt(updateHealthData.Interest)).click();
  }

  // Depress
  if (updateHealthData.Depress === 'Not at all') {
    HealthUpdateScreen.scrollDownToElement(HealthUpdateScreen.notAtAllDepress);
    HealthUpdateScreen.notAtAllDepress.click();
  } else {
    HealthUpdateScreen.scrollDownToElement($(txt(updateHealthData.Depress)));
    $(txt(updateHealthData.Depress)).click();
  }

  // Click Next
  HealthUpdateScreen.scrollDownToElement(HealthUpdateScreen.next);
  HealthUpdateScreen.next.click();

  HealthScreen.waitForIsShown(true);
}

export function isExerciseDisplayActive() {
  HealthScreen.scrollRightOnElementToFindElement(
    HealthScreen.healthFigure,
    $(txt('EXERCISE'))
  );
  HealthScreen.isTextExisting('Active');
}

export function isBMIDisplayCorrectly(scope, status, statement) {
  HealthScreen.waitForIsShown(true);
  return (
    HealthScreen.isTextExisting(scope) &&
    HealthScreen.isTextExisting(status) &&
    HealthScreen.isTextExisting(statement)
  );
}

export function isDiabeteDisplayCorrectly(status, text) {
  HealthScreen.scrollRightOnElementToFindElement(
    HealthScreen.healthFigure,
    $(txt('DIABETES'))
  );
  return (
    HealthScreen.isTextExisting(status) && HealthScreen.isTextExisting(text)
  );
}

export function isAlcoholDisplayCorrectly(assessment, statement) {
  HealthScreen.scrollRightOnElementToFindElement(
    HealthScreen.healthFigure,
    $(txt('ALCOHOL'))
  );
  return (
    HealthScreen.isTextExisting(assessment) &&
    HealthScreen.isTextExisting(statement)
  );
}

export function isTobaccoDisplayCorrectly(assessment, statement) {
  HealthScreen.scrollRightOnElementToFindElement(
    HealthScreen.healthFigure,
    $(txt('TOBACCO'))
  );
  return (
    HealthScreen.isTextExisting(assessment) &&
    HealthScreen.isTextExisting(statement)
  );
}

export function isExerciseDisplayCorrectly(assessment, statement) {
  HealthScreen.scrollRightOnElementToFindElement(
    HealthScreen.healthFigure,
    $(txt('EXERCISE'))
  );
  return (
    HealthScreen.isTextExisting(assessment) &&
    HealthScreen.isTextExisting(statement)
  );
}

export function isNutritionDisplayCorrectly(assessment, statement) {
  HealthScreen.scrollRightOnElementToFindElement(
    HealthScreen.healthFigure,
    $(txt('NUTRITION'))
  );
  return (
    HealthScreen.isTextExisting(assessment) &&
    HealthScreen.isTextExisting(statement)
  );
}

export function isSleepDisplayCorrectly(assessment, statement) {
  HealthScreen.scrollRightOnElementToFindElement(
    HealthScreen.healthFigure,
    $(txt('SLEEP'))
  );
  return (
    HealthScreen.isTextExisting(assessment) &&
    HealthScreen.isTextExisting(statement)
  );
}

export function isMentalDisplayCorrectly(assessment, statement) {
  HealthScreen.scrollRightOnElementToFindElement(
    HealthScreen.healthFigure,
    $(txt('MENTAL'))
  );
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
