import { test, expect } from '@playwright/test';

// Trước khi chạy mỗi test case
test.beforeEach(async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
});

// TC1 - Login: Nhập sai tên đăng nhập
test('TC1 - Login: Nhập sai tên đăng nhập', async ({ page }) => {
    // Điền tên đăng nhập
    await page.locator('#login-form_username').fill('adm');
  
    // Điền mật khẩu
    await page.locator('#login-form_password').fill('Tester@123');
  
    // Click vào nút Đăng nhập
    await page.locator('button:has-text("Đăng nhập")').click();
  
    await page.waitForTimeout(500);
  
    const actualResult = await page.locator('div.ant-form-item-explain-error');
    // await expect(actualResult).toHaveText('Tên đăng nhập hoặc Mật khẩu đã nhập sai');
  });

  // TC2 - Login: Nhập sai mật khẩu
test('TC2 - Login: Nhập sai mật khẩu', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admin');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester1212');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  const actualResult = await page.locator('div.ant-form-item-explain-error');
  // await expect(actualResult).toHaveText('Tên đăng nhập hoặc Mật khẩu đã nhập sai');
});

// TC3 - Login: Nhập sai tên đăng nhập, mật khẩu
test('TC3 - Login: Nhập sai tên đăng nhập, mật khẩu', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('adm');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester1212');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  const actualResult = await page.locator('div.ant-form-item-explain-error');
  // await expect(actualResult).toHaveText('Tên đăng nhập hoặc Mật khẩu đã nhập sai');
});