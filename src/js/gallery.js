// const galleryContainer = document.querySelector(".team-link");
// const modal = document.querySelector(".js-lightbox");
// const modalImg = document.querySelector(".lightbox__image");
// const modalContent = document.querySelector(".lightbox__image");
// const overlay = document.querySelector(".lightbox__overlay")

const openTeamModalBtn = document.querySelector('.js-open-modal');
const closeTeamModalBtn = document.querySelector('.js-team-close');
const backdropTeamModal = document.querySelector('.js-backdrop');
const body = document.querySelector('body');

galleryContainer.addEventListener('click', modalOpen);
openTeamModalBtn.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
    evt.preventDefault();

    window.addEventListener('keydown', onEscKeyPress);
    closeTeamModalBtn.addEventListener('click', onCloseModal);
    backdropTeamModal.addEventListener('click', onBackdropClick);
    body.classList.add('popup-open');
    body.classList.add('show-modal');
}

function onCloseModal() {

    document.body.classList.remove('show-modal');
    document.body.classList.remove('popup-open');
    closeTeamModalBtn.removeEventListener('click', onCloseModal);
    backdropTeamModal.removeEventListener('click', onBackdropClick);
}

function onBackdropClick(event) {
    console.log(event, event.currentTarget, event.target);
    if (event.currentTarget === event.target) {
        onCloseModal();
    }
}

function onEscKeyPress(event) {
    if (event.code === 'Escape') {
        onCloseModal();
    }
}