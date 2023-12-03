import { test, expect } from '@playwright/test';
import LoginPage from '/mnt/c/github/playwright_tests/pages/login_page';
import InventoryPage from '/mnt/c/github/playwright_tests/pages/inventory_page';
import CartPage from '/mnt/c/github/playwright_tests/pages/cart_page';
import pages from '/mnt/c/github/playwright_tests/utils/pages';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;

test.use({ storageState: { cookies: [], origins: [] } }); // doesn't share the logged in session
// test.use({ storageState: undefined }); // https://github.com/microsoft/playwright/issues/17396
test.describe.configure({ mode: 'serial' });

test.beforeEach(async ({ page }) => {
  await page.goto(pages.loginPage);
  loginPage = new LoginPage(page);
  await loginPage.doLogin("standard_user", "secret_sauce");
  await page.goto(pages.inventoryPage);
  inventoryPage = new InventoryPage(page);
});

test.describe('Inventory page tests', () => {
    test('user sees inventory list', async({page}) => {
      await inventoryPage.inventoryContainer.isVisible();
    });

    test('user can add item to cart', async({page}) => {
        inventoryPage.addItemToCart('Sauce Labs Bike Light');
    });

    test('user can remove item from cart', async({page}) => {
        inventoryPage.addItemToCart('Sauce Labs Bike Light');
        inventoryPage.removeItemFromCart('Sauce Labs Bike Light');
    });

    test('user can view cart', async({page}) => {
        inventoryPage.clickCartButton();
        await page.goto(pages.cartPage);
        expect(cartPage.pageTitle()).toHaveText('Swag Labs');
    });


});