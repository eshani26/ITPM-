const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Line break input
    {
      tcId: 'Pos_Fun_001',
      name: 'Line break input',
      input: 'mama gedhara yanavaa.oyaa enavadha?',
      expected: 'මම ගෙදර යනවා.ඔයා එනවද?',
      category: 'Greeting / request / response',
      grammar: 'Line breaks',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Present tense variation',
      input: 'api thaama kanavaa',
      expected: 'අපි තාම කනවා', // FIXED: Removed trailing p
      category: 'Tenses (present)',
      grammar: 'Present tense variation',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Singular pronoun',
      input: 'eyaa gedhara giyaa.',
      expected: 'එයා ගෙදර ගියා.',
      category: 'Pronouns singular',
      grammar: 'Singular pronoun',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_004',
      name: 'Compound sentences',
      input: 'api passee kathaa karamu. meheta hoDHAtama vahinavaa saha goravanavaa. mata thaniyama gedhara inna tikak Bhaya hithenavaa. mata dhaen badagini nisaa mama kussiyata yanavaa monava hari kanna. vaessa adu unaama mama oyaata gannam.',
      expected: 'අපි පස්සේ කතා කරමු. මෙහෙට හොඳටම වහිනවා සහ ගොරවනවා. මට තනියම ගෙදර ඉන්න ටිකක් භය හිතෙනවා. මට දැන් බඩගිනි නිසා මම කුස්සියට යනවා මොනව හරි කන්න. වැස්ස අඩු උනාම මම ඔයාට ගන්නම්.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'L'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'Convert a short request phrase. Teams + WhatsApp',
      input: 'Teams meeting ekee link eka WhatsApp karanna',
      expected: 'Teams meeting එකේ link එක WhatsApp කරන්න',
      category: 'Mixed Singlish + English ',
      grammar: 'Greeting / request / response',
      length: 'S'
    },
    
  
    {
      tcId: 'Pos_Fun_006',
      name: 'Travel place and activity',
      input: 'api trip eka Kandy valata yamudha traffic nisaa yanakota parakkuveyi dha?',
      expected: 'අපි trip එක Kandy වලට යමුද traffic නිසා යනකොට පරක්කුවෙයි ද?',
      category: 'Interrogative (question)',
      grammar: 'Future tense question',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_007',
      name: 'Tense variations (past to present)',
      input: 'mama ee gaena balaaporoththu thiyaagena hitiyaa',
      expected: 'මම ඒගැන බලාපොරොත්තු තියාගෙන හිටියා',
      category: 'Daily language usage',
      grammar: 'Past to present tense variation',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'English abbreviations and short forms',
      input: 'ATM Card ekee number eka aethulathkara CVV keethaya labaadhenna',
      expected: 'ATM Card එකේ number එක ඇතුලත්කර CVV කේතය ලබාදෙන්න',
      category: 'English abbreviations Forms',
      grammar: 'English abbreviations and short forms',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Date formats',
      input: 'maarthu maasee mata exam ekak thiyenavaa',
      expected: 'මාර්තු මාසේ මට exam එකක් තියෙනවා',
      category: 'Date formats',
      grammar: 'Date format',
      length: 'S'
    },
    
    // Commands
    {
      tcId: 'Pos_Fun_010',
      name: 'Date formats Long length command',
      input: '11/11/2025 dhina mama vaedata pamiNiyee naetha. namuth maagee nopaemiNiima salakuNu kara nomaetha, ema nisaa mata mee masa sampuurNa padi mudhal labaa dheyi kiyalaa mama hithanavaa. karuNaakara mata ee vistharaya hariyata hoyaa gaeniimata upakaara kala haekidha?',
      expected: '11/11/2025 දින මම වැඩට පමිණියේ නැත. නමුත් මාගේ නොපැමිණීම සලකුණු කර නොමැත, එම නිසා මට මේ මස සම්පූර්ණ පඩි මුදල් ලබා දෙයි කියලා මම හිතනවා. කරුණාකර මට ඒ විස්තරය හරියට හොයා ගැනීමට උපකාර කල හැකිද?', // FIXED: Removed trailing space and changed length to L
      category: 'Compound structure',
      grammar: 'Imperative (command)',
      length: 'L' 
    },
    // Greetings and Responses
    {
      tcId: 'Pos_Fun_011',
      name: 'Response greeting',
      input: 'ov, eeka hari.',
      expected: 'ඔව්, ඒක හරි',
      category: 'Greeting / request / response',
      grammar: 'Response to a greeting',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_012',
      name: 'Slang and colloquial phrasing, Punctuation marks',
      input: 'hari! (oyaa?) "enna"',
      expected: 'හරි! (ඔයා?) "එන්න"',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Units of measurements',
      input: 'magee bara 10kg k adu velaa, ema nisaa mata doctor beheth labaa dhunnaa',
      expected: 'මගේ බර 10kg ක් අඩු වෙලා, එම නිසා මට doctor බෙහෙත් ලබා දුන්නා.', // FIXED: Removed trailing space
      category: 'Units of measurements',
      grammar: 'Units',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_014',
      name: 'Time and mixed words',
      input: 'heta udhee 8.30 ta office yanna enna',
      expected: 'හෙට උදේ 8.30 ට office යන්න එන්න',
      category: 'Time',
      grammar: 'Time and mixed words',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_015',
      name: 'Mixed Singlish + English',
      input: 'Mr. pereeraa, mata adha office enna parakku venavaa. mokadha bus eke godak senaga , hodhatama traffic baththaramulla hariyee. meeting eka patan ganna kalin mama enavaa. mata documents tika email karanna puluvandha? ',
      expected: 'Mr. පෙරේරා, මට අද office එන්න පරක්කු වෙනවා. මොකද bus eke ගොඩක් සෙනග , හොදටම traffic බත්තරමුල්ල හරියේ. meeting එක පටන් ගන්න කලින් මම එනවා. මට documents ටික email කරන්න පුලුවන්ද?',
      category: 'Mixed Singlish + English',
      grammar: 'Mixed language',
      length: 'L'
    },
    
    
    {
      tcId: 'Pos_Fun_016',
      name: 'Greeting',
      input: 'SuBha sanDhYaavak veevaa!',
      expected: 'සුභ සන්ධ්‍යාවක් වේවා!',
      category: 'Greeting / request / response',
      grammar: 'Greeting',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Cannot statement',
      input: 'mata eeka karanna baee',
      expected: 'මට ඒක කරන්න බෑ',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_018',
      name: 'Plural pronoun usage',
      input: 'eyaalaa heta enavaa',
      expected: 'එයාලා හෙට එනවා',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'S'
    },
    
    // Word Combinations
    {
      tcId: 'Pos_Fun_019',
      name: 'Common phrase pattern',
      input: 'poddak innako mama ennam',
      expected: 'පොඩ්ඩක් ඉන්නකො මම එන්නම්',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Mixed Language
    {
      tcId: 'Pos_Fun_020',
      name: 'English brand term embedded',
      input: 'mata Facebook account eka login karanna baee',
      expected: 'මට Facebook account එක login කරන්න බෑ',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_021',
      name: 'Place name preservation',
      input: 'nimeelaa Kandy giyaa',
      expected: 'නිමේලා Kandy ගියා',
      category: 'Names / places / common English words',
      grammar: 'Past tense',
      length: 'S'
    },
    
    // Punctuation
    {
      tcId: 'Pos_Fun_022',
      name: 'Exclamation mark handling',
      input: 'supiri!',
      expected: 'සුපිරි!',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Numbers and Formats
    {
      tcId: 'Pos_Fun_023',
      name: 'Currency amount',
      input: 'mata Rs. 500k oonee',
      expected: 'මට Rs. 500ක් ඕනෑ',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Medium Length
    {
      tcId: 'Pos_Fun_024',
      name: 'Medium length conversation',
      input: 'mama heta office yanavaa eehindha mata adha raee kanna baee. oyaa mata raee eka savanna puluvandha',
      expected: 'මම හෙට office යනවා ඒහින්ද මට අද රෑ කන්න බෑ. ඔයා මට රෑ එක සවන්න පුලුවන්ද',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    }
  ],
  
  // RENAMED: Changed from 'negative' to 'error_handling' for clarity
  error_handling: [
    {
      tcId: 'Err_Fun_001', 
      name: 'Missing space between words',
      input: 'mamagedharainnee',
      expected: 'මම ගෙදර ඉන්නේ',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Err_Fun_002', 
      name: 'Joined compound words',
      input: 'apipassekathakaramu',
      expected: 'අපි පස්සේ කතා කරමු',
      category: 'Typographical error handling',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Err_Fun_003', 
      name: 'Mixed spacing issues',
      input: 'mata     oonee  eeka',
      expected: 'මට ඕනෑ ඒක',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Err_Fun_004', 
      name: 'Line break in sentence',
      input: 'mama gedhara yanavaa kamaltatath kiyanna', 
      expected: 'මම ගෙදර යනවා කමල්ටත් කියන්න', 
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Err_Fun_005', 
      name: 'Informal slang phrase',
      input: 'machaang supiriyaane',
      expected: 'මචාන්ග් සුපිරියානෙ',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Err_Fun_006', 
      name: 'Colloquial expression',
      input: 'adooo mokakkdha mee',
      expected: 'අඩෝඕ මොකක්ක්ද මේ',
      category: 'Slang / informal language',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Err_Fun_007', 
      name: 'Mixed English with errors',
      input: 'mamaWhatsAppekagiyaa',
      expected: 'මම WhatsApp එකගියා',
      category: 'Mixed Singlish + English',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Err_Fun_008', 
      name: 'Abbreviation in sentence',
      input: 'mata ASAP eeka oonee',
      expected: 'මට ASAP ඒක ඕනෑ',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Err_Fun_009', 
      name: 'Question with spacing error',
      input: 'oyaakohedhainnee',
      expected: 'ඔයා කොහෙද ඉන්නේ',
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Err_Fun_010', 
      name: 'Complex slang statement',
      input: 'eyi bro eeka set karala denna',
      expected: 'එයි bro ඒක set කරල දෙන්න',
      category: 'Slang / informal language',
      grammar: 'Imperative (command)',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mama kaeema kannavaa',
    partialInput: 'mama kae',
    expectedFull: 'මම කෑම කන්නවා',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Error Handling Tests (formerly Negative Tests)
  test.describe('Error Handling Tests', () => {
    for (const testCase of TEST_DATA.error_handling) { // FIXED: Changed from negative to error_handling
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});