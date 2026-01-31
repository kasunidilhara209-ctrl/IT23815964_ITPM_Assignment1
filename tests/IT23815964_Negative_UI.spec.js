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
    { id: 'Neg_UI_001', input: 'mama iiye gedhara gihin apee amma hadhala thibba rasa bath eka kala'.repeat(5), expected: 'මම ඊයෙ ගෙදර ගිහින් අපේ අම්ම හදල තිබ්බ රස බත් එක කල'.repeat(5) },
    { id: 'Neg_UI_002', input: 'mama innam.oyaa enavadha?', expected: 'මම ඉන්නම්.\nඔයා එනවද?' }
  ];

  for (const tc of negativeTestCases) {
    test(`${tc.id} - Negative Functional Test`, async ({ page }) => {
      const actual = await translate(page, tc.input);

      expect(actual).not.toBe(tc.expected);
    });
  }

});
