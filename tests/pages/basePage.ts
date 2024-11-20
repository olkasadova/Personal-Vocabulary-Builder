import {Locator, expect, Page } from "@playwright/test";

export class BasePage{
    page:Page;

    constructor (page:Page){
        this.page = page;
    }

    async refreshCurrentPage(){
        await this.page.reload();
    }

    async openPage(path:string){
        await this.page.goto(path);
    }
    async scrollToPageBottom(){
        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
    }

}