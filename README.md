# not-defined

> is a shortcut to `(typeof foo === 'undefined') || (foo === null)`

[Installation](#installation) |
[Usage](#usage) |
[License](#license)

[![KLP](https://img.shields.io/badge/kiss-literate-orange.svg)](http://g14n.info/kiss-literate-programming)

## Installation

```
npm install not-defined --save
```

## Usage

This snippet of code

```javascript
var notDefined = require('not-defined')

if (notDefined(foo)) {
  // do something, usually throw a TypeError
}
```

is equivalent to

```javascript
if ((typeof foo === 'undefined') || (foo === null)) {
  // do something, usually throw a TypeError
}
```

You can also use a shorter but still semantic form like

```javascript
var no = require('not-defined')

if (no(foo)) {
  // do something, usually throw a TypeError
}
```

### Pros

* Type less.
* Better readability (even your boss will understand your code ^:).
* Can save bytes in your builds.
* Easier to autocomplete in editors.

## Annotated source

This is my first npm package written using [KISS Literate Programming][KLP].
It is a very basic, plain ES5 function that is 73 characters long

    module.exports=function(x){return (typeof x==='undefined')||(x === null)}

## License

[MIT](http://g14n.info/mit-license)

[KLP]: http://g14n.info/kiss-literate-programming "KISS Literate Programming"
