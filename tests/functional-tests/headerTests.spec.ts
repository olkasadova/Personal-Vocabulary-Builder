import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage';

test('click Add Your Words link', async ({ page }) => {
    const homePage = new HomePage(page);
    const newTabPromise = page.waitForEvent("popup");

    await homePage.goHome();
    await homePage.header.userName.isVisible();
    await homePage.header.addYourWordsLink.click();
    const newTab = await newTabPromise;
    await newTab.waitForLoadState();

    expect(newTab.url()).toBe('http://localhost:3000/add');
});

test('click About', async ({ page }) => {
    const homePage = new HomePage(page);
    const newTabPromise = page.waitForEvent("popup");

    await homePage.goHome();
    await homePage.header.aboutLink.click();
    const newTab = await newTabPromise;
    await newTab.waitForLoadState();

    expect(newTab.url()).toBe('http://localhost:3000/about');
});
//update test, add synonyms validation