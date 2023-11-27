const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

    await page.goto('https://the-internet.herokuapp.com/');

    
    await page.waitForSelector('h1');
    const welcomeMessage = await page.$eval('h1', (el) => el.textContent);

    await page.click('text=Form Authentication');

   
    await page.waitForSelector('h2');
    const loginMessage = await page.$eval('h2', (el) => el.textContent);
    

    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');

    
    await page.click('button:has-text("Login")');

    
    await page.waitForSelector('#flash');
    const successText = await page.$eval('#flash', (el) => el.textContent);
  }
    
);