import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://os-admin.aptech.io/online-shop/data-management/orders');
  await page.locator('div').filter({ hasText: /^10 \/ page$/ }).nth(1).click();
  await page.getByTitle('Next Page').getByRole('button', { name: 'right' }).click();
});