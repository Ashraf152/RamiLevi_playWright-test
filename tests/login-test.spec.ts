import { test, Page, expect } from '@playwright/test';
import { BrowserWrapper } from '../infra/browser-wrapper';
import { LoginPage } from '../logic/pages/login-page';
import { configJson } from '../config.json';
import { MainPage } from '../logic/pages/main-page';

test.describe.skip('test for login', () => {
    let browserWrapper: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browserWrapper = new BrowserWrapper();
        page = await browserWrapper.getPage(configJson.url)
        
    });
    test.afterEach(async () => {
        await browserWrapper.
            closeBrowser();
    })
    test.skip("check the user name after login", async () => {
        const loginPage = new LoginPage(page);
        await loginPage.fullLoginProcess(configJson.user, configJson.password);
        const mainPage = new MainPage(page);
        expect(await mainPage.checkUserNameMatches(configJson.userName)).toBeTruthy()
    })
})