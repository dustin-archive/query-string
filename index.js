module.exports = {
  decode: function (query) {
    query = query.slice(1).split('&')
    var result = {}
    for (var i = 0, pair; i < query.length; i++) {
      pair = query[i].split('=')
      result[pair[0]] = pair[1]
    }
    return result
  },
  encode: function (queries) {
    var result = '?'
    for (var key in queries) {
      if (queries[key] != null) {
        result += key + '=' + queries[key] + '&'
      }
    }
    return result.slice(0, -1)
  }
}
