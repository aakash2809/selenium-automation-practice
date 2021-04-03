const { Builder, By, Key, until } = require('selenium-webdriver');
require("chromedriver");
async function fundooLogin() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:8081/');
        await driver.manage().window().maximize();
        await driver.findElement(By.id('email')).sendKeys('aakashrajak2809@gmail.com');
        await driver.findElement(By.id("password")).sendKeys('System123#');
        await (await driver.findElement(By.id("login"))).click();
        await driver.wait(until.titleIs('webdriver - Google Search'), 10000);
    }
    catch (error) {
        console.log("caught error", error);
    } finally {
        await driver.quit();
    }
}

async function fundooRegister() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:8081/register');
        await driver.manage().window().maximize();
        await driver.findElement(By.id('first-name')).sendKeys('Hritik');
        await driver.findElement(By.id("last-name")).sendKeys('Patil');
        await driver.findElement(By.id("email")).sendKeys('patilhritik@gmail.com');
        await driver.findElement(By.id("password")).sendKeys('Hritik@32');
        await driver.findElement(By.id("cpassword")).sendKeys('Hritik@32');
        await (await driver.findElement(By.id("register"))).click();
        await driver.wait(until.titleIs('webdriver - Google Search'), 10000);
    }
    catch (error) {
        console.log("caught error", error);
    } finally {
        await driver.quit();
    }
}

fundooRegister();
//fundooLogin();