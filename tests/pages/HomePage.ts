import {Locator, expect, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import Header from "./header";
import WordCardBlock from "./wordCardBlock";


export default class HomePage extends BasePage{
    header: Header;
    wordCardBlock: WordCardBlock;
    

    constructor (page:Page){
        super(page);
        this.header = new Header(page);
        this.wordCardBlock = new WordCardBlock(page);
    }

    async goHome(){
        await this.page.goto ('http://localhost:3000/');
    }
}