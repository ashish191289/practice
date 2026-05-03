import { test, expect } from '@playwright/test';

test('demo1',async({page}) => {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.getByRole('textbox',{name: 'username'}).fill("Admin")
await page.getByPlaceholder('password').fill("admin123")
await page.pause()
await page.locator('.oxd-button').click()
 await expect(page).toHaveURL(/.*dashboard/);

await page.pause()




})


