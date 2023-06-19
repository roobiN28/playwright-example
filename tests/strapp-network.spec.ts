import { test, expect } from '@playwright/test';

test('Strapp test', async ({ page }) => {
  await page.goto('https://sc-strapp-t009.sollers.local/react/sollers/profile/101');
  // await page.goto('https://rsr-sollers.eu.auth0.com/login?state=hKFo2SBNMkxfUEo3NXgwaHIzRVJCcmhKdVNGbVBRUWs5VC1zU6FupWxvZ2luo3RpZNkgMVJGMmEwSHlza2M2c2JrWkhEalgzV1pjczRxUkZZYkejY2lk2SBFb1EzV2Q5aTNjWTdQQ1RjVXdlZzAxS0R0aVFGcXlUdg&client=EoQ3Wd9i3cY7PCTcUweg01KDtiQFqyTv&protocol=oauth2&response_type=id_token&redirect_uri=https%3A%2F%2Fsc-strapp-t009.sollers.local%2Freact%2Fauthentication&client-request-id=2ae346be-c0b4-4f5d-8963-6306c05b9c04&x-client-SKU=Js&x-client-Ver=1.0.18&nonce=8aa382f3-f96e-49c9-9085-339938313889');
  await page.route('https://sc-strapp-t009.sollers.local/api/userProfile/101/professionalData', async route => {
    const json = {"coreSystems":[],"languages":["Duck Lang","Dog lang","Tiger lang"],"certificates":[]};
    await route.fulfill({ json });
  });

  await page.getByPlaceholder('yours@example.com').click();
  await page.getByPlaceholder('yours@example.com').fill('strapp.jakub.bielak@sollers.local');
  await page.getByPlaceholder('your password').click();
  await page.getByPlaceholder('your password').fill('Sollers123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.pause();
  await page.locator('.dataContainer')[0].click();
  await page.getByRole('link', { name: 'Personal data' }).click();
  await page.getByRole('link', { name: 'Career' }).click();
  await page.getByRole('link', { name: 'Projects' }).click();
  await page.getByRole('link', { name: 'SOL0255' }).click();
  await page.getByText('Project Knowledge Gathering (KS)').click();
  await page.pause();
});