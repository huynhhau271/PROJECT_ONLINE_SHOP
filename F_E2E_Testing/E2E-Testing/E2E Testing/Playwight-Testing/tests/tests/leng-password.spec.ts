import { test, expect } from '@playwright/test';

// Trước khi chạy mỗi test case
test.beforeEach(async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
});

// Testcase 1: Mật khẩu >= 6 và <=10 ký tự
test('TC1 - Login: Mật khẩu >= 6 và <=10 ký tự', async ({ page }) => {
  // Điền mật khẩu
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

test('TC2 - Login: Mật khẩu = 6 ký tự', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admin');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  const actualResult = await page.locator('div.ant-form-item-explain-error');

  // Không xuất hiện thông báo lỗi
  await expect(actualResult).not.toBeInViewport();
});

test('TC3 - Login: Mật khẩu = 10 ký tự', async ({ page }) => {
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

test('TC4 - Login: Mật khẩu = 7 ký tự', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admin');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  const actualResult = await page.locator('div.ant-form-item-explain-error');

  // Không xuất hiện thông báo lỗi
  await expect(actualResult).not.toBeInViewport();
});

test('TC5 - Login: Mật khẩu = 9 ký tự', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admin');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@12');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  const actualResult = await page.locator('div.ant-form-item-explain-error');

  // Không xuất hiện thông báo lỗi
  await expect(actualResult).not.toBeInViewport();
});

test('TC6 - Login: Mật khẩu = 5 ký tự', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admin');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Teste');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  const actualResult = await page.locator('div.ant-form-item-explain-error');

  // Xuất hiện thông báo lỗi
  await expect(actualResult).toHaveText('Độ dài mật khẩu phải nằm trong khoảng 6 đến 10 ký tự');
});

test('TC7 - Login: Mật khẩu = 11 ký tự', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admin');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@1234');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  const actualResult = await page.locator('div.ant-form-item-explain-error');

  // Xuất hiện thông báo lỗi
  await expect(actualResult).toHaveText('Độ dài mật khẩu phải nằm trong khoảng 6 đến 10 ký tự');
});