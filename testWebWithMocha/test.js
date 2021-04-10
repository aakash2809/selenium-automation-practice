var webdriver = require('selenium-webdriver');
const assert = require('chai').assert;
By = webdriver.By;
until = webdriver.until;
require('chromedriver');

var driver = new webdriver.Builder().forBrowser('chrome').build();

describe('Test Suite-newtours', function () {
    this.timeout(5000);

    before(function () {
        driver.get("http://newtours.demoaut.com/​");
    });

    after(function () {
        driver.quit();
    });

    it('Test Case # 1- Verify user login  Successfully', function () {
        driver.wait(until.titleIs('Welcome: Mercury Tours'));
        driver.getTitle().then(function (title) {
            assert.equal(title, 'Welcome: Mercury Tours');
        });
        driver.sleep(5000);

        driver.wait(until.elementLocated(By.name('userName')), 50000).then(function () {
            var userName = driver.findElement(By.name('userName'));
            userName.click();
            userName.sendKeys('admin');
        });

        driver.wait(until.elementLocated(By.name('password')), 50000).then(function () {
            var password = driver.findElement(By.name('password'));
            password.click();
            password.sendKeys('admin123');
        });

        driver.wait(until.elementLocated(By.name('login')), 50000).then(function () {
            var loginButton = driver.findElement(By.name('login'));
            loginButton.click();
        });
        driver.sleep(5000);

        //Verify Sign-on link
        driver.wait(until.elementLocated(By.linkText('SIGN-ON')), 50000).then(function () {
            console.log('User can login Successfully.');
        });

    });
});
