import NavigationBar from '../screenobjects/navigationbar.screen';

export function navigateToHealthScreen() {
  NavigationBar.healthNavigator().click();
}

export function navigateToClaimsScreen() {
  NavigationBar.claimsNavigator().click();
}

export function navigateToShopScreen() {
  NavigationBar.shopNavigator().click();
}

export function navigateToProfileScreen() {
  NavigationBar.profileNavigator().click();
}

export function isNavigationBarVisible() {
  return NavigationBar.waitForIsShown(true);
}
