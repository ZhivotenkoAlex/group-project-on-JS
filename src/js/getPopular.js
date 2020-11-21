import ApiMovieService from './apiService';
import markupMovies from './renderMarkup';

import paginator from './paginator';

const apiMovieService = new ApiMovieService();

function showPopular(url) {
  return apiMovieService.showResult(url).then(r => {
    markupMovies(r);
  });
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
