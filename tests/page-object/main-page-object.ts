import {Locator, Page} from '@playwright/test';

export class MainPage {
    readonly page: Page;
    readonly acceptCookieButton: Locator;
    readonly account: Locator;

    constructor(page: Page) {
        this.page = page;
        this.acceptCookieButton = page.locator('button', {hasText: 'W porządku'});
        this.account = page.getByRole('link', { name: 'Twoje konto' });
    }

    async openShop() {
        await this.page.goto('https://x-kom.pl');
    }

    async acceptCookie() {
        await this.acceptCookieButton.click();
    }

    async openAccount() {
        await this.account.click();
    }
}