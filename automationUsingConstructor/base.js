const { Builder } = require('selenium-webdriver');
require('chromedriver');
const properties = require('./properties');
var driver = new Builder().forBrowser('chrome').build();

class BasePage {

    constructor() {
        global.driver = driver
    }

    navigateToTheTestRoom() {
        driver.get(properties.TTR);
    }
}

module.exports = BasePage;