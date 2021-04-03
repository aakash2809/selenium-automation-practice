const { Builder, By, Key, until } = require('selenium-webdriver');
require("chromedriver");
class BasePage {
    getDriver() {
        return new Builder().forBrowser('chrome').build();
    }
}

module.exports = new BasePage();