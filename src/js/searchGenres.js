import refs from './get-refs';
import ApiServise from './apiService';
import markupMovies from './renderMarkup';

const apiSearchServise = new ApiServise;

refs.sectionMoviesRef.addEventListener('click', onSearchGenres);

function onSearchGenres(e) {

    if (e.target.className !== "info-list" )  {
        return
    }

    const genre = e.target.textContent;
}