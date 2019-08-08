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

describe('Claims Submission:', () => {
  beforeEach(() => {
    loginAs(validCredentials); // use validCredentials2
    isNavigationBarVisible();
    navigateToClaimsScreen();

    $(SELECTOR.buttonMakeAClaim).click();
  });

  /*
   * Add a script after each claim submission
   * After claims submission, click the "Make Another Claim" button to start the next claim submission
   */

  it('submit an outpatient claim for employee without referral letter', () => {
    // Employee: General Medical Practitioner / Abdominal Pain
    expect(claims.makeClaim()).toBeTruthy();
  });

  it('submit an outpatient claim for employee with referral letter', () => {
    // Employee: Specialist Consultation / Abdominal Pain
    expect(claims.makeClaimWithRef()).toBeTruthy();
  });

  // section for story #29
  // it('submit a wellness claim for employee', () => { // Employee: Dental Care / Back Pain
  // });

  it('submit an outpatient claim for dependant without referral letter', () => {
    // delete this and all related scripts
    expect(claims.makeClaimWithDep()).toBeTruthy();
  });

  // section for story #55
  // it('submit an outpatient claim for dependant without referral letter', () => { // Dependant: General Medical Practitioner / Abdominal Pain
  // });

  // section for story #56
  // it('submit an outpatient claim for dependant with referral letter', () => { // Dependant: Specialist Consultation / Abdominal Pain
  // });

  // section for story #57
  // it('submit a wellness claim for dependant', () => { // Dependant: Dental Care / Back Pain
  // });

  it('able to submit a claim for self with updating contact number', () => {
    // delete this and all related scripts
    expect(claims.makeClaimWithContact()).toBeTruthy();
  });

  afterEach(() => {
    driver.reset();
  });
});

describe('Employee should be', () => {
  // move this under section #29
  beforeAll(() => {
    loginAs(wellnessValidCredentials);
    isNavigationBarVisible();
    navigateToClaimsScreen();

    $(SELECTOR.buttonMakeAClaim).click();
  });

  it('able to submitted wellness claim and get unique claims number', () => {
    expect(claims.makeWellnessClaim()).toBeTruthy();
    expect(claims.claimSubmittedIsDisplay()).toBeTruthy(); // add this script to all claims submission
    expect(claims.uniqueClaimNumberIsDisplay()).toBeTruthy(); // add this script to all claims submission
  });

  afterAll(() => {
    driver.reset();
  });
});

describe('Verification of claims submitted:', () => {
  beforeAll(() => {
    loginAs(validCredentials); // use claimsStatus
    isNavigationBarVisible();
    navigateToClaimsScreen();
  });

  it('pending outpatient claim for employee without referral letter', () => {
    expect(claims.loadedImage()).toBeTruthy();
    claims.clickPendingClaims();
    expect(claims.reimbursedAmount()).toBeFalsy(); // delete this and all related scripts
    expect(claims.getSettlementDate()).toBeFalsy(); // delete this and all related scripts
  });

  // it('pending outpatient claim for employee with referral letter', () => {
  // });

  // it('pending wellness claim for employee', () => {
  // });

  // it('approved outpatient claim for employee without referral letter', () => {
  // });

  // it('approved outpatient claim for employee with referral letter', () => {
  // });

  // it('approved wellness claim for employee', () => {
  // });

  // it('rejected outpatient claim for employee without referral letter', () => {
  // });

  // it('rejected outpatient claim for employee with referral letter', () => {
  // });

  // it('rejected wellness claim for employee', () => {
  // });

  // it('pending outpatient claim for dependant without referral letter', () => {
  // });

  // it('pending outpatient claim for dependant with referral letter', () => {
  // });

  // it('pending wellness claim for dependant', () => {
  // });

  // it('approved outpatient claim for dependant without referral letter', () => {
  // });

  // it('approved outpatient claim for dependant with referral letter', () => {
  // });

  // it('approved wellness claim for dependant', () => {
  // });

  // it('rejected outpatient claim for dependant without referral letter', () => {
  // });

  // it('rejected outpatient claim for dependant with referral letter', () => {
  // });

  // it('rejected wellness claim for dependant', () => {
  // });

  afterAll(() => {
    claims.clickBackButton();
  });
});

describe('Specialist Consultation-Employee pending claims should be', () => {
  // move to "pending outpatient claim for employee with referral letter"
  it('able to verify all cases', () => {
    expect(claims.loadedImage()).toBeTruthy();
    claims.clickSpecialistConsultationPendingClaims();
    expect(claims.reimbursedAmount()).toBeFalsy(); // delete this and all related scripts
    expect(claims.getSettlementDate()).toBeFalsy(); // delete this and all related scripts
  });

  afterAll(() => {
    claims.clickBackButton();
  });
});

describe('Dental Care - Employee pending claims should be', () => {
  // move to "pending wellness claim for employee"
  it('able to verify all test cases', () => {
    expect(claims.loadedImage()).toBeTruthy();
    claims.clickDentalCarePendingClaims();
    expect(claims.reimbursedAmount()).toBeFalsy(); // delete this and all related scripts
    expect(claims.getSettlementDate()).toBeFalsy(); // delete this and all related scripts
  });

  afterAll(() => {
    claims.clickBackButton();
  });
});

