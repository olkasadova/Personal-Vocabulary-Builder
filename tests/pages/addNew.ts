import {Locator, expect, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export default class AddNew extends BasePage{

    constructor (page:Page){
        super(page);
    }
}