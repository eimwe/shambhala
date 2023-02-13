import { large } from './breakpoints.js';

const thumbsModal = document.querySelector('.modal--thumbs');
const thumbsModalOpenBtn = document.querySelector('.photoreport__modal');
const thumbsModalCloseBtn = document.querySelector('.modal--thumbs .btn--dismiss');

const openThumbsModal = () => thumbsModal.showModal();
const closeThumbsModal = () => thumbsModal.close();

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