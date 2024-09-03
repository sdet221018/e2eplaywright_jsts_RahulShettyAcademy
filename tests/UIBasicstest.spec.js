const {test, expect} = require('@playwright/test')

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

    const userName = page.locator("#username");
    const password = page.locator("#password");
    const signIn = page.locator("#signInBtn");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

    // css
    await userName.fill("rahulshetty");
    await password.fill("learning");
    await signIn.click();

    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    await signIn.click();

    // To Return first WebElement (n=0) when there are multiple web elements located.
    console.log(await page.locator(".card-body a").first().textContent());
    // To Return nth WebElement (n=1) when there are multiple web elements located.
    console.log(await page.locator(".card-body a").nth(1).textContent());
    // To Return last WebElement (n=3) when there are multiple web elements located.
    console.log(await page.locator(".card-body a").last().textContent());

});

test('Page Playwright Test', async ({page})=> {
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});