describe('Wellness claim without referral letter - Employee approved claims should be', () => {
  // move to "approved wellness claim for employee"
  beforeAll(() => {
    driver.reset();
    loginAs(validCredentials2);
    isNavigationBarVisible();
    navigateToClaimsScreen();
  });

  it('able to verify all test cases', () => {
    claims.checkAndClickApprovedClaimsForDentalCare();
    expect(claims.verifyLoadedImageCheck()).toBeTruthy();
    expect(claims.approvedClaimLables()).toEqual('Wellness claim'); // delete this and all related scripts
    expect(claims.reimbursedAmount()).toBeTruthy();
    expect(claims.getSettlementDate()).toBeTruthy();
    expect(claims.receiptImages()).toBeTruthy(); // delete this and all related scripts
  });

  afterAll(() => {
    claims.clickBackButton();
    claims.startFromIntial();
  });
});

describe('Outpatient claim without referral letter - Employee approved claims should be', () => {
  // move to "approved outpatient claim for employee without referral letter"
  it('able to verify all test cases', () => {
    claims.checkAndClickApprovedClaimsForGeneralMedicalPractitioner();
    expect(claims.verifyLoadedImageCheck()).toBeTruthy();
    expect(claims.approvedClaimLables()).toEqual('Outpatient claim'); // delete this and all related scripts
    expect(claims.reimbursedAmount()).toBeTruthy();
    expect(claims.getSettlementDate()).toBeTruthy();
    expect(claims.receiptImages()).toBeTruthy(); // delete this and all related scripts
  });

  afterAll(() => {
    claims.clickBackButton();
    claims.startFromIntial();
  });
});

describe('Outpatient claim with referral letter - Employee approved claims should be', () => {
  // move to "approved outpatient claim for employee with referral letter"
  it('able to verify all test cases', () => {
    claims.checkAndClickApprovedClaimsForSpecialistConsultation();
    expect(claims.verifyLoadedImageCheck()).toBeTruthy();
    expect(claims.approvedClaimLables()).toEqual('Outpatient claim'); // delete this and all related scripts
    expect(claims.reimbursedAmount()).toBeTruthy();
    expect(claims.getSettlementDate()).toBeTruthy();
    expect(claims.receiptImages()).toBeTruthy(); // delete this and all related scripts
  });

  afterAll(() => {
    claims.clickBackButton();
    claims.startFromIntial();
  });
});

describe('Outpatient claim with referral letter - Employee rejected claims should be', () => {
  // move to "rejected outpatient claim for employee with referral letter"
  beforeAll(() => {
    driver.reset();
    loginAs(validCredentials2);
    isNavigationBarVisible();
    navigateToClaimsScreen();
  });

  it('able to verify all test cases', () => {
    claims.checkAndClickRejectedClaimsForSpecialistConsultation();
    expect(claims.verifyRejectedLoadedImageCheck()).toBeTruthy();
    expect(claims.rejectedClaimLables()).toEqual('Outpatient claim'); // delete this and all related scripts
    expect(claims.reimbursedAmount()).toBeFalsy(); // delete this and all related scripts
    expect(claims.getSettlementDate()).toBeTruthy();
    expect(claims.receiptImages()).toBeTruthy(); // delete this and all related scripts
  });

  afterAll(() => {
    claims.clickBackButton();
    claims.startFromIntial();
  });
});

describe('Outpatient claim without referral letter - Employee rejected claims should be', () => {
  // move to "rejected outpatient claim for employee without referral letter"
  it('able to verify all test cases', () => {
    claims.checkAndClickRejectedClaimsForGeneralMedicalPractitioner();
    expect(claims.verifyRejectedLoadedImageCheck()).toBeTruthy();
    expect(claims.rejectedClaimLables()).toEqual('Outpatient claim'); // delete this and all related scripts
    expect(claims.reimbursedAmount()).toBeFalsy(); // delete this and all related scripts
    expect(claims.getSettlementDate()).toBeTruthy();
    expect(claims.receiptImages()).toBeTruthy(); // delete this and all related scripts
  });

  afterAll(() => {
    claims.clickBackButton();
    claims.startFromIntial();
  });
});

describe('Wellness claim without referral letter - Employee rejected claims should be', () => {
  // move to "rejected wellness claim for employee"
  it('able to verify all test cases', () => {
    claims.checkAndClickRejectedClaimsForDentalCare();
    expect(claims.verifyRejectedLoadedImageCheck()).toBeTruthy();
    expect(claims.rejectedClaimLables()).toEqual('Wellness claim'); // delete this and all related scripts
    expect(claims.reimbursedAmount()).toBeFalsy(); // delete this and all related scripts
    expect(claims.getSettlementDate()).toBeTruthy();
    expect(claims.receiptImages()).toBeTruthy(); // delete this and all related scripts
  });

  afterAll(() => {
    claims.clickBackButton();
    claims.startFromIntial();
  });
});

describe('Employee should be', () => {
  // delete this section, it is a duplicate of the wellness claim submission stated above
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
