import page from './app.page';

const SELECTORS = {
  HEALTH_NAVIGATOR: "//button[@data-testid='nav-lifestyle']",
  CLAIMS_NAVIGATOR: "//button[@data-testid='nav-claims']",
  SHOP_NAVIGATOR: "//button[@data-testid='nav-choices']",
  PROFILE_NAVIGATOR: "//button[@data-testid='nav-me']"
};

class NavigationBar extends page {
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
