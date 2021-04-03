const BaseClass = require("../base/baseClass");

class LogInToGmail {
    gotToLoginPage = () => {
        let driver = BaseClass.getDriver();

        try {
            await driver.get('http://localhost:8081/');
            //await driver.findElement(By.name('q')).sendKeys('selenium test', Key.RETURN);
            await driver.wait(until.titleIs('webdriver - Google Search'), 5000);
        }
        catch (er) {
            console.log("error catch", er);
        } finally {
            await driver.quit();
        }


    }
    gotToLoginPage();
}

module.exports = new LogInToGmail();