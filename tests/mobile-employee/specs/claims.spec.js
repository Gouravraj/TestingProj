import {
  isNavigationBarVisible,
  navigateToClaimsScreen
} from '../actions/navigator.action';
import * as claims from '../actions/claims.action';
import { loginAs } from '../actions/login.action';
import { CLAIMS as SELECTOR } from '../selectors';
import { validCredentials, validCredentials2 } from '../../data/login.data';

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
  beforeAll(() => {
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
  /** commented out until intermittent issue is identified
  it('Specific expectation: label displayed below the image is "Outpatient claim"', () => {
    expect(claims.outpatientClaimLables()).toEqual('Outpatient claim');
  });
*/
  it('able to verify the settlement date is not displayed', () => {
    expect(claims.getSettlementDate()).toBeFalsy();
  });
  /** commented out until intermittent issue is identified
  it('Specific expectation: only the receipt image is displayed', () => {
    expect(claims.receiptImages()).toBeTruthy();
  });

  it('Specific expectation: no referral letter should be displayed', () => {
    expect(claims.referralLetters()).toBeFalsy();
  });
*/
  afterAll(() => {
    claims.clickBackButton();
  });
});

describe('Specialist Consultation-Employee pending claims should be', () => {
  it('able to verify the images loaded has a clock', () => {
    expect(claims.loadedImage()).toBeTruthy();
  });

  it('able to verify the reimbursed amount is not displayed', () => {
    claims.clickSpecialistConsultationPendingClaims();
    expect(claims.reimbursedAmount()).toBeFalsy();
  });
  /** commented out until intermittent issue is identified
  it('Specific expectation: label displayed below the image is "Outpatient claim"', () => {
    expect(claims.outpatientClaimLables()).toEqual('Outpatient claim');
  });
*/
  it('able to verify the settlement date is not displayed', () => {
    expect(claims.getSettlementDate()).toBeFalsy();
  });

  /** commented out until intermittent issue is identified
  it('Specific expectation: only the receipt image is displayed', () => {
    expect(claims.receiptImages()).toBeTruthy();
  });

  it('Specific expectation: referral letter should be displayed', () => {
    expect(claims.referralLetters()).toBeTruthy();
  });
*/
  afterAll(() => {
    claims.clickBackButton();
  });
});

describe('Dental Care - Employee pending claims should be', () => {
  it('General Expectation: able to verify the images loaded has a clock', () => {
    expect(claims.loadedImage()).toBeTruthy();
  });

  it('General Expectation: able to verify the reimbursed amount is not displayed', () => {
    claims.clickDentalCarePendingClaims();
    expect(claims.reimbursedAmount()).toBeFalsy();
  });
  /** commented out until intermittent issue is identified
  it('Specific expectation: label displayed below the image is "wellness claim"', () => {
    expect(claims.outpatientClaimLables()).toEqual('Wellness claim');
  });*/

  it('General Expectation: able to verify the settlement date is not displayed', () => {
    expect(claims.getSettlementDate()).toBeFalsy();
  });
  /** commented out until intermittent issue is identified
  it('Specific expectation: only the receipt image is displayed', () => {
    expect(claims.receiptImages()).toBeTruthy();
  });
  /** commented out until intermittent issue is identified
  it('Specific expectation: no referral letter should be displayed', () => {
    expect(claims.referralLetters()).toBeFalsy();
  });
*/
  afterAll(() => {
    claims.clickBackButton();
  });
});

describe('Wellness claim without referral letter - Employee approved claims should be', () => {
  beforeAll(() => {
    driver.reset();
    loginAs(validCredentials2);
    //driver.pause(30000);
    isNavigationBarVisible();
    navigateToClaimsScreen();
  });

  it('General Expectation: able to verify the images loaded has a clock', () => {
    claims.checkAndClickApprovedClaimsForDentalCare();
    expect(claims.verifyLoadedImageCheck()).toBeTruthy();
  });

  it('Specific expectation: label displayed below the image is "wellness claim"', () => {
    expect(claims.approvedClaimLables()).toEqual('Wellness claim');
  });

  it('General Expectation: able to verify the reimbursed amount is not displayed', () => {
    expect(claims.reimbursedAmount()).toBeTruthy();
  });

  it('General Expectation: able to verify the settlement date is displayed', () => {
    expect(claims.getSettlementDate()).toBeTruthy();
  });

  it('Specific expectation: only the receipt image is displayed', () => {
    expect(claims.receiptImages()).toBeTruthy();
  });
  /** commented out until intermittent issue is identified
  it('Specific expectation: no referral letter should be displayed', () => {
    expect(claims.referralLetters()).toBeFalsy();
  });
*/
  afterAll(() => {
    claims.clickBackButton();
    claims.startFromIntial();
  });
});

describe('Outpatient claim without referral letter - Employee approved claims should be', () => {
  it('General Expectation: able to verify the images loaded has a clock', () => {
    claims.checkAndClickApprovedClaimsForGeneralMedicalPractitioner();
    expect(claims.verifyLoadedImageCheck()).toBeTruthy();
  });

  it('Specific expectation: label displayed below the image is "Outpatient claim"', () => {
    expect(claims.approvedClaimLables()).toEqual('Outpatient claim');
  });

  it('General Expectation: able to verify the reimbursed amount is not displayed', () => {
    expect(claims.reimbursedAmount()).toBeTruthy();
  });

  it('General Expectation: able to verify the settlement date is displayed', () => {
    expect(claims.getSettlementDate()).toBeTruthy();
  });

  it('Specific expectation: only the receipt image is displayed', () => {
    expect(claims.receiptImages()).toBeTruthy();
  });
  /** commented out until intermittent issue is identified
  it('Specific expectation: no referral letter should be displayed', () => {
    expect(claims.referralLetters()).toBeFalsy();
  });
*/
  afterAll(() => {
    claims.clickBackButton();
    claims.startFromIntial();
  });
});

