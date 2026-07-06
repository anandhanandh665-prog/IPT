// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// SYNTAX
//BASIC-> //tagname[@att = 'value']
          //tag name[TEXT()='value']
//INDEXING->(//tagname[@att='value'])[index]
             //->(//)


//RELATION BETWEEN TAGS
//1.PARENT
//2.CHILD
//3.PRERCEDING-SIBLING
//4.FOLLOWING-SIBLING
//5.ANCESTOR
//6.DESCENDANT




//CSS selector
//BASIC -> tagname[att='value'] or [att='value']
//CONTAINS-> tagname[att*='value'] or [att*='value']




//INBUILT LOCATORS
//1. getByText();-> await page.getByText('Values');
//2. getByTestId()-> await page.getByTestId('Values'); ->attribute (provided by developer)
//3. getByPlaceholder()-> await page.getByPlaceholder('Values');-> attribute
//4. getByAltText()-> await page.getByAltText('Values');->attribute in <img>tag
//5. getByTitle()-> await page.getByTitle('Values');
//6. getByLabel()-> await page.getByLabel('Values');
//7. getByRole()-> await page.getByRole('button':{name:'values'})

//--------------

//a[@href="/gp/aw/gb/?ref_=navm_hdr_deals"]
//tagname[@att name='att va;ue']

const { test, expect } = require('@playwright/test');

test('search for iPhone on Amazon', async ({ page }) => {
  // 1. Go to Amazon
  await page.goto('https://www.amazon.com');

  // 2. Click on the search bar and type "iPhone"
  const searchBar = page.locator('//div[@class="nav-search-field "]//input');
  await searchBar.click();
  await searchBar.fill('iPhone');

  // 3. Click the search button
  await page.locator('#nav-search-submit-button').click();

  // 4. Wait for results page to load
  await page.waitForLoadState('networkidle');

  // 5. Verify the nav-right section is visible (sanity check from your locator)
  const navRight = page.locator('(//div[@class="nav-right"])[1]');
  await expect(navRight).toBeVisible();

//  6. Verify search results actually show up for "iPhone"
//  await expect(page).toHaveURL(/k=iPhone/i);
// });

