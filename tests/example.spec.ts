import { test, expect } from '@playwright/test';  

test('test screen', async ({ page }) => {
  await page.goto(`https://survey-answer.mint-dev.macromill.com/?research=SURVEY003-en&monitor=${new Date().getTime()}&market=392&language=en`);
  await page.getByTestId('start_answer').click();
  await page.getByTestId('single_choice_simple_1').locator('label').click();
  await page.getByTestId('submit_button').click();
  await page.getByTestId('dropdown_selector').click();
  await page.getByTestId('single_choice_simple_2').locator('label').click();
  await page.getByTestId('submit_button').click();
  await expect(page.getByText('We would give you 2 points later.')).toBeVisible();  
});