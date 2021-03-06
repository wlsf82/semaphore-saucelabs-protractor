var SpecReporter = require('./node_modules/jasmine-spec-reporter');

exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',

  // Spec patterns are relative to the location of this config.
  specs: [
    'spec/*_spec.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'args': ['--disable-extensions']},

    // Saucelabs credentials
    username: 'talkabouttest',
    accessKey: '397a4689-88ed-43c7-b57d-ce1332ca92a1',

    // Test suite name.
    'name': 'SemaphoreCI, SauceLabs and Protractor test suite'
  },

  onPrepare: function() {
    // Add better test report on console.
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));
    // Maximize window before start testing.
    browser.driver.manage().window().maximize();
  },

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 999999
  }
};
