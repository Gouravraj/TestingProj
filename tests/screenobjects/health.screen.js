import AppScreen from './app.screen';

const SELECTORS = {
  HEALTH_SCREEN: '~Health, tab, 1 of 4',
  HEALTH_NAVIGATOR: '~Health, tab, 1 of 4',
  BMI_BUTTON: '',
  UPDATE_HEALTH_DATA_BUTTON: '~Update Health Data',
  HEIGHT_FIELD: '~Height',
  WEIGHT_FIELD: '~Weight',
  WAIST_FIELD: '~Waist'
};

class HealthScreen extends AppScreen {
  constructor() {
    super(SELECTORS.HEALTH_SCREEN);
  }

  healthScreen() {
    return $(SELECTORS.HEALTH_SCREEN);
  }

  updateHealthDataButton() {
    return $(SELECTORS.UPDATE_HEALTH_DATA_BUTTON);
  }

  HeightField() {
    return $(SELECTORS.HEIGHT_FIELD);
  }

  WeightField() {
    return $(SELECTORS.WEIGHT_FIELD);
  }

  WaistField() {
    return $(SELECTORS.WAIST_FIELD);
  }

  waitForComponent() {
    SELECTORS.UPDATE_HEALTH_DATA_BUTTON.waitForExist();
  }
}

export default new HealthScreen();
