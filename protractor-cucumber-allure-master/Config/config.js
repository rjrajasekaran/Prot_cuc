var sheetNumber = 0;
var path = require('path');
var fileNamePath = path.resolve('../Values.xls');
var XLS;
if(typeof require !== 'undefined') XLS = require('xlsjs');
var workbook = XLS.readFile(fileNamePath);
var sheetNamelist = workbook.SheetNames;

exports.config = {
	
	
	seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://qa-apps.availity.com/availity/web/public.elegant.login',
	
    capabilities: {
		
        'browserName': (process.env.TEST_BROWSER_NAME || workbook.Sheets[sheetNamelist[sheetNumber]]['N2'].v)
        , 'version': (process.env.TEST_BROWSER_VERSION || 'ANY')
		, 'shardTestFiles': false
    , },
    onPrepare: function () {
        browser.ignoreSynchronization = true;
    },

    framework: 'custom'
    , frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
    '../Features/Availity_Login.feature'
  ]
    , exclude: '../Features/database.feature'
    , cucumberOpts: {

        monochrome: true
        , strict: true
        , plugin: ["pretty"]
        , require: ['../StepDefinitions/*.js', '../Support/*.js']
        , tags: '@AllureScenario,@Regression,@ProtractorScenario,~@DatabaseTest' // @DatabaseTest scenario can be included when the username & password of DB have been configured in Support/database.js

    }


};


