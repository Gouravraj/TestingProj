import NavigationBar from '../pageObjects/navigationbar.page';

export function navigateToHealthPage() {
  NavigationBar.healthNavigator().click();
}

export function navigateToClaimsPage() {
  NavigationBar.claimsNavigator().click();
}

export function navigateToShopPage() {
  NavigationBar.shopNavigator().click();
}

export function navigateToProfilePage() {
  NavigationBar.profileNavigator().click();
}

export function isNavigationBarVisible() {
  return NavigationBar.waitForIsShown(true);
}
