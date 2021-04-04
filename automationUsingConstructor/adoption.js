const { By } = require('selenium-webdriver');
var BasePage = require('./base')
require("chromedriver");



class AdoptionPage extends BasePage {

    getLionAvalibility() {
        driver.findElement(By.id('check_btn_01')).click();
    }
}

module.exports = new AdoptionPage();