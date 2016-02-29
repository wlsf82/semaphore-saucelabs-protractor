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
    accessKey: '397a4689-88ed-43c7-b57d-ce1332ca92a1'
  },

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 10000
  }
};
