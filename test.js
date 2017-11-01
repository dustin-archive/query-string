const tape = require('tape')
const { decode, encode } = require('./bundle.js')

const queryString1 = '?foo=bar'
const queryString2 = '?foo=bar&baz=qux'
const queryString3 = '?foo=bar&baz=qux&quux=corge'

const queryObject1 = {
  foo: 'bar'
}

const queryObject2 = {
  foo: 'bar',
  baz: 'qux'
}

const queryObject3 = {
  foo: 'bar',
  baz: 'qux',
  quux: 'corge'
}

tape('decode', ({ plan, same }) => {
  plan(3)
  same(decode(queryString1), queryObject1, 'decode 1')
  same(decode(queryString2), queryObject2, 'decode 2')
  same(decode(queryString3), queryObject3, 'decode 3')
})

tape('encode', ({ plan, same }) => {
  plan(3)
  same(encode(queryObject1), queryString1, 'encode 1')
  same(encode(queryObject2), queryString2, 'encode 2')
  same(encode(queryObject3), queryString3, 'encode 3')
})
