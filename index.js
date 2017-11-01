'use strict'

function decode (query) {
  query = query.slice(1).split('&')
  var result = {}
  for (var i = 0, pair; i < query.length; i++) {
    pair = query[i].split('=')
    result[pair[0]] = pair[1]
  }
  return result
}

function encode (query) {
  var result = '?'
  for (var key in query) {
    if (query[key] != null) {
      result += key + '=' + query[key] + '&'
    }
  }
  return result.slice(0, -1)
}

export { decode, encode }
