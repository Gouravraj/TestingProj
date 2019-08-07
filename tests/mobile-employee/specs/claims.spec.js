import {
  isNavigationBarVisible,
  navigateToClaimsScreen
} from '../actions/navigator.action';
import * as claims from '../actions/claims.action';
import { loginAs } from '../actions/login.action';
import { CLAIMS as SELECTOR } from '../selectors';
import {
  validCredentials,
  validCredentials2,
  wellnessValidCredentials
} from '../../data/login.data';

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

  it('able to verify all test cases', () => {
    expect(claims.loadedImage()).toBeTruthy();
    claims.clickPendingClaims();
    expect(claims.reimbursedAmount()).toBeFalsy();
    expect(claims.getSettlementDate()).toBeFalsy();
  });

  // it('able to verify the reimbursed amount is not displayed', () => {
  //   claims.clickPendingClaims();
  //   expect(claims.reimbursedAmount()).toBeFalsy();
  // });
  /** commented out until intermittent issue is identified
  it('Specific expectation: label displayed below the image is "Outpatient claim"', () => {
    expect(claims.outpatientClaimLables()).toEqual('Outpatient claim');
  });
*/
  // it('able to verify the settlement date is not displayed', () => {
  //    expect(claims.getSettlementDate()).toBeFalsy();
  //  });
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
  it('able to verify all cases', () => {
    expect(claims.loadedImage()).toBeTruthy();
    claims.clickSpecialistConsultationPendingClaims();
    expect(claims.reimbursedAmount()).toBeFalsy();
    expect(claims.getSettlementDate()).toBeFalsy();
  });

  //  it('able to verify the reimbursed amount is not displayed', () => {
  //    claims.clickSpecialistConsultationPendingClaims();
  //   expect(claims.reimbursedAmount()).toBeFalsy();
  // });
  /** commented out until intermittent issue is identified
  it('Specific expectation: label displayed below the image is "Outpatient claim"', () => {
    expect(claims.outpatientClaimLables()).toEqual('Outpatient claim');
  });
*/
  //  it('able to verify the settlement date is not displayed', () => {
  //    expect(claims.getSettlementDate()).toBeFalsy();
  //  });

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
  it('able to verify all test cases', () => {
    expect(claims.loadedImage()).toBeTruthy();
    claims.clickDentalCarePendingClaims();
    expect(claims.reimbursedAmount()).toBeFalsy();
    expect(claims.getSettlementDate()).toBeFalsy();
  });

  // it('General Expectation: able to verify the reimbursed amount is not displayed', () => {
  //   claims.clickDentalCarePendingClaims();
  //   expect(claims.reimbursedAmount()).toBeFalsy();
  // });
  /** commented out until intermittent issue is identified
  it('Specific expectation: label displayed below the image is "wellness claim"', () => {
    expect(claims.outpatientClaimLables()).toEqual('Wellness claim');
  });*/

  // it('General Expectation: able to verify the settlement date is not displayed', () => {
  //   expect(claims.getSettlementDate()).toBeFalsy();
  // });
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

  it('able to verify all test cases', () => {
    claims.checkAndClickApprovedClaimsForDentalCare();
    expect(claims.verifyLoadedImageCheck()).toBeTruthy();
    expect(claims.approvedClaimLables()).toEqual('Wellness claim');
    expect(claims.reimbursedAmount()).toBeTruthy();
    expect(claims.getSettlementDate()).toBeTruthy();
    expect(claims.receiptImages()).toBeTruthy();
  });

  /**  it('Specific expectation: label displayed below the image is "wellness claim"', () => {
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
  it('able to verify all test cases', () => {
    claims.checkAndClickApprovedClaimsForGeneralMedicalPractitioner();
    expect(claims.verifyLoadedImageCheck()).toBeTruthy();
    expect(claims.approvedClaimLables()).toEqual('Outpatient claim');
    expect(claims.reimbursedAmount()).toBeTruthy();
    expect(claims.getSettlementDate()).toBeTruthy();
    expect(claims.receiptImages()).toBeTruthy();
  });

  /**  it('Specific expectation: label displayed below the image is "Outpatient claim"', () => {
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
  it('able to verify all test cases', () => {
    claims.checkAndClickApprovedClaimsForSpecialistConsultation();
    expect(claims.verifyLoadedImageCheck()).toBeTruthy();
    expect(claims.approvedClaimLables()).toEqual('Outpatient claim');
    expect(claims.reimbursedAmount()).toBeTruthy();
    expect(claims.getSettlementDate()).toBeTruthy();
    expect(claims.receiptImages()).toBeTruthy();
  });

  /**  it('Specific expectation: label displayed below the image is "Outpatient claim"', () => {
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

  it('able to verify all test cases', () => {
    claims.checkAndClickRejectedClaimsForSpecialistConsultation();
    expect(claims.verifyRejectedLoadedImageCheck()).toBeTruthy();
    expect(claims.rejectedClaimLables()).toEqual('Outpatient claim');
    expect(claims.reimbursedAmount()).toBeFalsy();
    expect(claims.getSettlementDate()).toBeTruthy();
    expect(claims.receiptImages()).toBeTruthy();
  });
  /** 
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
  it('able to verify all test cases', () => {
    claims.checkAndClickRejectedClaimsForGeneralMedicalPractitioner();
    expect(claims.verifyRejectedLoadedImageCheck()).toBeTruthy();
    expect(claims.rejectedClaimLables()).toEqual('Outpatient claim');
    expect(claims.reimbursedAmount()).toBeFalsy();
    expect(claims.getSettlementDate()).toBeTruthy();
    expect(claims.receiptImages()).toBeTruthy();
  });

  /**  it('Specific expectation: label displayed below the image is "Outpatient claim"', () => {
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
  it('able to verify all test cases', () => {
    claims.checkAndClickRejectedClaimsForDentalCare();
    expect(claims.verifyRejectedLoadedImageCheck()).toBeTruthy();
    expect(claims.rejectedClaimLables()).toEqual('Wellness claim');
    expect(claims.reimbursedAmount()).toBeFalsy();
    expect(claims.getSettlementDate()).toBeTruthy();
    expect(claims.receiptImages()).toBeTruthy();
  });
  /** 
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

describe('Employee should be', () => {
  beforeAll(() => {
    loginAs(wellnessValidCredentials);
    isNavigationBarVisible();
    navigateToClaimsScreen();

    $(SELECTOR.buttonMakeAClaim).click();
  });

  it('able to submit a wellness claim for employee', () => {
    expect(claims.makeWellnessClaim()).toBeTruthy();
  });

  it('able to submitted wellness claim and get unique claims number', () => {
    expect(claims.claimSubmittedIsDisplay()).toBeTruthy();
    expect(claims.uniqueClaimNumberIsDisplay()).toBeTruthy();
  });

  afterAll(() => {
    driver.reset();
  });
});
