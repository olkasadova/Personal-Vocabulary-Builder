import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export default class WordCardBlock extends BasePage{
    readonly page: Page;
    //add locators
    

    constructor(page: Page){
        super(page);
        this.page = page;
    }
}