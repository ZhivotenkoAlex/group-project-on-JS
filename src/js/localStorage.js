// import ApiMovieService from './apiService.js'
// import movies from '../templates/movies.hbs'
// import { fetchMovie } from '../js/modal-movie-card'
// import refs from './get-refs.js'

// // const apiMovieService = new ApiMovieService

const refs = {
  filmContainer: document.querySelector('.js-film-container'),
  toWatchedBtn: document.querySelector('[data-name="watched"]'),
  toQueueBtn: document.querySelector('[data-name="queue"]'),
};

// const apiMovieService = new ApiMovieService

//refs.toWatchedBtn.addEventListener('click', onWatchedBtnClick)
// refs.toQueueBtn.addEventListener('click', onQueueBtnClick)

//refs.filmContainer.addEventListener('click', onImgClick)

function renderImgCard(genres) {
  const markupImgCard = movies(genres);
  refs.galeryList.insertAdjacentHTML('beforeend', markupImgCard);
}

function onImgClick(evt) {
  console.log('открыть модалку');

  if (onWatchedBtnClick) {
    let currentIdCardFilmWatched = evt.path[0].dataset.id;
    console.log(currentIdCardFilmWatched);

    localStorage.setItem('watched', '[]');

    let newIdCardFilmWatched = JSON.parse(localStorage.getItem('watched'));
    console.log(newIdCardFilmWatched);

    newIdCardFilmWatched.push(currentIdCardFilmWatched);

    localStorage.setItem('watched', JSON.stringify(newIdCardFilmWatched));
  }
}

//смена класса и текста для кнопки onWatchedBtnClick
function onWatchedBtnClick() {
  const btnWatched = refs.toWatchedBtn;

  if (btnWatched.innerHTML === 'add to watched') {
    btnWatched.classList.add('button-is-active');
    btnWatched.innerHTML = 'delete from watched';
  } else {
    btnWatched.classList.remove('button-is-active');
    btnWatched.innerHTML = 'add to watched';
  }
}

function onQueueBtnClick() {
  getFilmsQueue();
  putFilmsQueue();

  // отрендерить в библиотеку
}

// function onWatchedBtnClick() {
//   console.log('click');
// }

function getFilmsWatched(id) {
  //получить значение id фильма

  let currentIdCardFilmWatched = imgCard.path[0].dataset.id;

  const list = [];
  if (localStorage.getItem('watched') === null) {
    localStorage.setItem('watched', list);
  }

  //добавить к текущему id карточки фильма новый id
  let newIdCardFilmWatched = JSON.parse(localStorage.getItem('watched'));
  list.push(currentIdCardFilmWatched);
  localStorage.setItem('watched', JSON.stringify(newIdCardFilmWatched));
}

//   function  getFilmsWatched() {
//     const filmsLocalStorageWatched = localStorage.getItem("watched");
//         if (filmsLocalStorageWatched !== null) {
//           return JSON.parse(filmsLocalStorageWatched)
//         }

//     return [];
// }

// function getFilmsQueue() {
//     const filmsLocalStorageQueue = localStorage.getItem("queue");
//     if (filmsLocalStorageQueue !== null) {
//            return JSON.parse(filmsLocalStorageQueue)
//     }
//     return []
// }

// function putFilmsWatched(id) {
//     let filmsW = getFilmsWatched();
//     const index = filmsW.indexOf(id)
//     if (index === -1) {
//      filmsW.push(id)
//     }

//    return localStorage.setItem('watched', JSON.stringify(filmsW))

// }

// function putFilmsQueue(id) {
//     let filmsQueue = getFilmsQueue();
//     const index = filmsQueue.indexOf(id)
//     if (index === -1) {
//      filmsQueue.push(id)
//     }

//    return localStorage.setItem('queue', JSON.stringify(filmsQueue))
