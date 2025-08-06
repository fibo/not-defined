# not-defined

> checks if foo is not defined, i.e. undefined, null, an empty string, array, object or NaN

## Installation

```bash
npm install not-defined
```

## Pros

* Type less.
* Better readability (even your boss will understand your code ^:).
* Can save bytes in your builds.
* Easier to autocomplete in editors (for instance easier than `typeof foo === 'undefined'`).

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

A real use case: suppose you have a JSX that gets an array of `items` from an API.
If the array of `items` is empty, you want to render a message.

Instead of

```js
if (isLoading) {
  return <p>Loading...</p>
}

if (Array.isArray(items) && items.length === 0) {
  return <p>No items found</p>
}
```

you can write

```js
if (isLoading) {
  return <p>Loading...</p>
}

if (no(items)) {
  return <p>No items found</p>
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
no(0n) // false
no(Symbol('foo')) // false
```

## License

[MIT](https://fibo.github.io/mit-license)

