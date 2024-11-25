import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage';
import MainVocabularyReminder from '../elements/mainVocabularyReminder';

test('show card block and verify data displayed', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.goHome();
    await homePage.mainVocabularyReminder.reviewWordsButton.click();
    await homePage.mainVocabularyReminder.cardBlock.isVisible();
});

test('click button Synonyms', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goHome();
    await homePage.mainVocabularyReminder.clickReviewWordsButton();
    await homePage.mainVocabularyReminder.clickViewSynonymsButton();
    expect(page.locator ('p', {hasText: 'Olha Sadova'}).first().isVisible());

});