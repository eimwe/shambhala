import initMenuModalOnMobile from './menu-modal.js';

const confirmModal = document.querySelector('.modal--confirm');
let confirmModalButtons = document.querySelectorAll('.modal--confirm .btn');

confirmModalButtons.forEach(button => {
  button.addEventListener('click', () => confirmModal.close());
});

initMenuModalOnMobile();
window.addEventListener('resize', initMenuModalOnMobile);

export { confirmModal };