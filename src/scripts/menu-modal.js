const menuModal = document.querySelector('.modal--menu');
const menuModalOpenBtn = document.querySelector('.btn--menu');
const menuModalCloseBtn = document.querySelector('.modal--menu .btn--dismiss');
const menuModalNavItems = document.querySelectorAll('.modal--menu .navbar__item');

const openModal = () => menuModal.showModal();
const closeModal = () => menuModal.close();

const initMenuModalOnMobile = () => {

  if (window.innerWidth < 601) {
    menuModalOpenBtn.addEventListener('click', openModal);
    menuModalCloseBtn.addEventListener('click', closeModal);
    menuModalNavItems.forEach(item => {
      item.addEventListener('click', closeModal);
    });
  } else {
    menuModalOpenBtn.removeEventListener('click', openModal);
    menuModalCloseBtn.removeEventListener('click', closeModal);
    menuModalNavItems.forEach(item => {
      item.removeEventListener('click', closeModal);
    });
  }
}

export default initMenuModalOnMobile;