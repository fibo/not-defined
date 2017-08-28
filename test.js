const assert = require('assert')
const no = require('not-defined')

assert.ok(no(), 'undefined')
assert.ok(no(null), 'null')
assert.ok(!no(true), 'true is defined')
assert.ok(!no(false), 'false is defined')
