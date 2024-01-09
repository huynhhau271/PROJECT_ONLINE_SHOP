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
    await page.goto('https://os-admin.aptech.io/online-shop/data-management/customers');
  });

  test('TC1 - Customers: Nhập mới thành công', async ({ page }) => {
    // Khai báo biến
    const firstname = 'Trần';
    const lastname = 'Thị B';
    const phone = '0905555644434';
    const email = 'email1288734rty@gmail.com';
    const address = '88 Yên Bái';
    const birthday = '';
  
    await page.getByRole('textbox', { name: '* First Name :' }).fill(firstname);
    await page.getByRole('textbox', { name: '* Last Name :' }).fill(lastname);
    await page.getByLabel('phone').fill(phone);
    await page.getByLabel('email').fill(email);
    await page.getByLabel('address').fill(address);
    await page.getByLabel('birthday').fill(birthday);
    await page.getByRole('button', { name: 'Save' }).click();
  
    // Đảm bảo không có lỗi
    await expect(page.getByRole('alert')).not.toBeVisible();
  
    // Chờ tầm 1s
    await page.waitForTimeout(1000);
  
    // Dòng đầu tiên
    const firstRow = await page.locator('.ant-table-row-level-0:nth-child(1)');
    const newFirstName = await firstRow.locator('.ant-table-cell:nth-child(2)').textContent();
    const newLastName = await firstRow.locator('.ant-table-cell:nth-child(3)').textContent();
    const newEmail = await firstRow.locator('.ant-table-cell:nth-child(4)').textContent();
    const newPhone = await firstRow.locator('.ant-table-cell:nth-child(5)').textContent();
    const newAddress = await firstRow.locator('.ant-table-cell:nth-child(6)').textContent();
    const newBirthday = await firstRow.locator('.ant-table-cell:nth-child(7)').textContent();


  
    await expect(firstname).toEqual(newFirstName);
    await expect(lastname).toEqual(newLastName);
    await expect(phone).toEqual(newPhone);
    await expect(email).toEqual(newEmail);
    await expect(address).toEqual(newAddress);
    await expect(birthday).toEqual(newBirthday);
  });

  test('TC2 - Customers: Cập nhật thành công', async ({ page }) => {
    // Khai báo biến
    const firstname = 'FirstName09';
    const lastname = 'LastName09';
    const phone = '0905884888609';
    const email = 'email888488609@gmail.com';
    const address = '89 Yên Bái';
    const birthday = '';
  
    // Dòng đầu tiên
    const firstRow = await page.locator('.ant-table-row-level-0:nth-child(1)');
  
    // Lấy id tại dòng đầu tiên
    const id = await firstRow.locator('.ant-table-cell:nth-child(1)').textContent();
    // Click nút Edit tại dòng đầu tiên
    await firstRow.locator('.ant-table-cell:nth-child(8)').getByRole('button', { name: 'Edit' }).click();
  
    await page.getByRole('dialog', { name: 'Update Customer' }).getByRole('FirstName').fill(firstname);
    await page.getByRole('dialog', { name: 'Update Customer' }).getByRole('LastName').fill(lastname);
    await page.getByRole('dialog', { name: 'Update Customer' }).getByLabel('Phone').fill(phone);
    await page.getByRole('dialog', { name: 'Update Customer' }).getByLabel('Email').fill(email);
    await page.getByRole('dialog', { name: 'Update Customer' }).getByLabel('Address').fill(address);
    await page.getByRole('dialog', { name: 'Update Customer' }).getByLabel('Birthday').fill(birthday);
    await page.getByRole('dialog', { name: 'Update Customer' }).getByRole('button', { name: 'Save' }).click();
  
    // Đảm bảo không có lỗi
    await expect(page.getByRole('alert')).not.toBeVisible();
  
    // Chờ tầm 1s
    await page.waitForTimeout(1000);
  
    // Xác minh sự tồn tại của customer vừa tạo
    const newId = await firstRow.locator('.ant-table-cell:nth-child(1)').textContent();
    const newFirstName = await firstRow.locator('.ant-table-cell:nth-child(2)').textContent();
    const newLastName = await firstRow.locator('.ant-table-cell:nth-child(3)').textContent();
    const newEmail = await firstRow.locator('.ant-table-cell:nth-child(4)').textContent();
    const newPhone = await firstRow.locator('.ant-table-cell:nth-child(5)').textContent();
    const newAddress = await firstRow.locator('.ant-table-cell:nth-child(6)').textContent();
    const newBirthday = await firstRow.locator('.ant-table-cell:nth-child(7)').textContent();
  
    await expect(id).toEqual(newId);
    await expect(firstname).toEqual(newFirstName);
    await expect(lastname).toEqual(newLastName);
    await expect(phone).toEqual(newPhone);
    await expect(email).toEqual(newEmail);
    await expect(address).toEqual(newAddress);
    await expect(birthday).toEqual(newBirthday);
  });

  test('TC3 - Customers: Xóa thành công', async ({ page }) => {
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
  
    // Xác minh sự không tồn tại của Customer vừa tạo, bằng cách so sánh id đã xóa với id của dòng đầu tiên, nếu khác nhau thì đã xóa thành công
    const newId = await firstRow.locator('.ant-table-cell:nth-child(1)').textContent();
    await expect(id).not.toEqual(newId);
  });