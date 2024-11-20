import {Locator, expect, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import Header from "../elements/header";
import WordCardBlock from "../elements/wordCardBlock";
import MainVocabularyReminder from "../elements/mainVocabularyReminder";


export default class HomePage extends BasePage{
    header: Header;
    wordCardBlock: WordCardBlock;
    mainVocabularyReminder: MainVocabularyReminder;
    

    constructor (page:Page){
        super(page);
        this.header = new Header(page);
        this.wordCardBlock = new WordCardBlock(page);
        this.mainVocabularyReminder = new MainVocabularyReminder(page);
    }

    async goHome(){
        await this.page.goto ('http://localhost:3000/');
    }
}