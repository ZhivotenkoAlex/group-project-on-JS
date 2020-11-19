import trendTpl from '../templates/movies.hbs';
import ApiMovieService from './apiService';
import refs from './get-refs';
console.log(trendTpl)
const apiMovieService = new ApiMovieService();


function markupPopularMovies(movies) {
    refs.filmContainer.insertAdjacentHTML('beforeend', trendTpl(movies));
    
}

function showPopular(url) {
  return apiMovieService.showResult(url).then(markupPopularMovies);
}

showPopular('trending/movie/day');