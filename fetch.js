var tabletop = require('tabletop')
var csv     = require('csv')
var request = require('superagent')

module.exports = function(url, cb) {

  tabletop.init({
    key: url,
    simpleSheet: true,
    callback: function (data, tt) {
      console.log('data', data)
      cb(null, data)
    }
  })
}
