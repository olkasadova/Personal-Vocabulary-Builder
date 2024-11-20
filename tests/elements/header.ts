import { Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/basePage';

export default class Header extends BasePage{
    readonly page: Page;
    addYourWordsLink: Locator;
    userName: Locator;
    aboutLink: Locator;
    buttonSynonyms: Locator;

    constructor(page: Page){
        super(page);
        this.page = page;
        this.userName = page.locator('h2', {hasText: 'Welcome Olha'});
        this.addYourWordsLink = page.locator ('a', {hasText: 'Add Your Words'});
        this.aboutLink = page.locator (('li a'), {hasText: 'About'});
        this.buttonSynonyms = page.locator('button', {hasText: 'View synonyms'}).first();
    }
}