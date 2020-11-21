import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

import './get-refs';
import refs from './get-refs';
import cardMovieTemplate from '../templates/modal-tmp.hbs';

refs.filmContainer.addEventListener('click', showMovieCard);

async function showMovieCard(event) {
  basicLightbox
    .create(
      cardMovieTemplate(
        await fetchMovie(
          event.target.closest('.movies-item').getAttribute('id'),
          
        ),
      ),
    )
    .show();
   
}


async function fetchMovie(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=7e78d9d0b80a5a9938ce5aba09bf2c47`,
  );
  return await response.json();
}

export default {fetchMovie, showMovieCard}