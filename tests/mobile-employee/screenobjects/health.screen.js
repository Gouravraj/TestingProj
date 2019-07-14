import AppScreen from './app.screen';
import txt from '../helpers/text';

const SELECTORS = {
  HEALTH_NAVIGATOR: '~Lifestyle, tab, 1 of 4',
  BMI_BUTTON: '',
  UPDATE_HEALTH_DATA_BUTTON: '~Update Health Data',
  //  UPDATE_HEALTH_DATA_BUTTON: '~BMI',
  HEIGHT_FIELD: '~Height',
  WEIGHT_FIELD: '~Weight',
  WAIST_FIELD: '~Waist'
};

class HealthScreen extends AppScreen {
  constructor() {
    super(SELECTORS.UPDATE_HEALTH_DATA_BUTTON);
  }

  get updateHealthDataButton() {
    return $(SELECTORS.UPDATE_HEALTH_DATA_BUTTON);
  }

  bmiScore(score) {
    return $(txt(score));
  }

  bmiText(bmiText) {
    return $(txt(bmiText));
  }

  diabetesScore(score) {
    return $(txt(score));
  }

  diabetesText(diabetesText) {
    return $(txt(diabetesText));
  }
}

export default new HealthScreen();
