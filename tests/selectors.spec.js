import { test, expect } from '@playwright/test'

test('Selectors Demo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com')
    await page.pause()
    await page.locator('id=user-name').fill("standard_user")
    await page.locator('.submit-button').click()
    await page.pause()
   await page.locator('//input[@name="password"]').fill("oohhhwow")
await page.locator("//input[@type='submit']").hover()
await page.locator("//input[@value='Login']").click()
await page.locator('text=Login').click()
await page.locator ('input:has-text("Login")').click()


});