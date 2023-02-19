import Swiper from '../../vendor/swiper-bundle.esm.browser.js';

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

export default TeamGallery;