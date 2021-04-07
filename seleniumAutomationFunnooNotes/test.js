let app = require('./appFunctions');

async function startapp() {
    await app.fundooRegister();
    // await app.switchRegisterToLoginPage();
    //await app.fundooLogin();
    //await app.switchLoginToRegisterPage();
    //await app.dashboardCreateNote();
    //await app.switchLoginToForgotPasswordPage();
    //await app.forgotPassword();
    //await app.clickOnsideNavNotes();
}

startapp();