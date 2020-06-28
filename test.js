import assert from 'assert'

import no from './not-defined.js'

assert.ok(no(), 'no param')
assert.ok(no(undefined), 'undefined')
assert.ok(no(null), 'null')
assert.ok(no(''), 'empty string')
assert.ok(no([]), 'empty array')
assert.ok(no({}), 'empty object')
assert.ok(no(NaN), 'not a number')

assert.ok(!no(0), '0 is defined')
assert.ok(!no(true), 'true is defined')
assert.ok(!no(false), 'false is defined')
assert.ok(!no('string'), 'a string is defined')
assert.ok(!no(['foo']), 'an array is defined')
assert.ok(!no({foo: true}), 'an object is defined')
assert.ok(!no(42), '"the answer" is defined')
assert.ok(!no(Infinity), 'Infinity is defined')
assert.ok(!no(function () { return 1 }), 'A function with no arguments is defined')
