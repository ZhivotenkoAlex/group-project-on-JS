// 1 Получить доступ к локалсторадж --- через гетайтемс достать строку из локалсторэдж, из строки преобразовать в объект, из объекта достать 
// 2 Забрать все id ---> массив айдишников 
// 3 В цикле фор оф перебрать массив 
// 4 На каждой интерации сделать запрос на сервер 
// 5 Получить ответ, сохранить его в массив 
// 6 Массив передаешь в hbs и получаешь разметку

import ApiService from './apiService';
import markupMovies from './renderMarkup';
import localStorage from './localStorage.js'

const refs = {
  watchedLink: document.querySelector('[data-set="watched-link"]'),
  queueLink: document.querySelector('[data-set="queue-link"]')  
}

const apiSearchService = new ApiService();

refs.watchedLink.addEventListener('click', onWatchedLinkClick)
refs.queueLink.addEventListener('click', onQueueLinkClick)

function onWatchedLinkClick() {
  const filmsWatchedIds = JSON.parse(localStorage.getItem("watched")).map(Number);
  
    if (filmsWatchedIds !== null) {
      for (id of filmsWatchedIds) {
        apiSearchServise.fetchMoviesId().then()
      };
      // здесь задача 4, 5, 6
        }
    //
    }

    

function onQueueLinkClick() {
    const filmsLocalStorageQueue = localStorage.getItem("queue")
    const filmsQueueIds = filmsLocalStorageQueue.map(Number)
    
    if (filmsQueueIds !== null) {
        for (id of filmsQueueIds) {
        // здесь задача 4, 5, 6
        }
    //apiSearchServise.fetchMoviesId().then(console.log)
}
}