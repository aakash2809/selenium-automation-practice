const { Builder, By, Key, until } = require('selenium-webdriver');
var driver;
class HomePage {
    constructor() {
        driver = new Builder().forBrowser('chrome').build();
    }
    navigateToTheTestRoom() {
        driver.get('https://www.thetestroom.com/webapp/');
    }
}
module.exports = new HomePage();