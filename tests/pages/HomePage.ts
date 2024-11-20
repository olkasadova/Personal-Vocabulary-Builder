import {Locator, expect, Page } from "@playwright/test";

export class HomePage{
    page: Page;
    addYourWordsLink: Locator;
    userName: Locator;
    aboutLink: Locator;
    buttonSynonyms: Locator;

    constructor (page:Page){
        this.page = page;
        this.userName = page.locator('h2', {hasText: 'Welcome Olha'});
        this.addYourWordsLink = page.locator ('a', {hasText: 'Add Your Words'});
        this.aboutLink = page.locator (('li a'), {hasText: 'About'});
        this.buttonSynonyms = page.locator('button', {hasText: 'View synonyms'}).first();
    }

    async goHome(){
        await this.page.goto ('http://localhost:3002/');
    }
}