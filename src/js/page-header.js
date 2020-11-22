import refs from './get-refs';
// import { onWatchedLinkClick, onQueueLinkClick } from './my-library.js';

refs.logoRef.addEventListener('click', toHome);
refs.homeRef.addEventListener('click', toHome);
refs.libraryRef.addEventListener('click', toLibrary);

function toHome() {
  const lib = refs.headerRef.classList.contains('page-my-library');
  const det = refs.headerRef.classList.contains('page-details');

  if (lib) {
    refs.headerRef.classList.remove('page-my-library');
    refs.libraryRef.classList.remove('is-active');
  }

  if (det) {
    refs.headerRef.classList.remove('page-details');
  }

  refs.homeRef.classList.add('is-active');
}

function toLibrary() {
  const det = refs.headerRef.classList.contains('page-details');

  if (det) {
    refs.headerRef.classList.remove('page-details');
  }

  refs.homeRef.classList.remove('is-active');
  refs.headerRef.classList.add('page-my-library');
  refs.libraryRef.classList.add('is-active');

  refs.filmContainer.innerHTML = '';

  onWatchedLinkClick();

  document
    .querySelector('.watched-link')
    .addEventListener('click', onWatchedLinkClick);

  document
    .querySelector('.queue-link')
    .addEventListener('click', onQueueLinkClick);
}

function toDetails() {
  const lib = refs.headerRef.classList.contains('page-my-library');

  if (lib) {
    refs.headerRef.classList.remove('page-my-library');
    refs.libraryRef.classList.remove('is-active');
  }

  refs.homeRef.classList.remove('is-active');
  refs.headerRef.classList.add('page-details');
}
