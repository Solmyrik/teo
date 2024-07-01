const bgSlider = document.querySelector('.foryou__block');
const introSlider = document.querySelector('.intro__block');
const aboutSlider = document.querySelector('.about__block');
const cooperationSlider = document.querySelector('.cooperation__block');

//
const miniBlock = document.querySelectorAll('.mini-slider__block');
const miniPagination = document.querySelectorAll('.mini-slider__pagination');
const miniPrev = document.querySelectorAll('.mini-slider__prev');
const miniNext = document.querySelectorAll('.mini-slider__next');

miniBlock.forEach((e, i) => {
  e.classList.add(`mini-slider-${i + 1}`);
  miniPagination[i].classList.add(`mini-slider__pagination-${i + 1}`);
  miniPrev[i].classList.add(`mini-slider__prev-${i + 1}`);
  miniNext[i].classList.add(`mini-slider__next-${i + 1}`);

  new Swiper(`.mini-slider-${i + 1}`, {
    slidesPerView: 1,
    navigation: {
      nextEl: `.mini-slider__next-${i + 1}`,
      prevEl: `.mini-slider__prev-${i + 1}`,
    },
    pagination: {
      el: `.mini-slider__pagination-${i + 1}`,
      clickable: true,
    },
  });
});

if (bgSlider) {
  new Swiper('.foryou__block', {
    slidesPerView: 1,
    pagination: {
      el: '.foryou-pagination',
      clickable: true,
    },
  });
}
if (introSlider) {
  new Swiper('.intro__block', {
    slidesPerView: 1,
    pagination: {
      el: '.intro-pagination',
      clickable: true,
    },
  });
}

new Swiper('.answer__block', {
  slidesPerView: 1,
  pagination: {
    el: '.answer-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.answer__next',
    prevEl: '.answer__prew',
  },
});

new Swiper('.about__block', {
  slidesPerView: 1,
  pagination: {
    el: '.about-pagination',
    clickable: true,
  },
});
// new Swiper('.mini-slider-1', {
//   slidesPerView: 1,
//   navigation: {
//     nextEl: '.mini-slider__next-1',
//     prevEl: '.mini-slider__prev-1',
//   },
//   pagination: {
//     el: '.mini-slider__pagination-1',
//     clickable: true,
//   },
// });

new Swiper(cooperationSlider, {
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.cooperation__next',
    prevEl: '.cooperation__prew',
  },
  // pagination: {
  //   el: '.about-pagination',
  //   clickable: true,
  // },
});

const catalog = document.querySelector('.catalog');

if (catalog) {
  new Swiper('.catalog__block-1', {
    spaceBetween: 20,
    slidesPerView: 3,
    navigation: {
      nextEl: '.catalog__next-1',
      prevEl: '.catalog__prev-1',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
    // pagination: {
    //   el: '.about-pagination',
    //   clickable: true,
    // },
  });
  new Swiper('.catalog__block-2', {
    spaceBetween: 20,
    slidesPerView: 3,
    navigation: {
      nextEl: '.catalog__next-2',
      prevEl: '.catalog__prev-2',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
    // pagination: {
    //   el: '.about-pagination',
    //   clickable: true,
    // },
  });
  new Swiper('.catalog__block-3', {
    spaceBetween: 20,
    slidesPerView: 3,
    navigation: {
      nextEl: '.catalog__next-3',
      prevEl: '.catalog__prev-3',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
    // pagination: {
    //   el: '.about-pagination',
    //   clickable: true,
    // },
  });
  new Swiper('.catalog__block-4', {
    spaceBetween: 20,
    slidesPerView: 3,
    navigation: {
      nextEl: '.catalog__next-4',
      prevEl: '.catalog__prev-4',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
    // pagination: {
    //   el: '.about-pagination',
    //   clickable: true,
    // },
  });
}
