import AppScreen from './app.screen';
import txt from '../helpers/text';

const SELECTORS = {
  HEALTH_NAVIGATOR: '~Lifestyle, tab, 1 of 4',
  BMI_BUTTON: '',
  UPDATE_HEALTH_DATA_BUTTON: '~Update Health Data',
  HEALTH_FIGURE:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup'
};

class HealthScreen extends AppScreen {
  constructor() {
    super(SELECTORS.UPDATE_HEALTH_DATA_BUTTON);
  }

  get updateHealthDataButton() {
    return $(SELECTORS.UPDATE_HEALTH_DATA_BUTTON);
  }

  get healthFigure() {
    return $(SELECTORS.HEALTH_FIGURE);
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
