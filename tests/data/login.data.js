// general test data (supports e-Health card)
const validCredentials = {
  companyName: 'twclient3',
  emailAddress: 'test3@test.com',
  password: 'P@ssw0rd'
};

// secondary test data (does not suppor e-Health card)
const validCredentials2 = {
  companyName: 'twclient3',
  emailAddress: 'cxatest2@test.com',
  password: 'P@ssw0rd'
};

// landing pages test data (Note: do not update anything on this test data)
const landingCredentials = {
  companyName: 'twclient3',
  emailAddress: 'cxadisttest001@test.com',
  password: 'P@ssw0rd'
};

// invalid test data credentials
const invalidCredentials = {
  companyName: 'twclient33',
  emailAddress: 'test3@test.com',
  password: 'P@ssw0rd'
};

const forgotPwdEmail = {
  emailAddress: 'kumar@thoughtworks.com'
};

const hrCredentials = {
  emailAddress: 'testuser1@gmail.com',
  password: 'P@$$w0rd'
};

const csCredentials = {
  emailAddress: 'testuser2@gmail.com',
  password: 'P@$$w0rd'
};

module.exports = {
  validCredentials,
  validCredentials2,
  landingCredentials,
  invalidCredentials,
  hrCredentials,
  csCredentials,
  forgotPwdEmail
};
