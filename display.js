module.exports = function(el, movies, property) {
  var maxWidth = el.getBoundingClientRect().width
  var maxHeight = el.getBoundingClientRect().height

  var maxProp = getMax(movies, property)

  movies.forEach(function(movie) {
    var movieDiv = document.createElement('div')
    
    var w = movie[property]/maxProp * maxWidth
    var h = maxHeight/movies.length

    movieDiv.style.width = w + 'px'
    movieDiv.style.height = h + 'px'
    movieDiv.style.background = '#666'

    movieDiv.dataset.title = movie.title
    el.appendChild(movieDiv)
  })
}

function getMax (array, property) {
  var max = array[0][property]

  array.forEach(function(item) {
    if (item[property] > max) max = item[property]
  })

  return max
}