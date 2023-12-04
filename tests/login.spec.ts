import { test, expect } from '@playwright/test';
import LoginPage from '/mnt/c/github/playwright_tests/pages/login_page';
import pages from '/mnt/c/github/playwright_tests/utils/pages';
// import userData from '../../data/user-data';

const userName = process.env.USERNAME!;
const password = process.env.PASSWORD!;
let loginPage: LoginPage;

test.use({ storageState: { cookies: [], origins: [] } }); // doesn't share the logged in session
// test.use({ storageState: undefined }); // https://github.com/microsoft/playwright/issues/17396
test.describe.configure({ mode: 'serial' });

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  loginPage = new LoginPage(page);
});

test.describe('Login page tests', () => {
    test('valid login', async({page}) => {
      await loginPage.doLogin("standard_user", "secret_sauce");
    });

    test('invalid login', async({page}) => {
      await loginPage.doLogin("standard_user", "bad_password");
    });

    test('missing login', async({page}) => {
      await loginPage.doLogin("","");
    });

    test('invalid username', async({page}) => {
      await loginPage.doLogin("user", "secret_sauce");
    });

    test('invalid password', async({page}) => {
      await loginPage.doLogin("standard_user", "bar")
    });

});