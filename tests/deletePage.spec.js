// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');

test.beforeEach(async ({ page }) => {
  await page.goto('http://35.244.81.193/ghost');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Sign In - Pruebas Automatizadas/);
  
  //find input de user
  await page.locator("id=identification").click();
  await page.fill("id=identification", 'user@example.com');
  
  //find input de password
  await page.locator("id=password").click();
  await page.fill("id=password", 'Admin12345');

  //find submit button and click
  await page.getByRole('button', {name: 'Sign in →'}).click();
  
});

// Test to check if the login is successful and click on Page
test('has pages', async ({ page }) => {
  await page.getByRole('link', { name: 'Page' }).click();
});

// Test to check if button New Page works
test('has New page', async ({ page }) => {
    await page.goto('http://35.244.81.193/ghost/#/pages');
    //await page.goto('http://localhost:2368/ghost/#/pages');
    await page.getByRole('link', { name: 'New page' }).click();
    //await page.fill("data-kg=editor", 'Nueva pagina de prueba');
    await page.getByPlaceholder('Page title').fill('Pagina de prueba para borrar');
    await page.screenshot({ path: 'screenshotNewPageDelete.png' });
  });
