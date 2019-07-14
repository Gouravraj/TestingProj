import NavigationBar from '../screenobjects/navigationbar.screen';

function navigateToHealthScreen() {
  NavigationBar.healthNavigator().click();
}
function navigateToClaimsScreen() {
  NavigationBar.claimsNavigator().click();
}
function navigateToShopScreen() {
  NavigationBar.shopNavigator().click();
}
function navigateToProfileScreen() {
  NavigationBar.profileNavigator().click();
}
function isNavigationBarVisible() {
  return NavigationBar.waitForIsShown(true);
}

module.exports = {
  navigateToHealthScreen,
  navigateToClaimsScreen,
  navigateToShopScreen,
  navigateToProfileScreen,
  isNavigationBarVisible
};
