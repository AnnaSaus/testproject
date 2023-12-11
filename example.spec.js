import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');

test('has title', (async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  //open page - Step 1
    await page.goto('https://the-internet.herokuapp.com/');
  //Check "Welcome to the-internet" text is displayed - Step 2
    await expect(page.getByText('Welcome to the-internet')).toBeVisible();
  //Click "Form Authentication" button - Step 3
    await page.click('text=Form Authentication');
  //Check "Login Page" text is displayed - Step 4
    await expect(page.getByText('Login Page')).toBeVisible();
  //Enter "tomsmith" in the "Username" input, Enter "SuperSecretPassword!" in the "Password" input - Step 5,6  
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
  //Click "Login" button - Step 7
    await page.click('button:has-text("Login")');
  // Check "You logged into a secure area!" text is displayed - Step 8
    await expect(page.getByText('You logged into a secure area!')).toBeVisible();
  } 
));
