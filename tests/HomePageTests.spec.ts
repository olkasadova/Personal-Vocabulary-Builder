import { test, expect } from '@playwright/test';
import {HomePage} from './Page Object/HomePage'; 


test('click Add Your Words link', async ({ page }) => {
    const homePage = new HomePage(page);
    const newTabPromise = page.waitForEvent("popup");

    await homePage.goHome();
    await homePage.userName.isVisible();
    await homePage.addYourWordsLink.click();
    const newTab = await newTabPromise;
    await newTab.waitForLoadState();

    expect(newTab.url()).toBe('http://localhost:3002/add');
});

test('click About', async ({ page }) => {
    const homePage = new HomePage(page);
    const newTabPromise = page.waitForEvent("popup");

    await homePage.goHome();
    await homePage.aboutLink.click();
    const newTab = await newTabPromise;
    await newTab.waitForLoadState();

    expect(newTab.url()).toBe('http://localhost:3002/about');
});

test('click button Synonyms', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goHome();
    await homePage.buttonSynonyms.click();
    expect(page.locator ('p', {hasText: 'Olha Sadova'}).first().isVisible());

});