describe('Outpatient claim with referral letter - Employee approved claims should be', () => {
  it('General Expectation: able to verify the images loaded has a clock', () => {
    claims.checkAndClickApprovedClaimsForSpecialistConsultation();
    expect(claims.verifyLoadedImageCheck()).toBeTruthy();
  });

  it('Specific expectation: label displayed below the image is "Outpatient claim"', () => {
    expect(claims.approvedClaimLables()).toEqual('Outpatient claim');
  });

  it('General Expectation: able to verify the reimbursed amount is not displayed', () => {
    expect(claims.reimbursedAmount()).toBeTruthy();
  });

  it('General Expectation: able to verify the settlement date is displayed', () => {
    expect(claims.getSettlementDate()).toBeTruthy();
  });

  it('Specific expectation: only the receipt image is displayed', () => {
    expect(claims.receiptImages()).toBeTruthy();
  });
  /** commented out until intermittent issue is identified
  it('Specific expectation: referral letter should be displayed', () => {
    expect(claims.referralLetters()).toBeTruthy();
  });
*/
  afterAll(() => {
    claims.clickBackButton();
    claims.startFromIntial();
  });
});

describe('Outpatient claim with referral letter - Employee rejected claims should be', () => {
  beforeAll(() => {
    driver.reset();
    loginAs(validCredentials2);
    //driver.pause(30000);
    isNavigationBarVisible();
    navigateToClaimsScreen();
  });

  it('General Expectation: able to verify the images loaded has a clock', () => {
    claims.checkAndClickRejectedClaimsForSpecialistConsultation();
    expect(claims.verifyRejectedLoadedImageCheck()).toBeTruthy();
  });

  it('Specific expectation: label displayed below the image is "Outpatient claim"', () => {
    expect(claims.rejectedClaimLables()).toEqual('Outpatient claim');
  });

  it('General Expectation: able to verify the reimbursed amount is not displayed', () => {
    expect(claims.reimbursedAmount()).toBeFalsy();
  });

  it('General Expectation: able to verify the settlement date is displayed', () => {
    expect(claims.getSettlementDate()).toBeTruthy();
  });

  it('Specific expectation: only the receipt image is displayed', () => {
    expect(claims.receiptImages()).toBeTruthy();
  });
  /** commented out until intermittent issue is identified
  it('Specific expectation: referral letter should be displayed', () => {
    expect(claims.referralLetters()).toBeTruthy();
  });
*/
  afterAll(() => {
    claims.clickBackButton();
    claims.startFromIntial();
  });
});

describe('Outpatient claim without referral letter - Employee rejected claims should be', () => {
  it('General Expectation: able to verify the images loaded has a clock', () => {
    claims.checkAndClickRejectedClaimsForGeneralMedicalPractitioner();
    expect(claims.verifyRejectedLoadedImageCheck()).toBeTruthy();
  });

  it('Specific expectation: label displayed below the image is "Outpatient claim"', () => {
    expect(claims.rejectedClaimLables()).toEqual('Outpatient claim');
  });

  it('General Expectation: able to verify the reimbursed amount is not displayed', () => {
    expect(claims.reimbursedAmount()).toBeFalsy();
  });

  it('General Expectation: able to verify the settlement date is displayed', () => {
    expect(claims.getSettlementDate()).toBeTruthy();
  });

  it('Specific expectation: only the receipt image is displayed', () => {
    expect(claims.receiptImages()).toBeTruthy();
  });
  /** commented out until intermittent issue is identified
  it('Specific expectation: no referral letter should be displayed', () => {
    expect(claims.referralLetters()).toBeFalsy();
  });
*/
  afterAll(() => {
    claims.clickBackButton();
    claims.startFromIntial();
  });
});

describe('Wellness claim without referral letter - Employee rejected claims should be', () => {
  it('General Expectation: able to verify the images loaded has a clock', () => {
    claims.checkAndClickRejectedClaimsForDentalCare();
    expect(claims.verifyRejectedLoadedImageCheck()).toBeTruthy();
  });

  it('Specific expectation: label displayed below the image is "wellness claim"', () => {
    expect(claims.rejectedClaimLables()).toEqual('Wellness claim');
  });

  it('General Expectation: able to verify the reimbursed amount is not displayed', () => {
    expect(claims.reimbursedAmount()).toBeFalsy();
  });

  it('General Expectation: able to verify the settlement date is displayed', () => {
    expect(claims.getSettlementDate()).toBeTruthy();
  });

  it('Specific expectation: only the receipt image is displayed', () => {
    expect(claims.receiptImages()).toBeTruthy();
  });
  /** commented out until intermittent issue is identified
  it('Specific expectation: no referral letter should be displayed', () => {
    expect(claims.referralLetters()).toBeFalsy();
  });
*/
  afterAll(() => {
    claims.clickBackButton();
    claims.startFromIntial();
  });
});
