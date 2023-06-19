import { test, expect } from '@playwright/test';
import {MainPage} from "./page-object/main-page-object";
import {LoginPage} from "./page-object/login-page-object";

test('Shop fulfill network example with Page Object', async ({ page }) => {


  const mainPage = new MainPage(page);
  await mainPage.openShop();
  await mainPage.acceptCookie();
  await mainPage.openAccount();

  const loginPage = new LoginPage(page);
  await loginPage.forbiddenPasswordThenCancel('test-mail@test@com');
  await mainPage.openShop();

// mock request for search
  await page.route('https://mobileapi.x-kom.pl/api/v1/xkom/products/searchHints?text=Lenovo%20Thinkpad&withType=Banner%2CRecommendation', async route => {
    const response = await route.fetch();
    const json = await response.json();
    json[0].Hint = "Sollers product";
    await route.fulfill({ response, json });
  });

  await page.getByPlaceholder('Czego szukasz?').first().fill('Lenovo Thinkpad');
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(5000);
});