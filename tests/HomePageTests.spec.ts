import { test, expect } from '@playwright/test';
import {HomePage} from './Page Object/HomePage'; 

test.only('click Add Your Words link', async ({ page }) => {
    const homePage = new HomePage(page);
    const newTabPromise = page.waitForEvent("popup");

    await page.goto('http://localhost:3002/');
    //await expect(homePage.welcomeUser).toBeVisible();
    await homePage.addYourWordsLink.click();
    const newTab = await newTabPromise;
    await newTab.waitForLoadState();

    expect(newTab.url()).toBe('http://localhost:3002/add');
});
