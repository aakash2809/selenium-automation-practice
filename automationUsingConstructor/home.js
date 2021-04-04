const { Builder, By, Key, until } = require('selenium-webdriver');
require("chromedriver");

var BasePage = require('./base')

class HomePage extends BasePage {

    clickOnAdotionLink() {
        this.driver.findElement(By.css('[name=nav_adopt]')).click();
    }
}

module.exports = new HomePage();