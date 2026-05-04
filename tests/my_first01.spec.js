const {test,expect} = require('@playwright/test')
//const { title } = require('node:process')
//this is one way to // 
// const {hello} = require('./demo/hello')
//this is another way to import 
// import {hello} from './demo/hello'
//console.log (hello());

test('My first01',async ({page}) => {

await page.goto('https://shop.lululemon.com/')
//await page.locator('.modal_closeButton__rGjHL').click()
await page.getByTitle('Close').click();
await page.locator('//a[text()="Women"]').hover()
await page.getByTestId('l1-0-l3-item-Coats & Jackets').click();
//await page.getByText('Coats & Jackets').click()
//await page.pause()
await page.locator('//a[contains(text(),"Always Effortless Jacket")]').click()
//await page.getByTitle('Light Ivory').click()
await page.getByRole('radio', { name: 'Light Ivory' }).click();
await page.getByRole('radio', { name: 'Black' }).click();
await page.getByRole('radio', { name: 'XXS' }).nth(-1).click();
//await page.getByRole('button',{name:'Add to Bag'}).click()
await page.getByRole('button', { name: 'Add to Bag', exact: true }).click();
await page.getByRole('link', { name: 'View Bag & Checkout' }).click()
//await page.locator('//span[contains(text(),"XXS")]').click()
await page.pause()








})

