import initMenuModalOnMobile from './menu-modal.js';
import initThumbsModalOnDesktop from './thumbs-modal.js';
import confirmModal from './confirm-modal.js';

initMenuModalOnMobile();
window.addEventListener('resize', initMenuModalOnMobile);

initThumbsModalOnDesktop();
window.addEventListener('resize', initThumbsModalOnDesktop);