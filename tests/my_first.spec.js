const {test,expect} = require('@playwright/test')
//const { title } = require('node:process')
//this is one way to // 
// const {hello} = require('./demo/hello')
//this is another way to import 
// import {hello} from './demo/hello'
//console.log (hello());

test('My first',async ({page}) => {

await page.goto('https://google.com')
await expect(page).toHaveTitle('Google')

})

