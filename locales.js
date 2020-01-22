const countryLanguage = require('country-language');

const codes = countryLanguage.getLanguageCodes();
const locales = codes.reduce((acc, code) => {
  const msLocales = countryLanguage.getLanguageMsLocales(code);
  if (!Array.isArray(msLocales)) return acc;
  // for loop because concat is slow
  for (const msLocale of msLocales) {
    acc.push(msLocale.langCultureName);
  }

  return acc;
}, codes);

module.exports = locales.sort();
