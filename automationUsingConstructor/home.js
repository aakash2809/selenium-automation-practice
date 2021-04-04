const { Builder, By, Key, until } = require('selenium-webdriver');
require("chromedriver");

var BasePage = require('./base')

class HomePage extends BasePage {

    clickOnAdotionLink() {
        driver.findElement(By.css('[name=nav_adopt]')).click();
        return require('./adoption');
    }
}

module.exports = new HomePage();