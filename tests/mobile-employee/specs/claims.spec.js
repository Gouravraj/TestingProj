import {
  isNavigationBarVisible,
  navigateToClaimsScreen
} from '../actions/navigator.action';
import * as claims from '../actions/claims.action';
import { loginAs } from '../actions/login.action';
import { CLAIMS as SELECTOR } from '../selectors';
import { validCredentials } from '../../data/login.data';

describe('Employee should be', () => {
  beforeEach(() => {
    loginAs(validCredentials);
    isNavigationBarVisible();
    navigateToClaimsScreen();

    $(SELECTOR.buttonMakeAClaim).click();
  });

  it('able to submit a claim for self', () => {
    expect(claims.makeClaim()).toBeTruthy();
  });

  // it('able to submit a claim for self with referral document', () => {
  //   expect(claims.makeClaimWithRef()).toBeTruthy();
  // });
  //
  // it('able to submit a claim for a dependent', () => {
  //   expect(claims.makeClaimWithDep()).toBeTruthy();
  // });
  //
  // it('able to submit a claim for self with updating contact number', () => {
  //   expect(claims.makeClaimWithContact()).toBeTruthy();
  // });

  afterEach(() => {
    driver.reset();
  });
});

describe('Employee pending claims should be', () => {
  beforeEach(() => {
    loginAs(validCredentials);
    //driver.pause(30000);
    isNavigationBarVisible();
    navigateToClaimsScreen();
    $(SELECTOR.buttonMakeAClaim).click();
    claims.makeClaim();
  });

  it('able to verify the images loaded has a clock', () => {
    claims.viewSubmittedClaims();
    expect(claims.loadedImage()).toBeTruthy();
  });

  it('able to verify the reimbursed amount is not displayed', () => {
    claims.viewSubmittedClaims();
    claims.clickPendingClaims();
    expect(claims.reimbursedAmount()).toBeFalsy();
  });

  it('able to verify the settlement date is not displayed', () => {
    claims.viewSubmittedClaims();
    claims.clickPendingClaims();
    expect(claims.getSettlementDate()).toBeFalsy();
  });

  afterEach(() => {
    driver.reset();
  });
});
