import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 800,
    width: 1200
  }
});

test('W3Schools test with expects', async ({ page }) => {
  await page.goto('https://www.w3schools.com/');
  await page.getByText('Accept all & visit the site').click();
  await page.getByRole('link', { name: 'TypeScript' }).click();
  await page.getByRole('link', { name: 'TS Tuples' }).click();
  await page.getByRole('heading', { name: 'TypeScript Tuples' }).click();
  // expect(await page.screenshot()).toMatchSnapshot('test-snapshot.png');
  await page.getByRole('heading', { name: 'Readonly Tuple' }).click();
  await page.locator('#main div').filter({ hasText: '❮ PreviousLog in to track progress Next ❯' }).getByRole('link', { name: 'Next ❯' }).click();
  await page.getByRole('link', { name: 'TS Object Types' }).click();
  await page.getByRole('link', { name: 'Bootcamps' }).click();
  await expect(page.locator('#header-title')).toHaveText('Coding Bootcamps');
  await page.getByTitle('Get Your Own Website With W3Schools Spaces', { exact: true }).click();
  await expect(page.locator('.hero-title')).toHaveText('Create a Free Website');
});

test('W3Schools test with expect where not passing', async ({ page }) => {
  await page.goto('https://www.w3schools.com/');
  await page.getByText('Accept all & visit the site').click();
  await page.getByRole('link', { name: 'TypeScript' }).click();
  await page.getByRole('link', { name: 'TS Tuples' }).click();
  await page.getByRole('heading', { name: 'TypeScript Tuples' }).click();
  await page.getByRole('heading', { name: 'Readonly Tuple' }).click();
  await page.locator('#main div').filter({ hasText: '❮ PreviousLog in to track progress Next ❯' }).getByRole('link', { name: 'Next ❯' }).click();
  await page.getByRole('link', { name: 'TS Object Types' }).click();
  await page.getByRole('link', { name: 'Bootcamps' }).click();
  await expect(page.locator('#header-title')).toHaveText('Coding Bootcamps');
  await page.getByTitle('Get Your Own Website With W3Schools Spaces', { exact: true }).click();
  await expect(page.locator('.hero-title')).toHaveText('Delete a Free Website');
});