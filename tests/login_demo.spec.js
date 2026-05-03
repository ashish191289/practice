import {test,expect} from '@playwright/test'
import { TIMEOUT } from 'node:dns'

test('Demo Login test 1',async({page}) =>{

    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.getByRole('textbox', { name: 'Enter your username' }).fill("Hello")
    await page.getByRole('textbox', { name: 'Enter your password' }).fill("password")
    await page.waitForSelector('text=Sign in',{TIMEOUT:5000})
    await page.getByRole('link', { name: 'Sign in' }).click()
    
})

test.only('Demo Login test 2',async({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('span').filter({ hasText: 'richmon golane' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});

