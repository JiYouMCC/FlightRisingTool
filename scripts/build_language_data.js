// Run with: node scripts/build_language_data.js
// Converts lg/basic-*.json into lg/language_data.js (inline JS, no AJAX needed)
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const lgDir = path.join(root, 'lg');
const outputFile = path.join(lgDir, 'language_data.js');

const languages = [
    { code: 'en', file: 'basic-en.json' },
    { code: 'zh', file: 'basic-zh.json' },
];

const entries = {};
for (const lang of languages) {
    const filePath = path.join(lgDir, lang.file);
    try {
        entries[lang.code] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        console.log(`Loaded ${lang.file} (${Object.keys(entries[lang.code]).length} keys)`);
    } catch (e) {
        console.error(`Failed to parse ${lang.file}: ${e.message}`);
        process.exit(1);
    }
}

const output = `// Auto-generated from lg/basic-*.json
// To update translations: edit the JSON files, then run: node scripts/build_language_data.js
var FRLanguageData = ${JSON.stringify(entries, null, 4)};
`;

fs.writeFileSync(outputFile, output, 'utf8');
console.log(`Generated ${outputFile} (${Math.round(output.length / 1024)} KB)`);
