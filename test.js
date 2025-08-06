import { strict } from 'node:assert'
import { test } from 'node:test'

import no from 'not-defined'

test('not-defined', () => {
  strict.equal(true, no(), 'no param')
  strict.equal(true, no(undefined), 'undefined')
  strict.equal(true, no(null), 'null')
  strict.equal(true, no(''), 'empty string')
  strict.equal(true, no([]), 'empty array')
  strict.equal(true, no({}), 'empty object')
  strict.equal(true, no(NaN), 'not a number')

  strict.equal(false, no(0), '0 is defined')
  strict.equal(false, no(true), 'true is defined')
  strict.equal(false, no(false), 'false is defined')
  strict.equal(false, no('string'), 'a string is defined')
  strict.equal(false, no(['foo']), 'an array is defined')
  strict.equal(false, no({foo: true}), 'an object is defined')
  strict.equal(false, no(42), '"the answer" is defined')
  strict.equal(false, no(Infinity), 'Infinity is defined')
  strict.equal(false, no(function () { return 1 }), 'A function with no arguments is defined')
  strict.equal(false, no(0n), '0 bigint is defined')
  strict.equal(false, no(Symbol('foo')), 'A Symbol is defined')
})
