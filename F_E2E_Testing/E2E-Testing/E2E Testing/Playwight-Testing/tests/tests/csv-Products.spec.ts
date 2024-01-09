const { test, expect } = require('@playwright/test');

import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const records = parse(fs.readFileSync(path.join(__dirname, 'products.csv')), {
    columns: true, // Tự động đọc header
    delimiter: ',', // Dấu phân cách
    skip_empty_lines: true, // Bỏ qua dòng trống
  });

  // Trước khi chạy mỗi test case
test.beforeEach(async ({ page }) => {
    // Đảm bảo luôn login trước khi chạy testcase
    await page.goto('https://os-admin.aptech.io/login');
  
    // Thực hiện login
    await page.getByPlaceholder('Enter email').fill('tungnt@softech.vn');
    await page.getByPlaceholder('Enter password').fill('123456789');
    await page.getByRole('button', { name: 'Log In' }).click();
  
    // Chờ cho đến khi chuyển trang
    await page.waitForURL('https://os-admin.aptech.io/dashboard');
  
    // Vào đúng đường dẫn
    await page.goto('https://os-admin.aptech.io/online-shop/data-management/categories');
  });

  // Lặp qua từng dòng khi đọc được
let index = 0;
for (const record of records) {
  index++;

  const testName = 'TC-PRODUCTS: Add new product ' + index;
  test(testName, async ({ page }) => {
    // Khai báo biến
    const category = record.categories;
    const supplier = record.supplier;
    const name = record.name;
    const price = record.price;
    const discount = record.discount;
    const stock = record.stock;
  
    await page.getByRole('combobox', { name: '* Category :' }).fill(category);
    await page.getByRole('combobox', { name: '* Supplier :' }).fill(supplier);
    await page.getByRole('textbox', { name: '* Name :' }).fill(name);
    await page.getByRole('spinbutton', { name: '* Price :' }).fill(price);
    await page.getByRole('spinbutton', { name: '* Discount :' }).fill(discount);
    await page.getByRole('spinbutton', { name: '* Stock :' }).fill(stock);
    await page.getByRole('button', { name: 'Save' }).click();

    // Đảm bảo không có lỗi
    await expect(page.getByRole('alert')).not.toBeVisible();

    // Chờ tầm 1s
    await page.waitForTimeout(1000);

    // Dòng đầu tiên
    const firstRow = await page.locator('.ant-table-row-level-0:nth-child(1)');
    const newCategory = await firstRow.locator('.ant-table-cell:nth-child(2)').textContent();
    const newSupplier = await firstRow.locator('.ant-table-cell:nth-child(3)').textContent();
    const newName = await firstRow.locator('.ant-table-cell:nth-child(4)').textContent();
    const newPrice = await firstRow.locator('.ant-table-cell:nth-child(5)').textContent();
    const newDiscount = await firstRow.locator('.ant-table-cell:nth-child(6)').textContent();
    const newStock = await firstRow.locator('.ant-table-cell:nth-child(7)').textContent();

    await expect(category).toEqual(newCategory);
    await expect(supplier).toEqual(newSupplier);
    await expect(name).toEqual(newName);
    await expect(price).toEqual(newPrice);
    await expect(discount).toEqual(newDiscount);
    await expect(stock).toEqual(newStock);
  });
}