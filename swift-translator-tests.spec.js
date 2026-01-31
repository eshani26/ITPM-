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
      expected: 'අපි තාම කනවා', 
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
      expected: 'මම ඒ ගැන බලාපොරොත්තු තියාගෙන හිටියා',
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
      expected: '11/11/2025 දින මම වැඩට පමිණියේ නැත. නමුත් මාගේ නොපැමිණීම සලකුණු කර නොමැත, එම නිසා මට මේ මස සම්පූර්ණ පඩි මුදල් ලබා දෙයි කියලා මම හිතනවා. කරුණාකර මට ඒ විස්තරය හරියට හොයා ගැනීමට උපකාර කල හැකිද?', 
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
      expected: 'මගේ බර 10kg ක් අඩු වෙලා, එම නිසා මට doctor බෙහෙත් ලබා දුන්නා.', 
      category: 'Units of measurements',
      grammar: 'Units',
      length: 'M'
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
      name: 'paragraph with English terms',
      input: 'Mata assignment eka ivara karanna thava dhavas dhekayi thiyenne. oyaa free nam mata udhav karanna puluvandha? api heta library eke set vela discuss karamu. please mata call ekak ganna. heta ena velaava kathaa kara ganna.',
      expected: 'මට assignment එක ඉවර කරන්න තව දවස් දෙකයි තියෙන්නෙ. ඔයා free නම් මට උදව් කරන්න පුලුවන්ද? අපි හෙට library eke සෙට් වෙල discuss කරමු. please මට call එකක් ගන්න. හෙට එන වෙලාව කතා කර ගන්න.',
      category: 'Greeting / request / response',
      grammar: 'Greeting',
      length: 'L'
    },

    {
      tcId: 'Pos_Fun_017',
      name: 'Greeting',
      input: 'SuBha sanDhYaavak veevaa!',
      expected: 'සුභ සන්ධ්‍යාවක් වේවා!',
      category: 'Daily language usage',
      grammar: 'Greeting',
      length: 'S'
    },
    
  
    {
      tcId: 'Pos_Fun_018',
      name: 'currency',
      input: 'eyaagee padiya USD 1500 klu',
      expected: 'එයාගේ පඩිය USD 1500 ක්ලු ',
      category: 'Currency',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
  
    {
      tcId: 'Pos_Fun_019',
      name: 'Convert medium length sentence',
      input: 'mama adha iskoolayee program ekakata giyaa haebaeyi mama aavee raee velaa.',
      expected: 'මම අද ඉස්කෝලයේ program එකකට ගියා හැබැයි මම ආවේ රෑ වෙලා.',
      category: 'Robustness validation',
      grammar: 'Simple sentence',
      length: 'M'
    },
    
    // Mixed Language
    {
      tcId: 'Pos_Fun_020',
      name: 'English brand term embedded',
      input: 'mata Facebook account eka login venna  baee. aeyi dha dhannee naee needha?',
      expected: 'මට Facebook account එක login වෙන්න  බෑ. ඇයි ද දන්නේ නෑ නේද?',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_021',
      name: 'Simple Sentences',
      input: 'mama adha naendhalaagee gedhara yannee. oyath enavadha ehee yanna?',
      expected: 'මම අද නැන්දලාගේ ගෙදර යන්නේ. ඔයත් එනවද එහේ යන්න?',
      category: 'Names / places / common English words',
      grammar: 'Past tense',
      length: 'S'
    },
    
    // Punctuation
    {
      tcId: 'Pos_Fun_022',
      name: 'Exclamation mark handling',
      input: 'supiriyi! apita dhinuma laebunaa.',
      expected: 'සුපිරියි! අපිට දිනුම ලැබුනා.',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Medium Length
    {
      tcId: 'Pos_Fun_023',
      name: 'Place name preservation',
      input: 'kasun heta gedhara yanavalu eeka nisaa mama adha eyaava balanna aavaa',
      expected: 'කසුන් හෙට ගෙදර යනවලු ඒක නිසා මම අද එයාව බලන්න ආවා',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_024',
      name: 'Medium length conversation',
      input: 'mama office yanavaa eehindha mata adha raee kaeema epaa. oyaata vitharak kaeema hadhaa ganna.',
      expected: 'මම office යනවා ඒහින්ද මට අද රෑ කෑම එපා. ඔයාට විතරක් කෑම හදා ගන්න.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    }
  ],
  
  // RENAMED: Changed from 'negative' to 'error_handling' for clarity
  error_handling: [
    {
      tcId: 'Nev_Fun_001', 
      name: 'Missing space between words',
      input: 'mamagedharainnee. ',
      expected: 'මම ගෙදර ඉන්නේ. ',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Nev_Fun_002', 
      name: 'Joined compound words',
      input: 'aapihetaudeyamu',
      expected: 'අපි හෙට උදේම යමු',
      category: 'Typographical error handling',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Nev_Fun_003', 
      name: 'Verify handling of special characters',
      input: 'eyaa adha kiyavanavaa vaedi naedhdha. @mata nam ahan i#dhallaa epaa velaa',
      expected: 'එයා අද කියවනවා වැඩි නැද්ද. මට නම් අහන් ඉදලා එපා වෙලා',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Nev_Fun_004', 
      name: 'Verify handling of line breaks inside a word',
      input: 'mama gedha\nrayanavaa (Note: In Excel, press Alt + Enter to create the line break between "gedha" and "rayanavaa")',
      expected: 'මම ගෙදර යනවා.', 
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Nev_Fun_005', 
      name: 'Ambiguous mixed language fails',
      input: 'I mata office ekee meeting ekak thiyenava so late veyi. ',
      expected: 'මට office එකේ meeting එකක් තියෙනව සො late වෙයි.',
      category: 'multi Languages',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Nev_Fun_006', 
      name: 'Verify handling of HTML/Code tags',
      input: '<h1>Hello</h1>',
      expected: '<h1>Hello</h1>',
      category: 'The system correctly treated the HTML tags as plain text and did not attempt to render them or execute code.',
      grammar: 'Robustness validation',
      length: 'S'
    },
    {
      tcId: 'Nev_Fun_007', 
      name: 'Verify handling of mixed alphanumeric noise',
      input: 'User01 ID5592 Pass9981 KeyX772 LogV3.4 SystemCheckOK',
      expected: 'User01 ID5592 Pass9981 KeyX772 LogV3.4 SystemCheckOK (Should remain as English/Alphanumeric)',
      category: 'Typographical error handling',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Nev_Fun_008', 
      name: 'Verify handling of long technical file paths',
      input: 'Error: File not found at C:/Users/Admin/Documents/Project_Alpha/Build_v2/Logs/error_log_2023_10_25.txt. Please check the directory D:/Backup/Server/Node_01/Data/Cache/Temp/Images/Assets/recovery_tool_v4.5.exe. If the problem persists, contact support at admin@sysnet.com or visit www.helpdesk.com/ticket/create/id=99283.',
      expected: 'The output should remain in English, preserving file paths and URLs exactly).',
      category: 'The system handled a massive block of non-narrative, technical text without incorrectly transliterating file paths into Sinhala.',
      grammar: 'Names / places / common English words',
      length: 'L'
    },
    {
      tcId: 'Nev_Fun_009', 
      name: 'Verify handling of long joined text (no spaces)',
      input: 'apitripekaKandyvalatayamudhatrafficnisaayanakotaparakkuveyidha?',
      expected: 'අපි trip එක Kandy වලට යමුද traffic නිසා යනකොට පරක්කුවෙයි ද?',
      category: 'The system correctly identified the long string as unrecognized due to missing spaces and returned it as-is without attempting an incorrect translation.',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    {
      tcId: 'Nev_Fun_010', 
      name: 'Verify handling of programming syntax',
      input: 'print("hello")',
      expected: 'print("hello"); (Should remain exactly as typed)',
      category: 'The system correctly identified the text as technical syntax and did not attempt to convert "print" into Sinhala phonetics.',
      grammar: 'Verify handling of programming syntax',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Verify input box placeholder text',
    input: '(leave empty)',
    partialInput: '(leave empty)',
    expectedFull: 'මම කෑම කන්නවා',
    category: 'Real-time output update behavior',
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