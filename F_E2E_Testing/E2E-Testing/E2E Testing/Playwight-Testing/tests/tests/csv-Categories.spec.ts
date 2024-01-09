const { test, expect } = require('@playwright/test');

import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const records = parse(fs.readFileSync(path.join(__dirname, 'categories.csv')), {
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

  const testName = 'TC-CATEGORIES: Add new category ' + index;
  test(testName, async ({ page }) => {
    // Khai báo biến
    const name = record.name;
    const description = record.description;

    await page.getByRole('textbox', { name: '* Name :' }).fill(name);
    await page.getByLabel('Description').fill(description);
    await page.getByRole('button', { name: 'Save' }).click();

    // Đảm bảo không có lỗi
    await expect(page.getByRole('alert')).not.toBeVisible();

    // Chờ tầm 1s
    await page.waitForTimeout(1000);

    // Dòng đầu tiên
    const firstRow = await page.locator('.ant-table-row-level-0:nth-child(1)');
    const newName = await firstRow.locator('.ant-table-cell:nth-child(2)').textContent();
    const newDescription = await firstRow.locator('.ant-table-cell:nth-child(3)').textContent();

    await expect(name).toEqual(newName);
    await expect(description).toEqual(newDescription);
  });
}