import {test, expect} from '@playwright/test';

const myWords = [
    {
        "id": 1,
        "title": "Thousand splendid suns",
        "author": "Fric Eromm",
        "genre": "philosophy",
        "price": "9.95",
        "rating": "★★★★☆",
        "stock": "1"
    }
]

test ('basic mock test' ,async({page}) => {
    await page.route('https://danube-webshop.herokuapp.com/api/books', route=>{
        console.log (route.request().url(), route.request().method())
        route.fulfill({body: JSON.stringify(myWords)});
    });

    await page.goto ('https://danube-webshop.herokuapp.com/');
    await page.screenshot ({path: 'window.png'});
});

test ('abort mock test' ,async({page}) => {
    await page.route('**/*.css', route=>{
        console.log (route.request().url(), route.request().method())
        route.abort();
    });
    
    await page.goto ('https://danube-webshop.herokuapp.com/');
    await page.screenshot ({path: 'window.png'});
});

test.only ('fallback mock test' ,async({page}) => {
    await page.route('**/*.css', route=>{
        console.log ("First handler");
        route.continue();
    });

    await page.route('**/*.css', route=>{
        console.log ("second handler");
        route.continue();
    });

    await page.route('**/*.css', route=>{
        console.log ("Third handler");
        route.fallback();
    });
    
    await page.goto ('https://danube-webshop.herokuapp.com/');
    await page.screenshot ({path: 'window.png'});
});
    