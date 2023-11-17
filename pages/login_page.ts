import { type Page, type Locator , expect } from '@playwright/test';
import messages from '../../utils/messages';

export class LoginPage {
    readonly page: Page;
    readonly getStartedButton: Locator;
    readonly pageTitle: RegExp;
}

export default LoginPage;

const loginPage = page.goto('https://demo.applitools.com/index.html');