import { Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/basePage';

export default class WordCardBlock extends BasePage{
    readonly page: Page;
    viewDescriptionButton: Locator;

    //add locators
    

    constructor(page: Page){
        super(page);
        this.page = page;
        this.viewDescriptionButton = page.locator('.word-button-desc');
    }
}