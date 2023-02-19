import { large } from '../../../breakpoints.js';

const escapeModal = () => document.body.classList.remove('modal__opened');

const isModalOpened = (modal) => {
  
  if (modal.open) {
    document.body.classList.add('modal__opened');
  }

  if (large.matches) {
    modal.addEventListener('close', escapeModal);
  } else {
    modal.removeEventListener('close', escapeModal);
  }
}

export default isModalOpened;