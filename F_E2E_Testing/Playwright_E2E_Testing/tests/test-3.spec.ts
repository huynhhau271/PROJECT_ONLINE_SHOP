import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://os-admin.aptech.io/online-shop/data-management/customers');
  
 
  await page.getByRole('row', { name: '3117 First Name 2 Last Name 2 customer20@gmail.com 2023456789 Address 12 edit delete' }).getByRole('button').first().click();
  await page.getByLabel('Update Customer').getByLabel('Birthday').click();
  await page.getByLabel('Update Customer').getByLabel('Birthday').fill('02 Jan 1980');
  await page.getByLabel('Update Customer').getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByLabel('Close').click();
});