import { test, expect } from '@playwright/test';

// Trước khi chạy mỗi test case
test.beforeEach(async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
});

test('TC1 - Login: Tên đăng nhập đã nhập sai', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('adminadmin');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  const actualResult = await page.locator('div.ant-form-item-explain-error');

  // Xuất hiện thông báo lỗi
  await expect(actualResult).toHaveText('Tên đăng nhập đã nhập sai');
});