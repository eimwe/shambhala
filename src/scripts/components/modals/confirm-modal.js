const confirmModal = document.querySelector('.modal--confirm');
let confirmModalButtons = document.querySelectorAll('.modal--confirm .btn');

confirmModalButtons.forEach(button => {
  button.addEventListener('click', () => confirmModal.close());
});

export default confirmModal;