new Swiper('.mainblock__slider', {
  slidesPerView: 1,
  autoHeight: true,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  simulateTouch: false,
  thumbs: {
    swiper: {
      el: '.mini-slider',
      slidesPerView: 3,
      spacesBetween: 18,
      navigation: {
        nextEl: '.mini-slider__btn-next',
        prevEl: '.mini-slider__btn-prev',
      },
      breakpoints: {
        1400: {
          slidesPerView: 3,
        },
        320: {
          slidesPerView: 4,
        },
      },
    },
  },
});

new Swiper('.elem__slider', {
  slidesPerView: 2.1,
  autoHeight: false,
  // freeMode: true,
  navigation: {
    nextEl: '.elem__btn-next',
    prevEl: '.elem__btn-prev',
  },
});
