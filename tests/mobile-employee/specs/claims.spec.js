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

  it('able to submit a claim for self with referral document', () => {
    expect(claims.makeClaimWithRef()).toBeTruthy();
  });

  it('able to submit a claim for a dependent', () => {
    expect(claims.makeClaimWithDep()).toBeTruthy();
  });

  it('able to submit a claim for self with updating contact number', () => {
    expect(claims.makeClaimWithContact()).toBeTruthy();
  });

  afterEach(() => {
    driver.reset();
  });
});

describe('General Medical Practitioner-Employee pending claims should be', () => {
  beforeEach(() => {
    loginAs(validCredentials);
    //driver.pause(30000);
    isNavigationBarVisible();
    navigateToClaimsScreen();
  });

  it('able to verify the images loaded has a clock', () => {
    expect(claims.loadedImage()).toBeTruthy();
  });

  it('able to verify the reimbursed amount is not displayed', () => {
    claims.clickPendingClaims();
    expect(claims.reimbursedAmount()).toBeFalsy();
  });

  it('able to verify the settlement date is not displayed', () => {
    claims.clickPendingClaims();
    expect(claims.getSettlementDate()).toBeFalsy();
  });

  it('Specific expectation: only the receipt image is displayed', () => {
    claims.clickPendingClaims();
    expect(claims.receiptImages()).toBeTruthy();
  });

  it('Specific expectation: no referral letter should be displayed', () => {
    claims.clickPendingClaims();
    expect(claims.referralLetters()).toBeFalsy();
  });

  it('Specific expectation: label displayed below the image is "Outpatient claim"', () => {
    claims.clickPendingClaims();
    expect(claims.outpatientClaimLables()).toEqual('Outpatient claim');
  });

  afterEach(() => {
    driver.reset();
  });
});

describe('Specialist Consultation-Employee pending claims should be', () => {
  beforeEach(() => {
    loginAs(validCredentials);
    //driver.pause(30000);
    isNavigationBarVisible();
    navigateToClaimsScreen();
  });

  it('able to verify the images loaded has a clock', () => {
    expect(claims.loadedImage()).toBeTruthy();
  });

  it('able to verify the reimbursed amount is not displayed', () => {
    claims.clickSpecialistConsultationPendingClaims();
    expect(claims.reimbursedAmount()).toBeFalsy();
  });

  it('able to verify the settlement date is not displayed', () => {
    claims.clickSpecialistConsultationPendingClaims();
    expect(claims.getSettlementDate()).toBeFalsy();
  });

  it('Specific expectation: only the receipt image is displayed', () => {
    claims.clickSpecialistConsultationPendingClaims();
    expect(claims.receiptImages()).toBeTruthy();
  });

  it('Specific expectation: referral letter should be displayed', () => {
    claims.clickSpecialistConsultationPendingClaims();
    expect(claims.referralLetters()).toBeTruthy();
  });

  it('Specific expectation: label displayed below the image is "Outpatient claim"', () => {
    claims.clickSpecialistConsultationPendingClaims();
    expect(claims.outpatientClaimLables()).toEqual('Outpatient claim');
  });

  afterEach(() => {
    driver.reset();
  });
});

describe('Dental Care - Employee pending claims should be', () => {
  beforeEach(() => {
    loginAs(validCredentials);
    // driver.pause(30000);
    isNavigationBarVisible();
    navigateToClaimsScreen();
  });

  it('General Expectation: able to verify the images loaded has a clock', () => {
    expect(claims.loadedImage()).toBeTruthy();
  });

  it('General Expectation: able to verify the reimbursed amount is not displayed', () => {
    claims.clickDentalCarePendingClaims();
    expect(claims.reimbursedAmount()).toBeFalsy();
  });

  it('General Expectation: able to verify the settlement date is not displayed', () => {
    claims.clickDentalCarePendingClaims();
    expect(claims.getSettlementDate()).toBeFalsy();
  });

  it('Specific expectation: only the receipt image is displayed', () => {
    claims.clickDentalCarePendingClaims();
    expect(claims.receiptImages()).toBeTruthy();
  });

  it('Specific expectation: no referral letter should be displayed', () => {
    claims.clickDentalCarePendingClaims();
    expect(claims.referralLetters()).toBeFalsy();
  });

  it('Specific expectation: label displayed below the image is "wellness claim"', () => {
    claims.clickDentalCarePendingClaims();
    expect(claims.outpatientClaimLables()).toEqual('Wellness claim');
  });

  afterEach(() => {
    driver.reset();
  });
});
