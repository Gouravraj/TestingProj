import login from '../actions/login.action';
import claims from '../actions/claims.action';
import loginData from '../data/login.data';

describe('Employee should be', () => {
  beforeEach(() => {
    login.loginAs(loginData.validCredentials);
  });

  afterEach(() => {
    driver.reset();
  });

  it('able to submit a claim for self', () => {
    claims.makeClaim();
    // - assert `claim id` is generated after claim submit
  });

  // it('able to submit a claim for self with referral document', () => {
  //   // NOTE: assert
  //   // - assert `claim id` is generated after claim submit
  // });
  //
  // it('able to submit a claim for a dependent', () => {
  //   // NOTE: assert
  //   // - assert `claim id` is generated after claim submit
  // });
  //
  // it('able to submit a claim for self with updating contact number', () => {
  //   // NOTE: assert
  //   // - assert `claim id` is generated after claim submit
  // });
});
