import { test, expect } from '@playwright/test';

const testCases = [
  { id: 'Pos_Fun_001', input: 'mama gedhara inne.', expected: 'මම ගෙදර ඉන්නේ.' },
  { id: 'Pos_Fun_002', input: 'mata podi udhavvak oonee.', expected: 'මට පොඩි උදව්වක් ඕනේ.' },
  { id: 'Pos_Fun_003', input: 'karuNaakaralaa inna.', expected: 'කරුණාකරලා ඉන්න.' },
  { id: 'Pos_Fun_004', input: 'mama gedhara yanavaa.\noya enavadha?', expected: 'මම ගෙදර යනවා.\nඔය එනවද?' },
  { id: 'Pos_Fun_005', input: '7.30 AM venakota enna.', expected: '7.30 AM වෙනකොට එන්න.' },
  { id: 'Pos_Fun_006', input: 'oyaa hodhindha?', expected: 'ඔයා හොදින්ද?' },
  { id: 'Pos_Fun_007', input: 'mata ID eka dhenna.', expected: 'මට ID එක දෙන්න.' },
  { id: 'Pos_Fun_008', input: 'hari hari', expected: 'හරි හරි' },
  { id: 'Pos_Fun_009', input: 'meheta vahina nisaa,mama adha gedhara enna parakku veyi.', expected: 'මෙහෙට වහින නිසා,මම අද ගෙදර එන්න පරක්කු වෙයි.' },
  { id: 'Pos_Fun_010', input: 'machan mata vathura tikak dhiipanko', expected: 'මචන් මට වතුර ටිකක් දීපන්කො' },
  { id: 'Pos_Fun_011', input: 'oyaa heta enavadha?api heta kohe hari yamudha?', expected: 'ඔයා හෙට එනවද?අපි හෙට කොහෙ හරි යමුද?' },
  { id: 'Pos_Fun_012', input: 'karuNaakaralaa eeka dhenna.mama balannam.', expected: 'කරුණාකරලා ඒක දෙන්න.මම බලන්නම්.' },
  { id: 'Pos_Fun_013', input: 'dhaen mama enavaa.mama aavata pasuva api kanna yamu.iita passee film eka balanna yamu.', expected: 'දැන් මම එනවා.මම ආවට පසුව අපි කන්න යමු.ඊට පස්සේ film එක බලන්න යමු.' },
  { id: 'Pos_Fun_014', input: 'mama office yanavaa.', expected: 'මම office යනවා.' },
  { id: 'Pos_Fun_015', input: 'vaessoth api trip eka cancel karanavaa.', expected: 'වැස්සොත් අපි trip එක cancel කරනවා.' },
  { id: 'Pos_Fun_016', input: 'oyaata adha enna puluvandha?', expected: 'ඔයාට අද එන්න පුලුවන්ද?' },
  { id: 'Pos_Fun_017', input: 'Documents tika email ekata attach karalaa evanna.', expected: 'Documents ටික email එකට attach කරලා එවන්න.' },
  { id: 'Pos_Fun_018', input: 'WhatsApp call aran mata vistharee kiyanna.', expected: 'WhatsApp call අරන් මට විස්තරේ කියන්න.' },
  { id: 'Pos_Fun_019', input: 'mama iiyee exam eka livvaa.', expected: 'මම ඊයේ exam එක ලිව්වා.' },
  { id: 'Pos_Fun_020', input: 'karunaakarala mata kiyanna oyaa ee vaeradhdha kalaadha nadhdha kiyalaa', expected: 'කරුනාකරල මට කියන්න ඔයා ඒ වැරද්ද කලාද නද්ද කියලා' },
  { id: 'Pos_Fun_021', input: 'mama campus giyaata passe,magee jiivithee godak dheval venas vunaa,mata aluth vishayan igena ganna laebuna,aluth yaaluvoth hamu vunaa,ee vageema vagakiim vaedi vunaa.', expected: 'මම campus ගියාට පස්සෙ,මගේ ජීවිතේ ගොඩක් දෙවල් වෙනස් වුනා,මට අලුත් විශයන් ඉගෙන ගන්න ලැබුන,අලුත් යාලුවොත් හමු වුනා,ඒ වගේම වගකීම් වැඩි වුනා.' },
  { id: 'Pos_Fun_022', input: 'teacher paadama hodhata kiyala dhunna,lamayinnuth hodhata ahagena hitiyaa.', expected: 'teacher පාඩම හොදට කියල දුන්න,ලමයින්නුත් හොදට අහගෙන හිටියා.' },
  { id: 'Pos_Fun_023', input: 'vaah! ee gavuma harima lassanayi.', expected: 'වාහ්! ඒ ගවුම හරිම ලස්සනයි.' },
  { id: 'Pos_Fun_024', input: 'mata harima kammaeli.', expected: 'මට හරිම කම්මැලි.' },
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
