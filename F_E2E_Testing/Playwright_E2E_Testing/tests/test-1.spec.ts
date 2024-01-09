import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://os-admin.aptech.io/online-shop/data-management/products');
  await page.getByRole('combobox', { name: '* Category :' }).click();
  await page.getByRole('combobox', { name: '* Category :' }).click();
  await page.getByRole('combobox', { name: '* Category :' }).click();
  await page.getByText('học tập và phát triển bản thân một cách').click();
  await page.getByRole('combobox', { name: '* Supplier :' }).click();
  await page.getByTitle('AKG_KII').getByText('AKG_KII').click();
  await page.getByRole('textbox', { name: '* Name :' }).click();
  await page.getByRole('textbox', { name: '* Name :' }).fill('Product 01 a');
  await page.getByRole('textbox', { name: '* Name :' }).press('Shift+ArrowLeft');
  await page.getByRole('textbox', { name: '* Name :' }).fill('Product 01 A');
  await page.getByRole('textbox', { name: '* Name :' }).press('Shift+ArrowLeft');
  await page.getByRole('textbox', { name: '* Name :' }).press('Shift+ArrowLeft');
  await page.getByRole('textbox', { name: '* Name :' }).click();
  await page.getByRole('textbox', { name: '* Name :' }).fill('Product 01 AAA');
  await page.getByRole('spinbutton', { name: '* Price :' }).click();
  await page.getByLabel('Increase Value').first().click();
  await page.getByLabel('Increase Value').first().click({
    clickCount: 3
  });
  await page.getByLabel('Increase Value').first().click({
    clickCount: 3
  });
  await page.getByLabel('Increase Value').nth(1).click();
  await page.getByLabel('Increase Value').nth(1).dblclick();
  await page.getByLabel('Increase Value').nth(1).click();
  await page.getByLabel('Increase Value').nth(2).click();
  await page.getByLabel('Increase Value').nth(2).dblclick();
  await page.getByRole('spinbutton', { name: 'Stock :' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
});