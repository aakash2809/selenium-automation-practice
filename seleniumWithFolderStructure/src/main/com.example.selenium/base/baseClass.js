const { Builder, By, Key, until } = require('selenium-webdriver');
require('../pages/gmailLogin');
require("chromedriver");

class BaseClass {

    getDriver = async () => {
        let driver = await new Builder().forBrowser('chrome').build();
        return driver;
    }
    gotToLoginPage();
}

module.exports = new BaseClass();