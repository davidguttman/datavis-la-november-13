var csv     = require('csv')
var request = require('superagent')

module.exports = function(url, cb) {

  request(url, function(err, res) {
    if (err) return cb(err)

    csvToArray(res.text, cb)
  })

}

function csvToArray (text, cb) {
  csv()
    .from.string(text)
    .to.array(function(array) {
      cb(null, array)
    })
}