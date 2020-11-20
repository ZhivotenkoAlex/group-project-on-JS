//  <button type="button" data-set="to-watched-btn">Add TO watched</button>
//     <button type="button" data-set="to-queue-btn">Add TO queue</button>
import ApiMovieService from './apiService.js'
import movies from '../templates/movies.hbs'



const refs = {
  filmContainer: document.querySelector('.js-film-container'),
  toWatchedBtn: document.querySelector('[data-set="to-watched-btn"]'),
  toQueueBtn: document.querySelector('[data-set="to-queue-btn"]'),

  img: document.querySelector('.image')
    
}


const apiMovieService = new ApiMovieService




refs.toWatchedBtn.addEventListener('click', onWatchedBtnClick)
refs.toQueueBtn.addEventListener('click', onQueueBtnClick)

refs.filmContainer.addEventListener('click', onImgClick)


function renderImgCard(genres) {
  const markupImgCard = movies(genres)
  refs.galeryList.insertAdjacentHTML('beforeend', markupImgCard)
}


function onImgClick(evt) {
  evt.preventDefault()
  console.log('клик');
  const id = evt.path[0].dataset.id
   
}

function onWatchedBtnClick() {
 
  getFilmsWatched()
  putFilmsWatched()


  // отрендерить в библиотеку
  apiMovieService.fetchGenres().then(renderImgCard)
}



function onQueueBtnClick() {
  getFilmsQueue()
  putFilmsQueue()

 // отрендерить в библиотеку
}

  function  getFilmsWatched() {
    const filmsLocalStorageWatched = localStorage.getItem("watched");
        if (filmsLocalStorageWatched !== null) {
          return JSON.parse(filmsLocalStorageWatched)  
        }

    return [];
}
 
function getFilmsQueue() {
    const filmsLocalStorageQueue = localStorage.getItem("queue");
    if (filmsLocalStorageQueue !== null) {
           return JSON.parse(filmsLocalStorageQueue)   
    }
    return []
}

function putFilmsWatched(id) {
    let filmsW = getFilmsWatched();
    const index = filmsW.indexOf(id)
    if (index === -1) {
     filmsW.push(id)   
    }
    
   return localStorage.setItem('watched', JSON.stringify(filmsW))

}
    
function putFilmsQueue(id) {
    let filmsQueue = getFilmsQueue();
    const index = filmsQueue.indexOf(id)
    if (index === -1) {
     filmsQueue.push(id)   
    }
    
   return localStorage.setItem('queue', JSON.stringify(filmsQueue))

    }
