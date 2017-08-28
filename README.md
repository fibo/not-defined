# not-defined

> is a shortcut to `(typeof foo === 'undefined') || (foo === null)`

[Installation](#installation) |
[Usage](#usage) |
[Annotated source](#annotated-source) |
[License](#license)

[![KLP](https://img.shields.io/badge/kiss-literate-orange.svg)](http://g14n.info/kiss-literate-programming)

## Installation

```bash
npm install not-defined
```

## Usage

This snippet of code

```javascript
const notDefined = require('not-defined')

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
const no = require('not-defined')

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
It is a very basic, plain ES5 function that is 42 characters long

    module.exports=function(x){return x == null}

## License

[MIT](http://g14n.info/mit-license)

[KLP]: http://g14n.info/kiss-literate-programming "KISS Literate Programming"
