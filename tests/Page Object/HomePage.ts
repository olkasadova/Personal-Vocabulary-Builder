import {Locator, expect, Page } from "@playwright/test";

export class HomePage{
    readonly page:Page;
    readonly addYourWordsLink:Locator;
    readonly welcomeUser:Locator;


    constructor (page:Page){
        this.page = page;
        this.addYourWordsLink = page.locator('a', {hasText:'Add Your Words'});
        this.welcomeUser = page.locator('h2', {hasText:'Welcome Olha'});
    }
}