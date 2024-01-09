import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://os-admin.aptech.io/online-shop/data-management/orders');
});