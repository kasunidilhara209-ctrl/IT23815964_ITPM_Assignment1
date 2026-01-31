import { test, expect } from '@playwright/test';

test.describe('Negative Functional Tests – Singlish to Sinhala', () => {

  async function translate(page, input) {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    const inputBox = page.locator('textarea:not([readonly])');
    const outputBox = page.locator('textarea[readonly]');

    await inputBox.fill(input);

    
    await expect(outputBox).not.toHaveValue('');

    return (await outputBox.inputValue()).trim();
  }

  const negativeTestCases = [
    { id: 'Neg_Fun_001', input: 'matanambaeeyathekkavaedakaranna', expected: 'මට නම් බැ එයත් එක්ක වැඩ කරන්න' },
    { id: 'Neg_Fun_002', input: 'oyaa @@@@enavadha maath ekka gedhara yanna???', expected: 'ඔයා එනවද මාත් එක්ක ගෙදර යන්න?' },
    { id: 'Neg_Fun_003', input: 'oyaa kaemathima paata mokakdha???????', expected: 'ඔයා කැමතිම පාට මොකක්ද?' },
    { id: 'Neg_Fun_004', input: 'chuttak chuttak chuttak balanna maa dhihaa', expected: 'චුට්ටක් බලන්න මා දිහා' },
    { id: 'Neg_Fun_005', input: 'mamaeyaataakamaethieyaapandithanisaa', expected: 'මම එයාට අකමැති එයා හරිම පන්ඩිත නිසා' },
    { id: 'Neg_Fun_006', input: 'yanavaa mama gedhara', expected: 'මම ගෙදර යනවා' },
    { id: 'Neg_Fun_007', input: 'mama                bath               kanavaa.', expected: 'මම බත් කනවා.' },
    { id: 'Neg_Fun_008', input: 'adoo machan ela', expected: 'ඩෝ! මචන් එල' }
  ];

  for (const tc of negativeTestCases) {
    test(`${tc.id} - Negative Functional Test`, async ({ page }) => {
      const actual = await translate(page, tc.input);

      
      expect(actual).not.toBe(tc.expected);
    });
  }

});
