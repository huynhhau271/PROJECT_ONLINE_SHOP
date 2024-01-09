import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://os-admin.aptech.io/online-shop/data-management/orders');
  await page.getByLabel('Customer').click();
  await page.getByTitle('Bảo Anh').getByText('Bảo Anh').click();
  await page.getByLabel('Employee').click();
  await page.getByText('Văn Công1').click();
  await page.getByLabel('Description').click();
  await page.getByLabel('Description').fill('D');
  await page.getByLabel('Description').press('Shift+ArrowLeft');
  await page.getByLabel('Description').fill('');
  await page.getByLabel('Description').press('Shift+ArrowLeft');
  await page.getByLabel('Description').press('Shift+ArrowLeft');
  await page.getByLabel('Description').fill('Dat hang ngay 22/09/2023');
  await page.getByRole('button', { name: 'Save' }).click();
});