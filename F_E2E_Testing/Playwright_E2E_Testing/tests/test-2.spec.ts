import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://os-admin.aptech.io/online-shop/data-management/products');
  await page.getByRole('spinbutton', { name: 'Discount :' }).click();
  await page.getByRole('spinbutton', { name: 'Discount :' }).fill('3');
  await page.getByRole('spinbutton', { name: 'Stock :' }).click();
  await page.getByRole('spinbutton', { name: 'Stock :' }).fill('6');
  await page.getByRole('button', { name: 'Save' }).click();
});