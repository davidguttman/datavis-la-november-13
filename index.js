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
var display = require('./display.js')
var interact = require('./interact.js')

fetch(url, function(err, rawData) {
  if (err) {alert(err.message)}
  
  var movies = transform(rawData)
  
  var visEl = makeVisElement()
  display(visEl, movies, 'qualityPerDollar')
  
  var infoEl = makeInfoElement()
  interact(infoEl, visEl, movies)
  
})

// // // // // // // // // // // // 

function makeInfoElement () {
  var el = document.createElement('div')
  el.style.position = 'absolute'
  el.style.right = 0
  el.style.top = 0
  el.style.width = 300 + 'px'
  el.style.height = window.innerHeight + 'px'
  el.style.background = 'rgba(255,255,255,0.5)'
  document.body.appendChild(el)
  return el
}

function makeVisElement () {
  var el = document.createElement('div')
  el.style.position = 'absolute'
  el.style.left = 0
  el.style.top = 0
  el.style.width = window.innerWidth + 'px'
  el.style.height = window.innerHeight + 'px'
  el.style.background = '#eee'
  document.body.appendChild(el)
  return el
}
