import login from '../actions/login.action';
import * as claims from '../actions/claims.action';
import loginData from '../data/login.data';

describe('Employee should be', () => {
  beforeEach(() => {
    login.loginAs(loginData.validCredentials);
  });

  it('able to submit a claim for self', () => {
    expect(claims.makeClaim()).toBeTruthy();
  });

  it('able to submit a claim for self with referral document', () => {
    // expect(claims.makeClaimWithRef()).toBeTruthy();
  });

  it('able to submit a claim for a dependent', () => {
    // expect(claims.makeClaimWithDep()).toBeTruthy();
  });

  it('able to submit a claim for self with updating contact number', () => {
    // expect(claims.makeClaimWithContact()).toBeTruthy();
  });

  afterEach(() => {
    driver.reset();
  });
});
