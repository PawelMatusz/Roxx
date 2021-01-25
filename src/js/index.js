// core version + navigation, pagination modules:
import Swiper from 'swiper/bundle';
// configure Swiper to use modules
// import Swiper styles
import 'swiper/swiper-bundle.css';

import showMessageToggle from './Form';

const Selectors = {
  formButton: '[data-form-send]',
};

const formButton = document.querySelectorAll(Selectors.formButton);

const swiperContainer = document.querySelector('.swiper-container');
var mySwiper = new Swiper(swiperContainer, {
  // Optional parameters
  speed: 2000,
  loop: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: true,
    modifier: 1,
    depth: 33,
  },
  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  pagination: {
    el: document.querySelector('.swiper-pagination'),
    type: 'bullets',
  },
});

formButton.forEach(button =>
  button.addEventListener('click', e => {
    e.preventDefault();
    showMessageToggle(e);
  })
);
