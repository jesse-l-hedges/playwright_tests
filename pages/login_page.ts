import { type Page, type Locator , expect } from '@playwright/test';
import messages from '../utils/messages';

export class LoginPage {
    readonly page: Page;
    readonly pageTitle: string;
    readonly usernameTextbox: Locator;
    readonly passwordTextbox: Locator;
    readonly signInButton: Locator;
    readonly rememberMeCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameTextbox = page.getByPlaceholder('Enter your username');
        this.passwordTextbox = page.getByPlaceholder('Enter your password')
        this.signInButton = page.getByText('Sign in');
        this.rememberMeCheckbox = page.getByText('Remember Me');
        this.pageTitle = "ACME Demo App by Applitools";
    }

    async fillUsername(username: string) {
        await this.usernameTextbox.fill(username);
    }

    async fillPassword(password: string) {
        await this.passwordTextbox.fill(password);
    }

    async clickSignIn() {
        await this.signInButton.click();
    }

    async checkRememberMe() {
        await this.rememberMeCheckbox.click();
    }

    async doLogin(username: string, password: string) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickSignIn();
    }

}

export default LoginPage;