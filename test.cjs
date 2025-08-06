const { strict: assert } = require('node:assert')
const { test } = require('node:test')

const notDefined = require('./not-defined.cjs')

test('not-defined.cjs', () => {
  assert.ok(typeof notDefined === 'function', 'CommonJS export')
})
