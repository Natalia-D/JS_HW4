'use strict';
const path = require("path");
const yargs = require("yargs").argv;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // directConnect: true,  
    baseUrl: 'https://exadel.com/',
    capabilities: {
    browserName: 'chrome',

    shardTestFiles: false,
    maxInstances: 2,
    },
    multiCapabilities: [{
       browserName: 'chrome',
   }, {
        browserName: 'firefox'
    }],

    specs: [
        `jasmine_e2e/${yargs.spec || "*/*.js"}`
    ],
    // restartBrowserBetweenTests: true,
    onPrepare: function () {
        browser.waitForAngularEnabled(false); 
        console.log("Hello from onPrepare()!");
    },
    beforeLaunch: function () {
        console.log("Hello from beforeLaunch()!");
    },
    onComplete: function () {
        console.log("Hello from onComplete()!");
    },
    SELENIUM_PROMISE_MANAGER: false,

    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};