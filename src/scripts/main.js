import Swiper from './swiper-bundle.esm.browser.js';
import Accordion from './accordion.js';
import FormValidator from './form-validator.js';
import PhoneMask from './phone-mask.js';
import setCurrentyear from './year-setter.js';
import initStillsOnMobile from './stills-gallery.js';
import initThumbsOnDesktop from './thumbs-gallery.js';

document.querySelectorAll('details').forEach((el) => {
  new Accordion(el);
});

const FORM = document.getElementById('callback-form');
const FIELDS = ['phone-number'];
const inputValidation = new FormValidator(FORM, FIELDS, '+1');
inputValidation.initialize();

PhoneMask('.form__control--phone');

setCurrentyear('.copyright__year');

const ScheduleGallery = new Swiper('.schedule__gallery', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

const TeamGallery = new Swiper('.team__gallery', {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    900: {
      slidesPerView: 3,
      mousewheel: {
        forceToAxis: true,
      },
      grabCursor: true,
    }
  },
});

initStillsOnMobile();
window.addEventListener('resize', initStillsOnMobile);

initThumbsOnDesktop();
window.addEventListener('resize', initThumbsOnDesktop);