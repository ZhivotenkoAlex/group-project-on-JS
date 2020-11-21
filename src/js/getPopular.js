import ApiMovieService from './apiService';
import markupMovies from './renderMarkup';

const apiMovieService = new ApiMovieService();

function showPopular(url) {
  return apiMovieService.showResult(url).then(markupMovies);
}

showPopular(apiMovieService.trending);
