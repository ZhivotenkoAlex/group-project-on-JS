export default function loaderSpinnerToggle() { 
  document.querySelector('.loader').classList.toggle("is-open");
  document.body.classList.toggle("spinner-is-open");
}