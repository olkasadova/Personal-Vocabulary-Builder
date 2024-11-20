import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage';

test('show card block and verify data displayed', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.goHome();
    await homePage.mainVocabularyReminder.reviewWordsButton.click();
    await homePage.mainVocabularyReminder.cardBlock.isVisible();
});