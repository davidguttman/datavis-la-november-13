module.exports = function (movies) {
  addCalcuations(movies)
  return movies
}

function addCalcuations (movies) {
  movies.forEach(function(movie) {
    convertNumbers(movie)
    movie.qualityPerDollar = movie.rottenTomatoesScore / movie.budget
  })
}

function convertNumbers (movie) {
  var numProps = ['audienceScore', 'budget', 'grossDomestic', 'grossForeign', 
    'grossWorldwide', 'nTheatersOpening', 'openingWeekend', 'profitability', 
    'rottenTomatoesScore', 'usBoxOfficeAvgOpeningWeekend']

  numProps.forEach(function(prop) { movie[prop] = parseFloat(movie[prop]) })
  return movie
}
