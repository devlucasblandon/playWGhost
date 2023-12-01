// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');

test.beforeEach(async ({ page }) => {
  await page.goto('http://35.244.81.193/ghost');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Sign In - Pruebas Automatizadas/);
  
  //busco input de user
  await page.locator("id=identification").click();
  await page.fill("id=identification", 'user@example.com');
  await page.screenshot({ path: 'screenshotUser.png' });

  await page.locator("id=password").click();
  await page.fill("id=password", 'Admin12345');
  await page.screenshot({ path: 'screenshotPass.png' });

  await page.getByRole('button', {name: 'Sign in →'}).click();
  await page.waitForTimeout(9000);
  await page.screenshot({ path: 'screenshotSubmit.png' });
});

test('has page', async ({ page }) => {
  await page.getByRole('link', { name: 'Page' }).click();
  await page.screenshot({ path: 'screenshotPage.png' });
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});