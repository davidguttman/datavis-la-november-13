module.exports = function(el, visEl, movies) {
  visEl.addEventListener('mouseover', function(evt) {
    var movieEl = evt.toElement || evt.relatedTarget
    var title = movieEl.dataset.title
    if (!movieEl || !title) return
    
    highlightEl(movieEl, '#e66')

    var movie = findBy(movies, 'title', title)
    displayInfo(el, movie)
  })  
}

function displayInfo (el, movie) {
  html = '<h3>' + movie.title + '</h3>'

  for (var prop in movie) {
    html += '<p>' + prop + ': ' + movie[prop] + '</p>'
  }

  el.innerHTML = html
}

var prevEl = null
function highlightEl (el, highlightColor) {
  if (prevEl) { prevEl.style.background = prevEl.dataset.origBg }

  el.dataset.origBg = el.style.background
  el.style.background = highlightColor
  prevEl = el
}

function findBy (movies, prop, value) {
  var found = null
  movies.forEach(function(movie) { if (movie[prop] === value) found = movie })
  return found
}