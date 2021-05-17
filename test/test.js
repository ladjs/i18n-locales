const test = require('ava');

const locales = require('..');

test('returns an array', (t) => {
  t.true(Array.isArray(locales));
});
