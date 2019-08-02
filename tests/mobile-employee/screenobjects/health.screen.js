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
  SEARCH_FOR_CLINICS_BUTTON: '~Search for clinics',
  HISTORY_GRAPH_ANDROID:
    '//android.view.ViewGroup[@content-desc="Health Score History Graph showing last 6 records."]',
  HISTORY_GRAPH_IOS: '~Health Score History Graph showing last 6 records.',
  AGING_SLIDER_IOS:
    '(//XCUIElementTypeOther[starts-with(@name,"Future you at the age")])[1]/XCUIElementTypeSlider',
  AGING_SLIDER_ANDROID:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.SeekBar'
};

class HealthScreen extends AppScreen {
  constructor() {
    super(SELECTORS.UPDATE_HEALTH_DATA_BUTTON);
    this.platform = getPlatform().toUpperCase();
  }

  get agingSlider() {
    return $(SELECTORS[`AGING_SLIDER_${this.platform}`]);
  }

  get historyGraph() {
    return $(SELECTORS[`HISTORY_GRAPH_${this.platform}`]);
  }

  get searchForClinicButton() {
    return $(SELECTORS.SEARCH_FOR_CLINICS_BUTTON);
  }

  get loadingIcon() {
    return $(SELECTORS[`LOADING_ICON_${this.platform}`]);
  }

  get healthyLifeStylePicture() {
    return $(SELECTORS[`HEALTHY_LIFESTYLE_${this.platform}`]);
  }

  get currentLifeStylePicture() {
    return $(SELECTORS[`CURRENT_LIFESTYLE_${this.platform}`]);
  }

  get updateHealthDataButton() {
    return $(SELECTORS.UPDATE_HEALTH_DATA_BUTTON);
  }

  get healthFigure() {
    return $(SELECTORS[`HEALTH_FIGURE_${this.platform}`]);
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
