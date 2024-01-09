import { test, expect } from '@playwright/test';

// Trước khi chạy mỗi test case
test.beforeEach(async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
});

// Testcase 1: Tên đăng nhập >= 3 và <= 30 ký tự
test('TC1 - Login: Tên đăng nhập >= 3 và <= 30 ký tự', async ({ page }) => {
    // Điền tên đăng nhập
    await page.locator('#login-form_username').fill('admin');
  
    // Điền mật khẩu
    await page.locator('#login-form_password').fill('Tester@123');
  
    // Click vào nút Đăng nhập
    await page.locator('button:has-text("Đăng nhập")').click();
  
    await page.waitForTimeout(500);
  
    const actualResult = await page.locator('div.ant-form-item-explain-error');
  
    // Không xuất hiện thông báo lỗi
    await expect(actualResult).not.toBeInViewport();
  });

  test('TC2 - Login: Tên đăng nhập = 3 ký tự', async ({ page }) => {
    // Điền tên đăng nhập
    await page.locator('#login-form_username').fill('adm');
  
    // Điền mật khẩu
    await page.locator('#login-form_password').fill('Tester@123');
  
    // Click vào nút Đăng nhập
    await page.locator('button:has-text("Đăng nhập")').click();
  
    await page.waitForTimeout(500);
  
    const actualResult = await page.locator('div.ant-form-item-explain-error');
  
    // Không xuất hiện thông báo lỗi
    await expect(actualResult).not.toBeInViewport();
  });

  test('TC3 - Login: Tên đăng nhập = 30 ký tự', async ({ page }) => {
    // Điền tên đăng nhập
    await page.locator('#login-form_username').fill('adminadminadminadminadminadmsd');
  
    // Điền mật khẩu
    await page.locator('#login-form_password').fill('Tester@123');
  
    // Click vào nút Đăng nhập
    await page.locator('button:has-text("Đăng nhập")').click();
  
    await page.waitForTimeout(500);
  
    const actualResult = await page.locator('div.ant-form-item-explain-error');
  
    // Không xuất hiện thông báo lỗi
    await expect(actualResult).not.toBeInViewport();
  });

  test('TC4 - Login: Tên đăng nhập = 4 ký tự', async ({ page }) => {
    // Điền tên đăng nhập
    await page.locator('#login-form_username').fill('admi');
  
    // Điền mật khẩu
    await page.locator('#login-form_password').fill('Tester@123');
  
    // Click vào nút Đăng nhập
    await page.locator('button:has-text("Đăng nhập")').click();
  
    await page.waitForTimeout(500);
  
    const actualResult = await page.locator('div.ant-form-item-explain-error');
  
    // Không xuất hiện thông báo lỗi
    await expect(actualResult).not.toBeInViewport();
  });

  test('TC5 - Login: Tên đăng nhập = 29 ký tự', async ({ page }) => {
    // Điền tên đăng nhập
    await page.locator('#login-form_username').fill('adminadminadminadminadminadms');
  
    // Điền mật khẩu
    await page.locator('#login-form_password').fill('Tester@123');
  
    // Click vào nút Đăng nhập
    await page.locator('button:has-text("Đăng nhập")').click();
  
    await page.waitForTimeout(500);
  
    const actualResult = await page.locator('div.ant-form-item-explain-error');
  
    // Không xuất hiện thông báo lỗi
    await expect(actualResult).not.toBeInViewport();
  });

  test('TC6 - Login: Tên đăng nhập = 2 ký tự', async ({ page }) => {
    // Điền tên đăng nhập
    await page.locator('#login-form_username').fill('ad');
  
    // Điền mật khẩu
    await page.locator('#login-form_password').fill('Tester@123');
  
    // Click vào nút Đăng nhập
    await page.locator('button:has-text("Đăng nhập")').click();
  
    await page.waitForTimeout(500);
  
    const actualResult = await page.locator('div.ant-form-item-explain-error');
  
    // Xuất hiện thông báo lỗi
    await expect(actualResult).toHaveText('Độ dài tên đăng nhập phải nằm trong khoảng 3 đến 30 ký tự');
  });

  test('TC7 - Login: Tên đăng nhập = 31 ký tự', async ({ page }) => {
    // Điền tên đăng nhập
    await page.locator('#login-form_username').fill('adminadminadminadminadminadmsd1');
  
    // Điền mật khẩu
    await page.locator('#login-form_password').fill('Tester@123');
  
    // Click vào nút Đăng nhập
    await page.locator('button:has-text("Đăng nhập")').click();
  
    await page.waitForTimeout(500);
  
    const actualResult = await page.locator('div.ant-form-item-explain-error');
  
    // Xuất hiện thông báo lỗi
    await expect(actualResult).toHaveText('Độ dài tên đăng nhập phải nằm trong khoảng 3 đến 30 ký tự');
  });