import { test, expect } from '@playwright/test';

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
    await page.goto('https://os-admin.aptech.io/online-shop/data-management/products');
  });

  test('TC1 - Products: Nhập mới thành công', async ({ page }) => {
    // Khai báo biến
    const category = 'category 8888';
    const supplier = 'Samsung';
    const name = 'Name8888';
    const price = '88';
    const discount = '10';
    const stock = '1';
  
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

  test('TC2 - Products: Cập nhật thành công', async ({ page }) => {
    // Khai báo biến
    const category = 'category 888878';
    const supplier = 'Samsung78';
    const name = 'Name888878';
    const price = '80';
    const discount = '12';
    const stock = '2';
  
    // Dòng đầu tiên
    const firstRow = await page.locator('.ant-table-row-level-0:nth-child(1)');
  
    // Lấy id tại dòng đầu tiên
    const id = await firstRow.locator('.ant-table-cell:nth-child(1)').textContent();
    // Click nút Edit tại dòng đầu tiên
    await firstRow.locator('.ant-table-cell:nth-child(8)').getByRole('button', { name: 'Edit' }).click();
  
    await page.getByRole('dialog', { name: 'Update Product' }).getByRole('Category').fill(category);
    await page.getByRole('dialog', { name: 'Update Product' }).getByRole('Supplier').fill(supplier);
    await page.getByRole('dialog', { name: 'Update Product' }).getByLabel('Name').fill(name);
    await page.getByRole('dialog', { name: 'Update Product' }).getByLabel('Price').fill(price);
    await page.getByRole('dialog', { name: 'Update Product' }).getByLabel('Discount').fill(discount);
    await page.getByRole('dialog', { name: 'Update Product' }).getByLabel('Stock').fill(stock);
    await page.getByRole('dialog', { name: 'Update Product' }).getByRole('button', { name: 'Save' }).click();
  
    // Đảm bảo không có lỗi
    await expect(page.getByRole('alert')).not.toBeVisible();
  
    // Chờ tầm 1s
    await page.waitForTimeout(1000);
  
    // Xác minh sự tồn tại của product vừa tạo
    const newId = await firstRow.locator('.ant-table-cell:nth-child(1)').textContent();
    const newCategory = await firstRow.locator('.ant-table-cell:nth-child(2)').textContent();
    const newSupplier = await firstRow.locator('.ant-table-cell:nth-child(3)').textContent();
    const newName = await firstRow.locator('.ant-table-cell:nth-child(4)').textContent();
    const newPrice = await firstRow.locator('.ant-table-cell:nth-child(5)').textContent();
    const newDiscount = await firstRow.locator('.ant-table-cell:nth-child(6)').textContent();
    const newStock = await firstRow.locator('.ant-table-cell:nth-child(7)').textContent();
  
    await expect(id).toEqual(newId);
    await expect(category).toEqual(newCategory);
    await expect(supplier).toEqual(newSupplier);
    await expect(name).toEqual(newName);
    await expect(price).toEqual(newPrice);
    await expect(discount).toEqual(newDiscount);
    await expect(stock).toEqual(newStock);
  });

  test('TC3 - Products: Xóa thành công', async ({ page }) => {
    // Dòng đầu tiên
    const firstRow = await page.locator('.ant-table-row-level-0:nth-child(1)');
  
    // Lấy id tại dòng đầu tiên
    const id = await firstRow.locator('.ant-table-cell:nth-child(1)').textContent();
  
    // Click nút Delete tại dòng đầu tiên
    await firstRow.locator('.ant-table-cell:nth-child(8)').getByRole('button', { name: 'Delete' }).click();
  
    // Click nút Confirm
    await page.getByRole('button', { name: 'Confirm' }).click();
  
    // Đảm bảo không có lỗi
    await expect(page.getByRole('alert')).not.toBeVisible();
  
    // Chờ tầm 1s
    await page.waitForTimeout(1000);
  
    // Xác minh sự không tồn tại của product vừa tạo, bằng cách so sánh id đã xóa với id của dòng đầu tiên, nếu khác nhau thì đã xóa thành công
    const newId = await firstRow.locator('.ant-table-cell:nth-child(1)').textContent();
    await expect(id).not.toEqual(newId);
  });