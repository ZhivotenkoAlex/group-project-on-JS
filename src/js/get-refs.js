import { doc } from "prettier";

const refs = {
  headerRef: document.querySelector('header'),
  logoRef: document.querySelector('#logo'),
  homeRef: document.querySelector('#home'),
  libraryRef: document.querySelector('#library'),
  filmContainer: document.querySelector('.js-film-container'),
  searchFormRef: document.querySelector('#search'),
  searchErrorRef: document.querySelector('#search-error'),
  sectionMoviesRef: document.querySelector('#section-movies'),
};

export default refs;