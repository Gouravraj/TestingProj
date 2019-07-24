import AppScreen from './app.screen';
import txt from '../helpers/text';
import { platform as getPlatform } from '../helpers/api';

const SELECTORS = {
  HEALTH_NAVIGATOR: '~Lifestyle, tab, 1 of 4',
  UPDATE_HEALTH_DATA_BUTTON: '~Update Health Data',
  HEALTH_FIGURE_IOS:
    '(//XCUIElementTypeOther[starts-with(@name,"BMI")])[1]/XCUIElementTypeScrollView',
  HEALTH_FIGURE_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup',
  HEALTHY_LIFESTYLE: '~Healthy lifestyle',
  CURRENT_LIFESTYLE: '~Current lifestyle'
};

class HealthScreen extends AppScreen {
  constructor() {
    super(SELECTORS.UPDATE_HEALTH_DATA_BUTTON);
  }

  get healthyLifeStylePicture() {
    return $(SELECTORS.HEALTHY_LIFESTYLE);
  }

  get currentLifeStylePicture() {
    return $(SELECTORS.CURRENT_LIFESTYLE);
  }
  get updateHealthDataButton() {
    return $(SELECTORS.UPDATE_HEALTH_DATA_BUTTON);
  }

  get healthFigure() {
    const platform = getPlatform();
    if (platform === 'ios') {
      return $(SELECTORS.HEALTH_FIGURE_IOS);
    } else {
      return $(SELECTORS.HEALTH_FIGURE_ANDROID);
    }
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
