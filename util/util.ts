import { Page, expect } from "@playwright/test";

export const testPage = async (page: Page):Promise<Page> =>{
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.goto('https://playwright.dev/');
  return page
}