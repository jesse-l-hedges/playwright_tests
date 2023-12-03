import { type Page, type Locator , expect } from '@playwright/test';
import messages from '../utils/messages';

export class LoginPage {
    readonly page: Page;
    readonly pageTitle: string;
    readonly usernameTextbox: Locator;
    readonly passwordTextbox: Locator;
    readonly LoginButton: Locator;
    readonly rememberMeCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameTextbox = page.getByPlaceholder('Username');
        this.passwordTextbox = page.getByPlaceholder('Password')
        this.LoginButton = page.getByText('Login');
        this.pageTitle = 'Swag Labs';
    }

    async fillUsername(username: string) {
        await this.usernameTextbox.fill(username);
    }

    async fillPassword(password: string) {
        await this.passwordTextbox.fill(password);
    }

    async clickSignIn() {
        await this.LoginButton.click();
    }

    async doLogin(username: string, password: string) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickSignIn();
    }

}

export default LoginPage;