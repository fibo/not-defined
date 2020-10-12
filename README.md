# not-defined

> checks if foo is not defined, i.e. undefined, null, an empty string, array, object or NaN

[Installation](#installation) |
[Usage](#usage) |
[License](#license)

[![NPM version](https://badge.fury.io/js/not-defined.svg)](http://badge.fury.io/js/not-defined)

## Installation

```bash
npm install not-defined
```

## Usage

This snippet of code

```javascript
import notDefined from 'not-defined'

if (notDefined(foo)) {
  // do something, usually throw a TypeError
}
```

is equivalent to the following pseudocode

```
if (foo is not defined, i.e. is null, undefined, NaN, an empty string, array or object) {
  // do something, usually throw a TypeError
}
```

You can also use a shorter but still semantic form like

```javascript
import no from 'not-defined'

if (no(foo)) {
  // do something, usually throw a TypeError
}
```

Follows a list of [tested examples](https://github.com/fibo/not-defined/blob/master/test.js)

```javascript
no() // true
no(undefined) // true
no(null) // true
no('') // true
no([]) // true
no({}) // true
no(NaN) // true

no(0) // false
no(true) // false
no(false) // false
no('string') // false
no(['foo']) // false
no({ foo: true }) // false
no(42) // false
no(Infinity) // false
no(function () { return 1 }) // false
```

### Pros

* Type less.
* Better readability (even your boss will understand your code ^:).
* Can save bytes in your builds.
* Easier to autocomplete in editors (for instance easier than `typeof foo === 'undefined'`).

### CommonJS

Since version 3, packages is a native ES6 module.

CommonJS imports are still supported, try this

```js
const no = require('not-defined/common.cjs')
```

## License

[MIT](http://g14n.info/mit-license)

