const {test, expect} = require('@playwright/test')

test('Web Client App login Test', async ({page})=> {
    // JS File - login js, DashboardPage
    const userName = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const signIn = page.locator("[value=Login]");
    const cardTitles = page.locator(".card");
    // const productName = 'Zara coat 3';
    const products = page.locator(".card-body");

    await page.goto("https://rahulshettyacademy.com/client");
    console.log(await page.title());
    await expect(page).toHaveTitle("Let's Shop");

    // css
    await userName.fill("anshika@gmail.com");
    await password.fill("Iamking@000");
    await signIn.click();
    // To wait untill all the page is loaded successfully.
    // DISCOURAGED wait until there are no network connections for at least 500 ms
    // await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();    
    console.log("titles: ", titles);

    await expect(page).toHaveTitle("Let's Shop");

    // To Return first WebElement (n=0) when there are multiple web elements located.
    console.log(await cardTitles.first().textContent());
    // To Return nth WebElement (n=1) when there are multiple web elements located.
    console.log(await cardTitles.nth(1).textContent());
    // To Return last WebElement (n=3) when there are multiple web elements located.
    console.log(await cardTitles.last().textContent());

    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
});