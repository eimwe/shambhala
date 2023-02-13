import Swiper from './swiper-bundle.esm.browser.js';

let StillsGallery, init = false;

const initStillsOnMobile = () => {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      StillsGallery = new Swiper('.photoreport__gallery', {
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
    }
  } else if (init) {
    StillsGallery.destroy();
    init = false;
  }
}

export default initStillsOnMobile;