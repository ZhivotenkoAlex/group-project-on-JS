import ApiMovieService from './apiService';
import markupMovies from './renderMarkup';
import loaderSpinnerToggle from './loader-spinner';
import paginator from './paginator';

const apiMovieService = new ApiMovieService();

function showPopular(url) {
  loaderSpinnerToggle();
  return apiMovieService.showResult(url).then(r => {
    
    markupMovies(r);
  }).then(loaderSpinnerToggle);
}



async function paginationSet() {
  await showPopular(apiMovieService.trending);

  await paginator(
    apiMovieService.getPage(),
    apiMovieService.total_result,
    apiMovieService.trending,
  );
}

paginationSet();
