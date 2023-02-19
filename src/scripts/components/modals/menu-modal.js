import { small } from '../../match-media/breakpoints.js';

const menuModal = document.querySelector('.modal--menu');
const menuModalOpenBtn = document.querySelector('.btn--menu');
const menuModalCloseBtn = document.querySelector('.modal--menu .btn--dismiss');
const menuModalNavItems = document.querySelectorAll('.modal--menu .navbar__item');

const openMenuModal = () => menuModal.showModal();
const closeMenuModal = () => menuModal.close();

const initMenuModalOnMobile = () => {

  if (small.matches) {
    menuModalOpenBtn.addEventListener('click', openMenuModal);
    menuModalCloseBtn.addEventListener('click', closeMenuModal);
    menuModalNavItems.forEach(item => {
      item.addEventListener('click', closeMenuModal);
    });
  } else {
    menuModalOpenBtn.removeEventListener('click', openMenuModal);
    menuModalCloseBtn.removeEventListener('click', closeMenuModal);
    menuModalNavItems.forEach(item => {
      item.removeEventListener('click', closeMenuModal);
    });
  }
}

export default initMenuModalOnMobile;