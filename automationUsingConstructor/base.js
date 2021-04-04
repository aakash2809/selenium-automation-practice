const { Builder, By, Key, until } = require('selenium-webdriver');
require("chromedriver");
var driver = new Builder().forBrowser('chrome').build();

class BasePage {

    constructor() {
        global.driver = driver
    }

    navigateToTheTestRoom() {
        driver.get('https://www.thetestroom.com/webapp/');
    }
}

module.exports = BasePage;