import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

import './get-refs';
import refs from './get-refs';
import cardMovieTemplate from '../templates/modal-tmp.hbs';

// import onWatchedBtnClick from './localStorage.js';

const modalRefs = {
  lightbox: document.querySelector('.modal-movie-lightbox'),
  closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
  overlayModal: document.querySelector('.modal-movie-overlay'),
};

refs.filmContainer.addEventListener('click', showMovieCard);

async function showMovieCard(event) {

  openCloseModal();

  modalRefs.overlayModal.insertAdjacentHTML(
    'beforeend',
    cardMovieTemplate(
      await fetchMovie(event.target.closest('.movies-item').getAttribute('id')),
    ),
  );

  // const refs = {
  //   //   filmContainer: document.querySelector('.js-film-container'),
  //   toWatchedBtn: document.querySelector('[data-name="watched"]'),
  //   //   toQueueBtn: document.querySelector('[data-name="queue"]'),

  //   //   img: document.querySelector('.image'),
  // };

  // refs.toWatchedBtn.addEventListener('click', onWatchedBtnClick);
  // refs.toQueueBtn.addEventListener('click', onQueueBtnClick);

  // refs.filmContainer.addEventListener('click', onImgClick);

}


async function fetchMovie(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=7e78d9d0b80a5a9938ce5aba09bf2c47`,
  );
  return await response.json();
}

function openCloseModal() {
  modalRefs.lightbox.classList.toggle('modal-is-open');

  if (modalRefs.lightbox.classList.contains('modal-is-open')) {
    window.addEventListener('keydown', pressEsc);
    modalRefs.closeModalBtn.addEventListener('click', openCloseModal);
    modalRefs.overlayModal.addEventListener('click', onOverlayClick);
  } else {
    window.removeEventListener('keydown', pressEsc);
    modalRefs.closeModalBtn.removeEventListener('click', openCloseModal);
    modalRefs.overlayModal.removeEventListener('click', onOverlayClick);
  }
}

function pressEsc(evt) {
  if (
    modalRefs.lightbox.classList.contains('modal-is-open') &&
    evt.code === 'Escape'
  ) {
    openCloseModal();
  }
}

function onOverlayClick(evt) {
  if (evt.target.closest('.modal-movie-wrapper')) {
    return;
  }

  openCloseModal();
}

export default {fetchMovie, showMovieCard}

