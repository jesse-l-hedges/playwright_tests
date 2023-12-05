import { type Page, type Locator , expect } from '@playwright/test';

export class inventoryPage {
    readonly page: Page;
    readonly pageTitle: string;
    readonly menuButton: Locator;
    readonly menuItem: Locator;
    readonly menu: string;
    readonly cartButton: Locator;
    readonly cartItemCount: Locator;
    readonly sortDropdown: Locator;
    readonly inventoryContainer: Locator;
    readonly inventoryItem: Locator;
    readonly addToCartButton: Locator;
    readonly removeFromCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = 'Swag Labs';
        this.menuButton = page.getByText('Open Menu');
        this.menuItem = this.menuButton.getByText(this.menu);
        this.cartButton = page.getByTestId('a.shopping_cart_link');
        this.cartItemCount = this.cartButton.getByTestId('shopping_cart_badge');
        this.sortDropdown = page.getByTestId('select.product_sort_container');
        this.inventoryContainer = page.getByTestId('div.inventory_list');
        this.inventoryItem = page.getByTestId('div.inventory_item');
        this.addToCartButton = page.getByText('Add to cart');
        this.removeFromCartButton = page.getByText('Remove')
    }

    async openMenuItem(menu:string) {
        await this.menuButton.isVisible();
        this.menuButton.click();
        this.menuItem.click();
    };

    async clickCartButton() {
        await this.cartButton.isVisible();
        this.cartButton.click();
    };

    async addItemToCart(itemName: string) {};

    async removeItemFromCart(itemName: string) {};
};

export default inventoryPage;