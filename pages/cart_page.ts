import { type Page, type Locator , expect } from '@playwright/test';

export class cartPage {
    static pageTitle(): any {
        throw new Error('Method not implemented.');
    }
    readonly page: Page;
    readonly pageTitle: string;
    readonly yourCartLabel: Locator;
    readonly cartContainer: Locator;
    readonly itemQtyBox: Locator;
    readonly itemPrice: Locator;
    readonly removeButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = 'Swag Labs';
        this.yourCartLabel = page.getByText('Your Cart');
        this.cartContainer = page.getByTestId('cart_contents_container.cart_list');
        this.itemQtyBox = page.getByTestId('div.cart_quantity');
        this.itemPrice = page.getByTestId('div.inventory)_item_price');
        this.removeButton = page.getByText('Remove');
        this.continueShoppingButton = page.getByText('Continue Shopping');
        this.checkoutButton = page.getByText('Checkout');
    };

    async changeItemQty(itemName:string, quantity:string) {
        await this.itemQtyBox.isVisible();
        await this.itemQtyBox.fill(quantity);
    };
    
    async removeItem(itemName:string) {

    };

    async clickCheckoutButton() {
        await this.checkoutButton.isVisible();
        await this.checkoutButton.click();
    };

    async clickContinueShoppingButton() {
        await this.continueShoppingButton.isVisible();
        await this.continueShoppingButton.click();
    }
};

export default cartPage;