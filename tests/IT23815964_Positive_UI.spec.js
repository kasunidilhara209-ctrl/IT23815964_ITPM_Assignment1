import { test, expect } from '@playwright/test';

const testCases = [
 
    { id: 'Pos_UI_001', input: 'oyaa enavaa kivva nisaa thamayi maath aavee', expected: 'ඔයා එනවා කිව්ව නිසා තමයි මාත් ආවේ' },
    { id: 'Pos_UI_002', input: 'mata badagini nae', expected: 'මට බඩගිනි නැ' },

];

testCases.forEach(({ id, input, expected }) => {
  test(`${id} - Auto-generated test`, async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);

    const sinhalaText = page.locator(`text=${expected}`);
    await expect(sinhalaText).toBeVisible({ timeout: 30000 });

    const output = await sinhalaText.innerText();

    expect(output).toContain(expected);
  });
});
