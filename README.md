# query-string

> Encode and decode query strings

## Install

```
npm i @whaaaley/query-string
```

## Usage

### Decode

```js
import { decode } from '@whaaaley/query-string'

decode('?foo=bar&baz=qux&quux=corge')
// => { foo: 'bar', baz: 'qux', quux: 'corge' }
```

### Encode

```js
import { encode } from '@whaaaley/query-string'

encode({
  foo: 'bar',
  baz: 'qux',
  quux: 'corge'
})
// => '?foo=bar&baz=qux&quux=corge'
```

## Caveats

+ You need to use `encodeURIComponent` yourself if you want to ensure your strings are URIs
