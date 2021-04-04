const { Builder, By, Key, until } = require('selenium-webdriver');
require("chromedriver");

class BasePage {

    constructor() {
        this.driver = new Builder().forBrowser('chrome').build();
    }

    navigateToTheTestRoom() {
        this.driver.get('https://www.thetestroom.com/webapp/');
    }
}

module.exports = BasePage;