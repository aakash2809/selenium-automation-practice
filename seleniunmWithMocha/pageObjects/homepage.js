
const { Builder, By, Key, until } = require('selenium-webdriver');
var BasePage = require('./basepage');

class Homepage {

    async enter_search(baseurl, searchText) {
        let driver = await BasePage.getDriver();
        try {
            await driver.get(baseurl);
            await driver.findElement(By.name('q')).sendKeys(searchText, Key.RETURN);
        } catch (error) {
            console.log("caught error", error)
        }
        finally {
            await driver.quit();
        }
    }
}

module.exports = new Homepage();