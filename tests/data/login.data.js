const validCredentials = {
  companyName: 'twclient3',
  emailAddress: 'test3@test.com',
  password: 'P@ssw0rd'
};

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
  invalidCredentials,
  hrCredentials,
  csCredentials,
  forgotPwdEmail
};
