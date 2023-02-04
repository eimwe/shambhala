import Swiper from './swiper-bundle.esm.browser.js';
import Accordion from './accordion.js';
import FormValidator from './form-validator.js';

document.querySelectorAll('details').forEach((el) => {
  new Accordion(el);
});

const FORM = document.getElementById('callback-form');
const FIELDS = ['phone-number'];
const inputValidation = new FormValidator(FORM, FIELDS, '+1');
inputValidation.initialize();

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

const StillsGallery = new Swiper('.photoreport__gallery', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  mousewheel: true,
  keyboard: true,
});