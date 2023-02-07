const confirmModal = document.querySelector('.modal--confirm');
let confirmModalButtons = document.querySelectorAll('.modal--confirm .btn');

confirmModalButtons.forEach(button => {
  button.addEventListener('click', () => confirmModal.close());
});

const menuModal = document.querySelector('.modal--menu');
const menuModalOpenBtn = document.querySelector('.btn--menu');
const menuModalCloseBtn = document.querySelector('.modal--menu .btn--dismiss');
const menuModalNavItems = document.querySelectorAll('.modal--menu .navbar__item');

menuModalOpenBtn.addEventListener('click', () => menuModal.showModal());
menuModalCloseBtn.addEventListener('click', () => menuModal.close());
menuModalNavItems.forEach(item => {
  item.addEventListener('click', () => menuModal.close());
});

export { confirmModal };