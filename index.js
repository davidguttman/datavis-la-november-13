// Where our data lives
var url = 'https://docs.google.com:443/spreadsheet/pub'
  + '?key=0ApW-j0QNGJesdDMwbmhqcFFSVFdfUXR0Vy1XeVdJX1E'
  + '&single=true&gid=28&output=csv'

// // // // // // // // // // // // 

// 1. Fetch
// 2. Transform
// 3. Display
// 4. Interact
// 5. Publish

var fetch = require('./fetch.js')
var transform = require('./transform.js')

fetch(url, function(err, rawData) {
  if (err) {alert(err.message)}
  
  var movies = transform(rawData)

  // show(movies)
})

// // // // // // // // // // // // 

// function makeVisElement () {
//   var el = document.createElement('div')
//   el.style.position = 'absolute'
//   el.style.left = 0
//   el.style.top = 0
//   el.style.width = window.innerWidth + 'px'
//   el.style.height = window.innerHeight + 'px'
//   el.style.background = '#eee'
//   document.body.appendChild(el)
//   return el
// }
