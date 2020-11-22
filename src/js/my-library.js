
import ApiService from './apiService';
import markupMovies from './renderMarkup';
import localStorage from './localStorage.js'

const refs = {
  watchedLink: document.querySelector('[data-set="watched-link"]'),
  queueLink: document.querySelector('[data-set="queue-link"]')  
}

// новый экземпляр
const apiSearchServise = new ApiService();


// повесить слушатели на ссылки
refs.watchedLink.addEventListener('click', onWatchedLinkClick)
refs.queueLink.addEventListener('click', onQueueLinkClick)

function onWatchedLinkClick() {
  const filmsWatchedIds = JSON.parse(localStorage.getItem("watched")).map(Number);
  
  if (filmsWatchedIds !== null) {
    for (id of filmsWatchedIds) {
      const id = apiSearchServise.id;
      apiSearchServise.fetchMoviesId(addWatchedMovie).then(markupMovies)
    };
  }
}
  let watchedMovies = [];
  
  function addWatchedMovie(r) {
    watchedMovies.push(r);
    console.log(watchedMovies);
    return watchedMovies;
  }


function onQueueLinkClick() {
  
  const filmsQueueIds = JSON.parse(localStorage.getItem("queue")).map(Number);
  if (filmsQueueIds !== null) {
    for (id of filmsQueueIds) {
      const id = apiSearchServise.id;
      apiSearchServise.fetchMoviesId(addMovieinQueue).then(markupMovies)
    };
  }
}

  let moviesInQueue = [];
  
  function addMovieinQueue(r) {
    moviesInQueue.push(r);
    console.log(moviesInQueue);
    return moviesInQueue;
  }

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
