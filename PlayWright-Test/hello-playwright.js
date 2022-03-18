import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    

  // Go to https://en.wikipedia.org/wiki/Main_Page
  await page.goto('https://en.wikipedia.org/wiki/Main_Page');

  // Click div[role="main"] >> text=Pali-Aike volcanic field
  await page.locator('div[role="main"] >> text=Pali-Aike volcanic field').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Pali-Aike_volcanic_field');

  // Click text=Jurassic-age
  await page.locator('text=Jurassic-age').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Jurassic');

  // Click text=Central Atlantic Magmatic Province >> nth=0
  await page.locator('text=Central Atlantic Magmatic Province').first().click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Central_Atlantic_magmatic_province');

  // Click #mw-content-text a:has-text("Jurassic") >> nth=1
  await page.locator('#mw-content-text a:has-text("Jurassic")').nth(1).click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Jurassic');

});