import AppScreen from './app.screen';

const SELECTORS = {
  HEALTH_NAVIGATOR: '~Health, tab, 1 of 4',
  CLAIMS_NAVIGATOR: '',
  SHOP_NAVIGATOR: '',
  PROFILE_NAVIGATOR: ''
};
class NavigationBar extends AppScreen {
  constructor() {
    super(SELECTORS.HEALTH_NAVIGATOR);
  }
  healthNavigator() {
    return $(SELECTORS.HEALTH_NAVIGATOR);
  }
  claimsNavigator() {
    return $(SELECTORS.CLAIMS_NAVIGATOR);
  }
  shopNavigator() {
    return $(SELECTORS.SHOP_NAVIGATOR);
  }
  profileNavigator() {
    return $(SELECTORS.PROFILE_NAVIGATOR);
  }
}
export default new NavigationBar();