
// Task 1 Count total products in myntra website.
// import { test, expect } from '@playwright/test';

// test('Count total products', async ({ page }) => {

//   await page.goto('https://www.myntra.com/boy-tshirts', {
//     waitUntil: 'domcontentloaded', // less strict than networkidle
//     timeout: 60000
//   });

//   await page.waitForSelector('.product-base', { timeout: 15000 });

//   const count = await page.locator('.product-base').count();

//   console.log('Total Products:', count);
// });

//Task 2 Find the lowest price of the product in Myntra website.
// import { test, expect } from '@playwright/test';

// test('Find minimum price', async ({ page }) => {

//   await page.goto('https://www.myntra.com/boy-tshirts', {
//     waitUntil: 'domcontentloaded'
//   });

//   await page.waitForSelector('.product-base');

//   // get all price texts
//   const prices = await page.locator('.product-discountedPrice').allTextContents();

//   // convert to numbers
//   const priceNumbers = prices.map(p => parseInt(p.replace(/[^\d]/g, '')));

//   // find minimum
//   const minPrice = Math.min(...priceNumbers);

//   console.log('Minimum Price:', minPrice);

// });



//Task 3 Find the min price of the product name.
// import { test, expect } from '@playwright/test';

// test('Find minimum discounted price and product name', async ({ page }) => {

//   await page.goto('https://www.myntra.com/boy-tshirts', {
//     waitUntil: 'domcontentloaded'
//   });

//   await page.waitForSelector('.product-base');

//   const productCount = await page.locator('.product-base').count();

//   let minPrice = Infinity;
//   let minProductName = '';

//   for (let i = 0; i < productCount; i++) {

//     const product = page.locator('.product-base').nth(i);

//     const priceLocator = product.locator('span.product-discountedPrice');
//     const nameLocator = product.locator('h4.product-product');

//     // skip if price not visible (important fix)
//     if (!(await priceLocator.isVisible())) continue;

//     const priceText = await priceLocator.textContent();
//     const name = await nameLocator.textContent();

//     const price = parseInt(priceText.replace(/[^\d]/g, ''));

//     if (!isNaN(price) && price < minPrice) {
//       minPrice = price;
//       minProductName = name?.trim();
//     }
//   }

//   console.log('Minimum Price:', minPrice);
//   console.log('Product Name:', minProductName);

// });


//Task 4 Get discounted price and actual price of the product in Myntra website.
// import { test, expect } from '@playwright/test';

// test('Discounted + Actual price sum', async ({ page }) => {

//   await page.goto('https://www.myntra.com/boy-tshirts', {
//     waitUntil: 'domcontentloaded'
//   });

//   await page.waitForSelector('.product-base');

//   const count = await page.locator('.product-base').count();

//   for (let i = 0; i < count; i++) {

//     const product = page.locator('.product-base').nth(i);

//     const discountLocator = product.locator('span.product-discountedPrice');
//     const actualLocator = product.locator('span.product-strike');

//     // skip if discounted price not visible
//     if (!(await discountLocator.isVisible())) continue;

//     const discountText = await discountLocator.textContent();
//     const actualText = await actualLocator.textContent().catch(() => null);

//     const discountPrice = parseInt(discountText.replace(/[^\d]/g, ''));

//     let actualPrice = 0; // default 0 if not available
//     if (actualText) {
//       actualPrice = parseInt(actualText.replace(/[^\d]/g, ''));
//     }

//     const totalPrice = discountPrice + actualPrice;

//     console.log(`Product ${i + 1}`);
//     console.log('Discount Price:', discountPrice);
//     console.log('Actual Price:', actualPrice);
//     console.log('Total (Discount + Actual):', totalPrice);
//     console.log('----------------------');
//   }

// });


// import { test } from '@playwright/test';

// test('myntra min price', async ({ page }) => {
//   await page.goto('https://www.myntra.com/boy-tshirts');

//   let card = page.locator('//li[@class="product-base"]'), count = await card.count();

//   let min = Infinity, name = '';

//   for (let i = 0; i < count; i++) {

//     let priceEl = card.nth(i).locator('.product-discountedPrice');

//     if (await priceEl.count() === 0) continue; // 🔥 skip if no discount price

//     let price = await priceEl.textContent();
//     let p = parseInt(price.replace(/[^0-9]/g, ''));

//     if (p < min) {
//       min = p;
//       name = await card.nth(i).locator('h3').textContent();
//     }
//   }

//   console.log('Total Products:', count);
//   console.log('Min Price:', min);
//   console.log('Product Name:', name);
// });


// import { test } from '@playwright/test';

// test('min price only', async ({ page }) => {
//   await page.goto('https://www.myntra.com/boy-tshirts');

//   //let prices = page.locator('//*[@class="product-base"]//span[@class="product-discountedPrice"]');
//   let prices = page.locator('//*[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice"]');
//   let all = await prices.allTextContents();

//   let min = Math.min(...all.map(p => parseInt(p.replace(/\D/g, ''))));

//   console.log('Min Price:', min);
// });


// import { test } from '@playwright/test';

// test('change text', async ({ page }) => {
//   await page.goto('https://in.search.yahoo.com/');

//   let ele = page.locator("(//div[contains(@class,'trendingNow')]//a[contains(@class,'keyword-text')])[4]");

//   await ele.evaluate(e => e.textContent = 'Anandh');
//   await page.waitForTimeout(5000); // wait for 2 seconds to see the change
//   console.log(await ele.textContent());
// });

// @ts-check
//import { test } from '@playwright/test';

// test('Click first Google suggestion', async ({ page }) => {

//   await page.goto('https://www.google.com/');

