// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');

test.beforeEach(async ({ page }) => {
  await page.goto('http://35.244.81.193/ghost');
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Sign In - Pruebas Automatizadas/);
  
  //find input de user
  await page.locator("id=identification").click();
  //await page.fill("id=identification", 'user@example.com');
  await page.fill("id=identification", 'l.blandon@uniandes.edu.co');
  await page.screenshot({ path: 'screenshotUser.png' });
  
  //find input de password
  await page.locator("id=password").click();
  //await page.fill("id=password", 'Admin12345');
  await page.fill("id=password", 'Alcatel2010');
  await page.screenshot({ path: 'screenshotPass.png' });

  //find submit button and click
  await page.getByRole('button', {name: 'Sign in →'}).click();
  
});

// Test to check if the login is successful and click on Page
test('has page', async ({ page }) => {
  await page.getByRole('link', { name: 'Page' }).click();
  await page.screenshot({ path: 'screenshotPage.png' });
});

// Test to check if button New Page works
test('has New page', async ({ page }) => {
  await page.goto('http://35.244.81.193/ghost/#/pages');
  await page.screenshot({ path: 'screenshotPasslink.png' });
  await page.getByRole('link', { name: 'New page' }).click();
  await page.screenshot({ path: 'screenshotNewPage.png' });
});

// Test to check if the login is successful and click on Dashboard
test('has Dashboard', async ({ page }) => {
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.screenshot({ path: 'screenshotDashboard.png' });
});

// Test to check if the login is successful and click on View site
test('has View site', async ({ page }) => {
  await page.getByRole('link', { name: 'View site' }).click();
  await page.screenshot({ path: 'screenshotViewsite.png' });
})

// Test to check if the login is successful and click on Draft
test('has Draft', async ({ page }) => {
  await page.getByRole('link', { name: 'Drafts' }).click();
  await page.screenshot({ path: 'screenshotDrafts.png' });
})

// Test to check if the login is successful and click on Scheduled
test('has Scheduled', async ({ page }) => {
  await page.getByRole('link', { name: 'Scheduled' }).click();
  await page.screenshot({ path: 'screenshotScheduled.png' });
})

// Test to check if the login is successful and click on Draft
test('has Published', async ({ page }) => {
  await page.getByRole('link', { name: 'Published' }).click();
  await page.screenshot({ path: 'screenshotPublished.png' });
})

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});