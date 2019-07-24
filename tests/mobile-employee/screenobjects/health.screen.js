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
  LOADING_ICON_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]',
  LOADING_ICON_IOS: '', //todo
  HEALTHY_LIFESTYLE_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ImageView[1]',
  HEALTHY_LIFESTYLE_IOS:
    '(//XCUIElementTypeOther[@name="Healthy lifestyle"])[2]/XCUIElementTypeImage',
  CURRENT_LIFESTYLE_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ImageView[2]',
  CURRENT_LIFESTYLE_IOS:
    '(//XCUIElementTypeOther[@name="Current lifestyle"])[2]/XCUIElementTypeImage',
  SEARCH_FOR_CLINICS_BUTTON: '~Search for clinics'
};

class HealthScreen extends AppScreen {
  constructor() {
    super(SELECTORS.UPDATE_HEALTH_DATA_BUTTON);
  }

  get searchForClinicButton() {
    return $(SELECTORS.SEARCH_FOR_CLINICS_BUTTON);
  }

  get loadingIcon() {
    const platform = getPlatform();
    if (platform === 'ios') {
      return $(SELECTORS.LOADING_ICON_IOS);
    } else {
      return $(SELECTORS.LOADING_ICON_ANDROID);
    }
  }

  get healthyLifeStylePicture() {
    const platform = getPlatform();
    if (platform === 'ios') {
      return $(SELECTORS.HEALTHY_LIFESTYLE_IOS);
    } else {
      return $(SELECTORS.HEALTHY_LIFESTYLE_ANDROID);
    }
  }

  get currentLifeStylePicture() {
    const platform = getPlatform();
    if (platform === 'ios') {
      return $(SELECTORS.CURRENT_LIFESTYLE_IOS);
    } else {
      return $(SELECTORS.CURRENT_LIFESTYLE_ANDROID);
    }
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
