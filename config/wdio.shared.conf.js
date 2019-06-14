exports.config = {
  runner: 'local',
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000
  },
  sync: true,
  logLevel: 'debug',
  deprecationWarnings: true,
  bail: 1,
  waitforTimeout: 10000,
  reporters: ['spec'],

  services: ['appium'],
  appium: {
    args: {
      // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
      debugLogSpacing: true,
      platformName: 'iOS'
    }
  },

  port: 4723,

  suites: {
    login: ['./tests/specs/login.spec.js'],
    claims: ['./tests/specs/claims.spec.js']
  },

  beforeSession: (/* config, capabilities, specs */) => {
    require('@babel/register');
  }
};
