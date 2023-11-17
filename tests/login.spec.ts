import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login-page';
import pages from '../../utils/pages';
import userData from '../../data/user-data';

const userName = process.env.USERNAME!;
const password = process.env.PASSWORD!;
let loginPage: LoginPage;

test.use({ storageState: { cookies: [], origins: [] } }); // doesn't share the logged in session
// test.use({ storageState: undefined }); // https://github.com/microsoft/playwright/issues/17396
test.describe.configure({ mode: 'serial' });

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.demoqa.com');
  });

test.describe('Login page tests', () => {
    test('valid login', async({page}) => {

    });

    test('invalid login', async({page}) => {

    });

    test('missing login', async({page}) => {

    });

    test('invalid username', async({page}) => {

    });

    test('invalid password', async({page}) => {

    });

});