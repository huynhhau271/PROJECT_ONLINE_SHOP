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
    await page.goto('https://os-admin.aptech.io/online-shop/data-management/orders');
  });

  test('TC1 - Orders: Nhập mới thành công', async ({ page }) => {
    // Khai báo biến
    const customer = 'Bảo Anh';
    const employee = 'Văn Công1';
    const description = 'Đặt hàng ngày 22/09/2023';

    await page.getByLabel('Customer').click();
    await page.getByLabel('Customer').fill(customer);
    await page.getByLabel('Employee').fill(employee);
    await page.getByLabel('Description').fill(description);
    await page.getByRole('button', { name: 'Save' }).click();
  
    // Đảm bảo không có lỗi
    await expect(page.getByRole('alert')).not.toBeVisible();
  
    // Chờ tầm 1s
    await page.waitForTimeout(1000);
  
    // Dòng đầu tiên
    const firstRow = await page.locator('.ant-table-row-level-0:nth-child(1)');
    const newCustomer = await firstRow.locator('.ant-table-cell:nth-child(6)').textContent();
    const newEmployee = await firstRow.locator('.ant-table-cell:nth-child(7)').textContent();
    const newDescription = await firstRow.locator('.ant-table-cell:nth-child(5)').textContent();
    
    await expect(customer).toEqual(newCustomer);
    await expect(employee).toEqual(newEmployee);
    await expect(description).toEqual(newDescription);
    
  });

  test('TC2 - Orders: Cập nhật thành công', async ({ page }) => {
    // Khai báo biến
    const name = 'New Name 88';
    const phone = '888888888';
    const email = 'newemail88@gmail.com';
    const address = '39 Yên Bái';
  
    // Dòng đầu tiên
    const firstRow = await page.locator('.ant-table-row-level-0:nth-child(1)');
  
    // Lấy id tại dòng đầu tiên
    const id = await firstRow.locator('.ant-table-cell:nth-child(1)').textContent();
    // Click nút Edit tại dòng đầu tiên
    await firstRow.locator('.ant-table-cell:nth-child(6)').getByRole('button', { name: 'Edit' }).click();
  
    await page.getByRole('dialog', { name: 'Update Supplier' }).getByLabel('Name').fill(name);
    await page.getByRole('dialog', { name: 'Update Supplier' }).getByLabel('Phone').fill(phone);
    await page.getByRole('dialog', { name: 'Update Supplier' }).getByLabel('Email').fill(email);
    await page.getByRole('dialog', { name: 'Update Supplier' }).getByLabel('Address').fill(address);
    await page.getByRole('dialog', { name: 'Update Supplier' }).getByRole('button', { name: 'Save' }).click();
  
    // Đảm bảo không có lỗi
    await expect(page.getByRole('alert')).not.toBeVisible();
  
    // Chờ tầm 1s
    await page.waitForTimeout(1000);
  
    // Xác minh sự tồn tại của supplier vừa tạo
    const newId = await firstRow.locator('.ant-table-cell:nth-child(1)').textContent();
    const newName = await firstRow.locator('.ant-table-cell:nth-child(2)').textContent();
    const newEmail = await firstRow.locator('.ant-table-cell:nth-child(3)').textContent();
    const newPhone = await firstRow.locator('.ant-table-cell:nth-child(4)').textContent();
    const newAddress = await firstRow.locator('.ant-table-cell:nth-child(5)').textContent();
  
    await expect(id).toEqual(newId);
    await expect(name).toEqual(newName);
    await expect(phone).toEqual(newPhone);
    await expect(email).toEqual(newEmail);
    await expect(address).toEqual(newAddress);
  });

  test('TC3 - Orders: Xóa thành công', async ({ page }) => {
    // Dòng đầu tiên
    const firstRow = await page.locator('.ant-table-row-level-0:nth-child(1)');
  
    // Lấy id tại dòng đầu tiên
    const id = await firstRow.locator('.ant-table-cell:nth-child(1)').textContent();
  
    // Click nút Delete tại dòng đầu tiên
    await firstRow.locator('.ant-table-cell:nth-child(6)').getByRole('button', { name: 'Delete' }).click();
  
    // Click nút Confirm
    await page.getByRole('button', { name: 'Confirm' }).click();
  
    // Đảm bảo không có lỗi
    await expect(page.getByRole('alert')).not.toBeVisible();
  
    // Chờ tầm 1s
    await page.waitForTimeout(1000);
  
    // Xác minh sự không tồn tại của supplier vừa tạo, bằng cách so sánh id đã xóa với id của dòng đầu tiên, nếu khác nhau thì đã xóa thành công
    const newId = await firstRow.locator('.ant-table-cell:nth-child(1)').textContent();
    await expect(id).not.toEqual(newId);
  });