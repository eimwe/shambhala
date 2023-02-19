import Swiper from '../../vendor/swiper-bundle.esm.browser.js';
import { large } from '../../breakpoints.js';

let FullsizeGallery, ThumbsGallery, initThumbs = false;

const initThumbsOnDesktop = () => {
  if (large.matches) {
    if (!initThumbs) {
      initThumbs = true;
      ThumbsGallery = new Swiper('.gallery__bottom', {
        slidesPerView: 'auto',
        loop: true,
        freeMode: true,
        loopedSlides: 14, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
          1200: {
            loop: false,
          }
        },
      });
      FullsizeGallery = new Swiper('.gallery__top', {
        loop: true,
        loopedSlides: 14, //looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: ThumbsGallery,
        },
      });
    }
  } else if (initThumbs) {
    FullsizeGallery.destroy();
    ThumbsGallery.destroy();
    initThumbs = false;
  }
}

export default initThumbsOnDesktop;