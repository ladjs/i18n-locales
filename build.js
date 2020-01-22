const fs = require('fs');
const path = require('path');

const locales = require('./locales');

fs.writeFileSync(
  path.join(__dirname, 'index.json'),
  JSON.stringify(locales, null, 2)
);
