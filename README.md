# not-defined

> is a shortcut to `typeof foo === 'undefined'`

[![KLP](https://img.shields.io/badge/kiss-literate-orange.svg)](http://g14n.info/kiss-literate-programming)

## Installation

```
npm install not-defined --save
```

## Usage

This snippet of code

```
var notDefined = require('not-defined')

if (notDefined(foo)) {
  // do something, usually throw a TypeError
}
```

is equivalent to

```
if (typeof foo === 'undefined') {
  // do something, usually throw a TypeError
}
```

You can also use a shorter but still semantic form and start saving bytes after the second `if` statement.

```
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

It is a very basic, plain ES5 function that is 58 characters long

    module.exports=function(x){return typeof x==='undefined'}

Ah and it is also my first npm package written using [KISS Literate Programming](http://g14n.info/kiss-literate-programming).
After I created an empty repo on GitHub and cloned it locally I just launched

```
klp index.js
npm init
```

Then I wrote this *README.md* and launched

```
make
git add .
git commit -m 'first ( and only :metal: ) release'
git push origin master
npm publish
```

## License

[MIT](http://g14n.info/mit-license)

