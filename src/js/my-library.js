import ApiService from './apiService';
import markupMovies from './renderMarkup';
import { fetchMovie } from './modal-movie-card.js';
import libraryTpl from '../templates/movies.hbs';

import commonRefs from './get-refs';
// import localStorage from './localStorage.js'; modal-movie-card.js

// новый экземпляр
//const apiSearchServise = new ApiService();

// повесить слушатели на ссылки
// refs.watchedLink.addEventListener('click', onWatchedLinkClick);
// refs.queueLink.addEventListener('click', onQueueLinkClick);

async function onWatchedLinkClick() {
  const refs = {
    libraryClick: document.querySelector('.librarry-filter'),
    watchedLink: document.querySelector('.watched-link'),
    queueLink: document.querySelector('.queue-link'),
  };

  refs.queueLink.classList.remove('is-active');
  refs.watchedLink.classList.add('is-active');
  const filmsWatchedIds = JSON.parse(localStorage.getItem('watched')).map(
    Number,
  );

  const moviesList = [];
  //const filmsWatchedIds = JSON.parse(localStorage.getItem("watched"))

  if (filmsWatchedIds !== null) {
    for (const id of filmsWatchedIds) {
      moviesList.push(await fetchMovie(id));
    }

    markupMovies(moviesList);
  }
}

async function onQueueLinkClick() {
  const refs = {
    libraryClick: document.querySelector('.librarry-filter'),
    watchedLink: document.querySelector('.watched-link'),
    queueLink: document.querySelector('.queue-link'),
  };

  refs.watchedLink.classList.remove('is-active');
  refs.queueLink.classList.add('is-active');

  const filmsInQueueIds = JSON.parse(localStorage.getItem('queue')).map(Number);

  const moviesInQueueList = [];

  if (filmsInQueueIds !== null) {
    for (const id of filmsInQueueIds) {
      moviesInQueueList.push(await fetchMovie(id));
    }

    markupMovies(moviesInQueueList);
  }
}

//let watchedMovies = [];
//function addWatchedMovie(r) {
//  watchedMovies.push(r);
//  console.log(watchedMovies);
//  return watchedMovies;
//}

//console.log(watchedMovies);

//function onQueueLinkClick() {
//  refs.watchedLink.classList.remove('is-active');
//  refs.queueLink.classList.add('is-active');
//  const filmsQueueIds = JSON.parse(localStorage.getItem('queue')).map(Number);
//  if (filmsQueueIds !== null) {
//    for (id of filmsQueueIds) {
//      apiSearchServise.id = id;
//      apiSearchServise.fetchMoviesId(addMovieinQueue).then(markupMovies);
//    }
//  }
//}

//let moviesInQueue = [];

//function addMovieinQueue(r) {
//  moviesInQueue.push(r);
//  return moviesInQueue;
//}

//let a = [];

//function onWatchedLinkClick() {
//    apiSearchServise.id = 643882;
//    apiSearchServise.fetchMoviesId().then(b).then(markupMovies)
//}

// function addWatchedMovie(r) {
//  watchedMovies.push(r)
//  console.log(watchedMovies);
//  return watchedMovies;
//}

//function b(r) {
//    a.push(r);
//    console.log(a);
//    return a;}
export { onWatchedLinkClick, onQueueLinkClick };
