import refs from './get-refs';
import ApiServise from './apiService';
import markupMovies from './renderMarkup';
import paginator from './paginator';

const apiSearchServise = new ApiServise();

refs.searchFormRef.addEventListener('submit', onSearchMovies);

function onSearchMovies(e) {
  e.preventDefault();
  refs.paginatorElRef.innerHTML = '';
  const value = e.currentTarget.elements.query.value;

  if (value === '') {
    return;
  }

  apiSearchServise.query = value;

  apiSearchServise.resetPage();
  apiSearchServise.fetchMovies(apiSearchServise.search).then(numbersOfMovies);

  paginator(
    apiSearchServise.getPage(),
    apiSearchServise.total_result,
    apiSearchServise.search,
  );
}

function numbersOfMovies(r) {
  // console.log(r);
  refs.searchErrorRef.classList.add('is-hidden');

  if (r.length === 0) {
    refs.searchErrorRef.classList.remove('is-hidden');
  } else if (r.length === 1) {
    console.log('рендер 1 карточки');
  } else {
    markupMovies(r);
  }
}
