import { large } from './breakpoints.js';
import isModalOpened from './control-body-scroll.js';

const thumbsModal = document.querySelector('.modal--thumbs');
const thumbsModalOpenBtn = document.querySelector('.photoreport__modal');
const thumbsModalCloseBtn = document.querySelector('.modal--thumbs .btn--dismiss');

const openThumbsModal = (event) => {
  event.preventDefault();
  thumbsModal.showModal();
  isModalOpened(thumbsModal);
}

const closeThumbsModal = () => {
  thumbsModal.close();
  isModalOpened(thumbsModal);
}

const initThumbsModalOnDesktop = () => {

  if (large.matches) {
    thumbsModalOpenBtn.addEventListener('click', openThumbsModal);
    thumbsModalCloseBtn.addEventListener('click', closeThumbsModal);
  } else {
    thumbsModalOpenBtn.removeEventListener('click', openThumbsModal);
    thumbsModalCloseBtn.removeEventListener('click', closeThumbsModal);
  }
}

export default initThumbsModalOnDesktop;