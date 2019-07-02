import HealthScreen from '../screenobjects/health.screen';
import NavigationBar from '../screenobjects/navigationbar.screen';

function updateHealthAs(healthDetail) {
  HealthScreen.waitForIsShown(true);
  NavigationBar.healthNavigator().click();
  HealthScreen.waitForComponent();
  HealthScreen.updateHealthDataButton().click();
  HealthScreen.HeightField().setValue(healthDetail.Height);
  HealthScreen.WeightField().setValue(healthDetail.Weight);
  HealthScreen.WaistField().setValue(healthDetail.Waist);
}

function isHealthResult() {
  HealthScreen.waitForIsShown(true);
}

module.exports = {
  updateHealthAs,
  isHealthResult
};
