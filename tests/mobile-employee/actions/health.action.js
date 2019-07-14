import HealthScreen from '../screenobjects/health.screen';
import HealthUpdateScreen from '../screenobjects/health.update.screen';
//import NavigationBar from '../screenobjects/navigationbar.screen';

export function updateHealthAs(updateHealthData) {
  HealthScreen.waitForIsShown(true);

  HealthScreen.updateHealthDataButton.click();

  HealthUpdateScreen.waitForIsShown(true);

  HealthUpdateScreen.heightField.click();

  // driver.execute('mobile:doubleTap', {element: HealthUpdateScreen.heightField});
  // HealthUpdateScreen.heightField.clear();
  // driver.execute('mobile:doubleTap', {element: 'Height'});
  // driver.touchDoubleClick('~Height')
  HealthUpdateScreen.heightField.setValue(updateHealthData.Height);

  HealthUpdateScreen.weightField.click();
  HealthUpdateScreen.weightField.setValue(updateHealthData.Weight);

  HealthUpdateScreen.AboutMe.click();

  HealthUpdateScreen.waistField.click();
  HealthUpdateScreen.waistField.setValue(updateHealthData.Waist);

  HealthUpdateScreen.AboutMe.click();

  HealthUpdateScreen.scrollToNext();
  HealthUpdateScreen.next.click();

  HealthScreen.waitForIsShown(true);
}

export function isHealthResult() {
  return (
    HealthScreen.diabetesText('Low risk').isExisting() &&
    HealthScreen.bmiScore('27.2').isExisting()
  );
}
