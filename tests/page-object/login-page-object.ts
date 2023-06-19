import {expect, Locator, Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly getStartedLink: Locator;
    readonly forgotPassword: Locator;
    readonly email: Locator;
    readonly back: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedLink = page.locator('a', {hasText: 'Get started'});
        this.forgotPassword = page.getByRole('link', {name: 'Nie pamiętasz hasła?'});
        this.email = page.getByPlaceholder('E-mail');
        this.back = page.getByRole('button', {name: 'Wróć'});
    }

    async forbiddenPasswordThenCancel(email: string) {
        await this.forgotPassword.click();
        await this.email.fill(email);
        await this.back.click();
    }
}