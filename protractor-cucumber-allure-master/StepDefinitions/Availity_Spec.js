var World = require('../Support/world');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var sheetNumber = 0;
var path = require('path');
var fileNamePath = path.resolve('../Values.xls');
var XLS;
if(typeof require !== 'undefined') XLS = require('xlsjs');
var workbook = XLS.readFile(fileNamePath);
var sheetNamelist = workbook.SheetNames;

	module.exports = function () {
	'use strict';
	this.Given(/^I am on Availity Portal Login Page$/,{timeout: 60 * 1000}, function () {
        return World.expect(browser.driver.getTitle()).to.eventually.equal('Log In to Availity®');
	});
    this.When(/^I type Username "(.*?)"$/,{timeout: 60 * 1000}, function (text) {
		$("input[name='userId']").sendKeys(text);
    });
	this.When(/^I type PassWord "(.*?)"$/,{timeout: 60 * 1000}, function (text) {
		$("input[name='password']").sendKeys(text);
    });
    this.Then(/^I click submit$/,{timeout: 60 * 1000}, function () {
		element(by.id('loginFormSubmit')).click();
		browser.sleep(5000);
    });
	this.Then(/^I close Pop-up$/,{timeout: 60 * 1000}, function () {
		var pop_up= $("button[class='btn btn-default']");
		pop_up.isPresent().then(function(result) {
		if (result) {
			$("button[class='btn btn-default']").click();
		} else {
        }
		});
    });
	this.Given(/^I am on Availity Portal Home Page$/,{timeout: 60 * 1000}, function () {	
		var logo_img=element(by.xpath('.//*/a/img[@alt="Availity Logo"]'));
		logo_img.isPresent().then(function(result) {
		if (result) {
		}
		});
	}); 
	this.When(/^I choose the region$/,{timeout: 60 * 1000}, function () {
		browser.sleep(5000);
		element(by.xpath('.//*[@id="s2id_regionSelect"]')).click();
		element(by.xpath('.//li/div[text()=' + '"' + workbook.Sheets[sheetNamelist[sheetNumber]]['A2'].v + '"' + ']')).click();
		
    });
	this.When(/^I Click on Claim Status Inquiry under Claims$/,{timeout: 60 * 1000}, function () {
		element(by.xpath('.//a[contains(text(),"Claims")]')).click();
		browser.sleep(3000);
		element(by.xpath('.//div[contains(text(),"Claim Status Inquiry")]')).click();
		browser.sleep(3000);
    });
	this.Then(/^I should see Claim Status Inquiry Page$/,{timeout: 60 * 1000}, function () {
		browser.switchTo().frame('newBodyFrame');
    });
	this.Then(/^I Select Payer and Organization$/,{timeout: 60 * 1000}, function () {
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[1]/ol/li/select')).$('[title=' + '"' + workbook.Sheets[sheetNamelist[sheetNumber]]['B2'].v + '"' + ']').click();
		browser.sleep(3000);
    });
	this.Then(/^I Enter NPI, Subscriber ID, Last Name and First Name$/,{timeout: 60 * 1000}, function () {
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[2]/ol[1]/li/ol/li[5]/input')).sendKeys(workbook.Sheets[sheetNamelist[sheetNumber]]['C2'].v);
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[2]/ol[2]/li/ol/li[3]/input')).sendKeys(workbook.Sheets[sheetNamelist[sheetNumber]]['D2'].v);
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[2]/ol[2]/li/ol/li[4]/input')).sendKeys(workbook.Sheets[sheetNamelist[sheetNumber]]['E2'].v);
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[2]/ol[2]/li/ol/li[5]/input')).sendKeys(workbook.Sheets[sheetNamelist[sheetNumber]]['F2'].v);
		browser.sleep(3000);
    });
	this.Then(/^I Enter Patient DOB$/,{timeout: 60 * 1000}, function () {
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[2]/ol[2]/li/ol/li[6]/span/span/span[1]/input')).sendKeys(workbook.Sheets[sheetNamelist[sheetNumber]]['G2'].v.substring(0,2));
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[2]/ol[2]/li/ol/li[6]/span/span/span[2]/input')).sendKeys(workbook.Sheets[sheetNamelist[sheetNumber]]['G2'].v.substring(3,5));
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[2]/ol[2]/li/ol/li[6]/span/span/span[3]/input')).sendKeys(workbook.Sheets[sheetNamelist[sheetNumber]]['G2'].v.substring(6,10));
		browser.sleep(3000);
    });
	this.Then(/^I Enter the Claim Information Date From$/,{timeout: 60 * 1000}, function () {
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[2]/ol[3]/li/ol/li[2]/span/span/span[1]/input')).sendKeys(workbook.Sheets[sheetNamelist[sheetNumber]]['K2'].v.substring(0,2));
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[2]/ol[3]/li/ol/li[2]/span/span/span[2]/input')).sendKeys(workbook.Sheets[sheetNamelist[sheetNumber]]['K2'].v.substring(3,5));
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[2]/ol[3]/li/ol/li[2]/span/span/span[3]/input')).sendKeys(workbook.Sheets[sheetNamelist[sheetNumber]]['K2'].v.substring(6,10));
		browser.sleep(3000);
    });
	this.Then(/^I Enter the Claim Information Date To$/,{timeout: 60 * 1000}, function () {
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[2]/ol[3]/li/ol/li[3]/span/span/span[1]/input')).clear();
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[2]/ol[3]/li/ol/li[3]/span/span/span[1]/input')).sendKeys(workbook.Sheets[sheetNamelist[sheetNumber]]['L2'].v.substring(0,2));
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[2]/ol[3]/li/ol/li[3]/span/span/span[2]/input')).clear();
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[2]/ol[3]/li/ol/li[3]/span/span/span[2]/input')).sendKeys(workbook.Sheets[sheetNamelist[sheetNumber]]['L2'].v.substring(3,5));
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[2]/ol[3]/li/ol/li[3]/span/span/span[3]/input')).clear();
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[2]/ol[3]/li/ol/li[3]/span/span/span[3]/input')).sendKeys(workbook.Sheets[sheetNamelist[sheetNumber]]['L2'].v.substring(6,10));
		browser.sleep(3000);
    });
	this.Then(/^I Click on Submit$/,{timeout: 60 * 1000}, function () {
		element(by.xpath('html/body/div[3]/span/form/fieldset/div[2]/ol[4]/li/div/input[1]')).click();
		browser.sleep(15000);
    });
	this.Then(/^I Verity Claim Status Inquiry Results$/,{timeout: 60 * 1000}, function () {
		expect(element(by.xpath('html/body/span/div/ol[6]/li/div/table/tbody/tr[1]/td[3]')).getText()).to.eventually.equal(workbook.Sheets[sheetNamelist[sheetNumber]]['M2'].v);
		console.log('Claim Number Verified');
		expect(element(by.xpath('//*[@id="claimStatusListView"]/tbody/tr[1]/td[2]')).getText()).to.eventually.equal(workbook.Sheets[sheetNamelist[sheetNumber]]['O2'].v);
		console.log('Status Type Verified');
		expect(element(by.xpath('//*[@id="claimStatusListView"]/tbody/tr[1]/td[6]')).getText()).to.eventually.equal(workbook.Sheets[sheetNamelist[sheetNumber]]['P2'].v);
		console.log('Bill Amound Verified');
    });
	this.Then(/^I Click on From-To Date of Service Hyper link$/,{timeout: 60 * 1000}, function () {
		element(by.xpath('html/body/span/div/ol[6]/li/div/table/tbody/tr[1]/td[1]/a/span')).click();
		browser.sleep(25000);
    });
	this.Then(/^I verify Claim Status Detail Inside Claims Status Details Page$/,{timeout: 60 * 1000}, function () {
		expect(element(by.xpath('//*[@id="id96"]/table/tbody/tr[4]/td[2]')).getText()).to.eventually.equal(workbook.Sheets[sheetNamelist[sheetNumber]]['Q2'].v);
		console.log('Bill Verified');
		expect(element(by.xpath('//*[@id="id96"]/table/tbody/tr[1]/td[3]')).getText()).to.eventually.equal(workbook.Sheets[sheetNamelist[sheetNumber]]['R2'].v);
		console.log('Check Number Verified');
		expect(element(by.xpath('//*[@id="id96"]/table/tbody/tr[3]/td[3]/span')).getText()).to.eventually.equal(workbook.Sheets[sheetNamelist[sheetNumber]]['S2'].v);
		console.log('Check Address Verified');
		expect(element(by.xpath('//*[@id="id96"]/table/tbody/tr[4]/td[3]')).getText()).to.eventually.equal(workbook.Sheets[sheetNamelist[sheetNumber]]['T2'].v);
		console.log('Paid Amount Verified');
		expect(element(by.xpath('//*[@id="id96"]/table/tbody/tr[5]/td[3]/span')).getText()).to.eventually.equal(workbook.Sheets[sheetNamelist[sheetNumber]]['U2'].v);
		console.log('Paid To Verified');
		expect(element(by.xpath('//*[@id="id96"]/table/tbody/tr[6]/td[3]/span')).getText()).to.eventually.equal(workbook.Sheets[sheetNamelist[sheetNumber]]['V2'].v);
		console.log('Paid to Name Verified');
		expect(element(by.xpath('//*[@id="id96"]/table/tbody/tr[7]/td[3]/span')).getText()).to.eventually.equal(workbook.Sheets[sheetNamelist[sheetNumber]]['W2'].v);
		console.log('Paid to Taxid Verified');
		expect(element(by.xpath('//*[@id="serviceLineListView"]/tbody/tr[1]/td[8]')).getText()).to.eventually.equal(workbook.Sheets[sheetNamelist[sheetNumber]]['X2'].v);
		console.log('Amount allowed Verified');
		expect(element(by.xpath('//*[@id="serviceLineListView"]/tbody/tr[1]/td[9]')).getText()).to.eventually.equal(workbook.Sheets[sheetNamelist[sheetNumber]]['Y2'].v);
		console.log('Patient Coins Verified');
		expect(element(by.xpath('//*[@id="serviceLineListView"]/tbody/tr[1]/td[10]')).getText()).to.eventually.equal(workbook.Sheets[sheetNamelist[sheetNumber]]['Z2'].v);
		console.log('Patient Deductibles Verified');
		expect(element(by.xpath('//*[@id="serviceLineListView"]/tbody/tr[1]/td[11]')).getText()).to.eventually.equal(workbook.Sheets[sheetNamelist[sheetNumber]]['AA2'].v);
		console.log('Patient Co Verified');
		expect(element(by.xpath('//*[@id="id9a"]/ul/li')).getText()).to.eventually.equal(workbook.Sheets[sheetNamelist[sheetNumber]]['AB2'].v);
		console.log('Remarks Verified');
		expect(element(by.xpath('//*[@id="otherInsInformation"]/tbody/tr/td[1]')).getText()).to.eventually.equal(workbook.Sheets[sheetNamelist[sheetNumber]]['AC2'].v);
		console.log('Career Verified');
    });
};

