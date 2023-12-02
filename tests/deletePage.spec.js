// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');
const caps = {
    'resolution': '1024x768',  // You can choose any supported resolution as per the selected OS and OS version
};

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

// Test to check if button Delete Works
test('has New page', async ({ page }) => {
    await page.goto('http://35.244.81.193/ghost/#/pages');
    //await page.goto('http://localhost:2368/ghost/#/pages');
    await page.getByRole('link', { name: 'New page' }).click();
    await page.getByPlaceholder('Page title').fill('Pagina de prueba para borrar');
    await page.getByTitle('Settings').click();
    await page.screenshot({ path: 'screenshotNewPageDelete.png' });
    await page.locator(
        '//*[@id="entry-controls"]/div/div[2]/div/button/span'
    ).click();
    await page.screenshot({ path: 'screenshotDeleteButton.png' });
    page.on('dialog', dialog => console.log(dialog.message()));
    await page.getByRole('button',  {name: 'Delete', exact: true }).click();
    await page.screenshot({ path: 'screenshotDeleteButtonConfirm.png' });
  });
