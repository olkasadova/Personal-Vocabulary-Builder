import { Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/basePage';

export default class MainVocabularyReminder extends BasePage{
    readonly page: Page;
    cardBlock: Locator;
    reviewWordsButton: Locator;
    viewSynonymsButton: Locator;
    viewExampleButton: Locator;

    constructor(page: Page){
        super(page);
        this.page = page;
        this.cardBlock = page.locator('.word-card').nth(0);
        this.reviewWordsButton = page.locator('.find-button');
        this.viewSynonymsButton = page.locator('.word-button-synonyms');
        this.viewExampleButton = page.locator('.word-button-example');
    }
    public async clickReviewWordsButton(){
        await this.reviewWordsButton.click();
    }
    public async clickViewSynonymsButton(){
        await this.viewSynonymsButton.first().click();
    }
    public async clickViewExampleButton(){
        await this.viewExampleButton.first().click();
    }
}