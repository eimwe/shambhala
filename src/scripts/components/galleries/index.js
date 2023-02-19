import initStillsOnMobile from './stills-gallery.js';
import initThumbsOnDesktop from './thumbs-gallery.js';
import TourGallery from './tour-gallery.js';
import TeamGallery from './team-gallery.js';

initStillsOnMobile();
window.addEventListener('resize', initStillsOnMobile);

initThumbsOnDesktop();
window.addEventListener('resize', initThumbsOnDesktop);