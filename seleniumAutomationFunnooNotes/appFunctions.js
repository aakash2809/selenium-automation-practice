const { Builder, By, Key, until } = require('selenium-webdriver');
require("chromedriver");
var fs = require('fs');


class FundooNotes {

    fundooRegister = async (url) => {
        let driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get(url);
            await driver.manage().window().maximize();
            await driver.findElement(By.id('first-name')).sendKeys('Hritik');
            await driver.findElement(By.id("last-name")).sendKeys('Patil');
            await driver.findElement(By.id("email")).sendKeys('patilhritik@gmail.com');
            await driver.findElement(By.id("password")).sendKeys('Hritik@32');
            await driver.findElement(By.id("cpassword")).sendKeys('Hritik@32');
            await (await driver.findElement(By.id("register"))).click();
            await driver.sleep(10000);
            await this.switchRegisterToLoginPage(driver);
        }
        catch (error) {
            console.log("caught error", error);
        }
    }

    switchRegisterToLoginPage = async (driver) => {
        try {
            await (await driver.findElement(By.id("move-to-login"))).click();
            await this.fundooLogin(driver);
        }
        catch (error) {
            console.log("caught error", error);
        }
    }

    fundooLogin = async (driver) => {
        try {
            await driver.findElement(By.id('email')).sendKeys('aakashrajak2809@gmail.com');
            await driver.findElement(By.id("password")).sendKeys('System123#');
            await (await driver.findElement(By.id("login"))).click();
            await this.dashboardCreateNote(driver);
            await driver.sleep(10000);
            await this.switchLoginToForgotPasswordPage(driver);
            //await driver.sleep(10000);
        }
        catch (error) {
            console.log("caught error", error);
            driver.takeScreenshot().then(function (data) {
                fs.writeFileSync('img.png', data, 'base64');
            });
        }
    }

    switchLoginToRegisterPage = async (driver) => {
        try {
            await driver.manage().window().maximize();
            await (await driver.findElement(By.id("move-to-register"))).click();
            await driver.sleep(10000);
        }
        catch (error) {
            console.log("caught error", error);
            driver.takeScreenshot().then(function (data) {
                fs.writeFileSync('img.png', data, 'base64');
            });
        }
    }

    switchLoginToForgotPasswordPage = async (driver) => {
        try {
            await driver.sleep(10000);
            await (await driver.findElement(By.id("move-to-forgotPassword"))).click();
            await driver.sleep(10000);
        }
        catch (error) {
            console.log("caught error", error);
            driver.takeScreenshot().then(function (data) {
                fs.writeFileSync('img.png', data, 'base64');
            });
        }
    }

    forgotPassword = async (driver) => {
        try {
            await (await driver.findElement(By.id("email"))).sendKeys('aakashrajak2809@gmail.com');
            await (await driver.findElement(By.id("send-mail")));
            await driver.sleep(10000);
        }
        catch (error) {
            console.log("caught error", error);
            driver.takeScreenshot().then(function (data) {
                fs.writeFileSync('img.png', data, 'base64');
            });
        }
    }

    dashboardCreateNote = async (driver) => {
        try {
            await driver.findElement(By.id('noteCard')).click();
            await driver.findElement(By.name("note-title")).sendKeys('iphone');
            await driver.findElement(By.name("note-description")).sendKeys('got in gift');
            await (await driver.findElement(By.id("close-card"))).click();
            await driver.sleep(10000);
        }
        catch (error) {
            console.log("caught error", error);
        }
    }

    clickOnsideNavNotes = async () => {

        try {
            await driver.findElement(By.id('side-nav-option')).click();
            await driver.sleep(10000);
        }
        catch (error) {
            driver.takeScreenshot().then(function (data) {
                fs.writeFileSync('img.png', data, 'base64');
            });
        }
    }


}

module.exports = new FundooNotes();