//   await page.locator("//textarea[@title='Search']").fill("india");

//   const firstSuggestion = page.locator("(//textarea[@title='Search']/ancestor::form[@role='search']//ul[@role='listbox']/li[@role='presentation'])[1]");

//  // await firstSuggestion.waitFor();

//   //console.log(await firstSuggestion.textContent());

//   await firstSuggestion.click();
//   await page.waitForTimeout(5000); // wait for 5 seconds to see the result

// });

// test ('Flipkar login popu up', async  ({page}) => {
//   await page.goto('https://www.flipkart.com/');
//   await alert(page, "Login popup opened");
//   await page.waitForSelector('//span[@role="button"]').click();
//   await page.waitForTimeout(5000); // wait for 5 seconds to see the result
//  await page.locator("(//div[@id='container']//*[text()='Login'])[2]").click();
//   await page.waitForTimeout(5000); // wait for 5 seconds to see the result
// })

//mport { test } from '@playwright/test';

// test('Flipkart login popup', async ({ page }) => {

//   await page.goto('https://www.flipkart.com/');

//   //console.log("Login popup opened");

//   await page.locator('//span[@role="button"]').click();

//   await page.waitForTimeout(5000);

//   await page.locator("//div[@data-id='stickyElement']//descendant::a[text()='Login']").click();
//   //await page.locator("//div[@data-id='stickyElement']//descendant::a[text()='Login']").click();

//   await page.waitForTimeout(5000);

// });


// test('New crm login', async  ({page}) => {
//   await page.goto('https://crm.zutok.in/print/ps/admin/authentication'),{
//   waitUntil: 'domcontentloaded'
// });
//   await page.locator('//input[@name="email"]').fill('kpbalaz@gmail.com');
//   await page.locator('//input[@name="password"]').fill('POGXZutok001');
//   await page.locator('//button[@type="submit"]').click();
//   await page.waitForURL('https://crm.zutok.in/print/ps/admin/');
//   await page.waitForLoadState('domcontentloaded');
//   await page.locator('//*[@class="sidebar"]//descendant::li[@class="menu-item-leads"]//child::a[@aria-expanded="false"]//child::span[@class="menu-text"]').click();
//   await page.locator('//a[text()="New Lead"]').click();
//   await page.locator('//*[@name="status"]//following-sibling::button').click();
//   await page.waitForTimeout(60000); // wait for 10 seconds to see the result
// })

//import { test } from '@playwright/test';

// test('Printongo Website Check', async ({ page }) => {

//   await page.goto('https://www.printongo.com/admin/', {
//     waitUntil: 'domcontentloaded'
//   });

//   await page.locator('//*[@name="username"]').fill('Anandh');

//   await page.locator('//*[@name="password"]').fill('Bnb@26072002');

//   await page.locator('//span[text()="Login"]').click();

//   await page.waitForURL('https://www.printongo.com/admin/welcome.php');

//   await page.waitForLoadState('domcontentloaded');

//   await page.locator("//div[@class='sidebar-inner']//descendant::a[@class='nav-link dropdown-toggle']/child::span[contains(text(),'Products')]").click();
//   await page.locator("//div[@class='sidebar-inner']/descendant::ul[@class='submenu-inner']/descendant::span[contains(text(),'Print Products')]").click();
//   await page.waitForURL('https://www.printongo.com/admin/product_listing.php');

//   await page.waitForLoadState('domcontentloaded');

//   await page.locator('//*[@placeholder="Search"]').fill('Round Stickers');
//   await page.locator('//div[@class="row"]//descendant::form[@class="form-inline"]//descendant::button[@name="search"]').click();
//   await page.locator("//tr[@class='products_id_259 even']//button[@data-toggle='dropdown'][contains(text(),'Action')]").click();  //await page.locator('//a[text()="New Lead"]').click();

//   //await page.locator('//*[@name="status"]/following-sibling::button').click();

//   await page.waitForTimeout(5000);

// });


// @ts-check
//import { test } from '@playwright/test';

// test('Print CSK PTS value', async ({ page }) => {

//   await page.goto('https://www.iplt20.com/matches/points-table');

//   let pts = page.locator("//table[@class='ih-td-tab']//tbody[@id='pointsdata']//h2[contains(text(),'CSK')]/ancestor::*[@ng-repeat='list in pointsTableData']//descendant::td[@class='bt ng-binding']");

//   await pts.waitFor();

//   console.log(await pts.textContent());

//   await page.waitForTimeout(5000);

// });

// @ts-check
//import { test, expect } from '@playwright/test';

// test('Flipkart Sign Up', async ({ page }) => {

//   await page.goto('https://www.flipkart.com/');

//   // Close login popup
//   await page.locator("//span[@role='button']").click();

//   // Hover on Login
//   await page.locator("//a[@title='Login']").hover();

//   // Click Sign Up
//   await page.locator("//a[@title='Sign Up']/span[contains(text(),'Sign Up')]").click();

//   // Wait for Sign Up page
//   //await page.waitForURL("**/account/login?signup=true**");

//   // Enter Mobile Number
//   await page.locator("//input[@type='text' and @maxlength='10']").fill("9442392745");
//   // Click Continue
//   await page.locator("//button[@type='submit']//span[contains(text(),'CONTINUE')]").click();

//   await page.waitForTimeout(5000);

// });

import { test } from '@playwright/test';
import employees from './employee.json';

test('Print employees having skills', async () => {

    for (const emp of employees) {

        if (emp.skills.length > 0) {

            console.log("Employee :", emp.firstName);
            console.log("Skills   :", emp.skills.includes("java"));
            console.log("--------------------");
        }
    }

});