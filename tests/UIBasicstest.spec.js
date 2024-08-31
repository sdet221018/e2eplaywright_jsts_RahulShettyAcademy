const {test} = require('@playwright/test')

test.only('Browser Context Playwright Test', async ({browser})=> {
// playwright code is Asynchronous
// Step 1 -- Open Browser
// Step 2 -- Enter User Name & Password
// Step 3 -- Click
// In JavaScript, all steps are asynchronous and hence they all try to run simultaneously. Hence, the need await keyword.

// To Open an instance of a Chrome or Firefox or Edge or Safari - plugins / cookies would have already present in the browser
const context = await browser.newContext();
// To create a page of Browser and Open a New page
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test('Page Playwright Test', async ({page})=> {
    page.goto("https://www.google.com/");
});