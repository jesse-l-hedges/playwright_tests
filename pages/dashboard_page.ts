import { type Page, type Locator , expect } from '@playwright/test';

export class dashboardPage{
    readonly page: Page;
    readonly pageTitle: string;
    readonly companyName: Locator;
    readonly searchBox: Locator;
    readonly messagesButton: Locator;
    readonly messagesCount: Locator;
    readonly settingsButton: Locator;
    readonly userButton: Locator;
    readonly addAccountButton: Locator;
    readonly makePaymentButton: Locator;
    readonly totalBalText: Locator;
    readonly viewStmtLink: Locator;
    readonly creditAvailText: Locator;
    readonly requestIncreaseLink: Locator;
    readonly dueTodayText: Locator;
    readonly payNowLink: Locator;
    readonly transactionsTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = 'ACME demo app';
        this.companyName = page.getByTestId('logo-label');
        this.searchBox = page.getByPlaceholder('Start typing to search...');
        this.messagesButton = page.getByTestId('os-icon os-icon-mail-14');
        this.messagesCount = page.getByTestId('new-messages-count');
        this.settingsButton = page.getByTestId('os-icon os-icon-ui-46');
        this.userButton = page.getByTestId('logged-user-w');
        this.addAccountButton = page.getByText('Add Account');
        this.makePaymentButton = page.getByText('Make Payment');
        this.totalBalText = page.getByText('Total Balance');
        this.creditAvailText = page.getByText('Credit Available');
        this.dueTodayText = page.getByText('Due Today')
        this.transactionsTable = page.getByTestId('table table-padded');
    };

    async clickAddAccount() {
        await this.addAccountButton.click();
    };

    async clickMakePayment() {
        await this.makePaymentButton.click();
    }

    async clickViewStatement() {
        await this.viewStmtLink.click();
    };

    async clickRequestIncrease() {
        await this.requestIncreaseLink.click();
    };

    async clickPayNow() {
        await this.payNowLink.click();
    }
};

export default dashboardPage;