var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonDir: 'cypress/cucumber-json/',
        output: 'cypress/output/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 11",
            "Parallel": "Scenarios",
            "Executed": "LocalMachine"
        }
    };

    reporter.generate(options);