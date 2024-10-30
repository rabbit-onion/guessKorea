const swiperIntro = new Swiper(".slide-intro", {
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {},
});

const swiperBestImg = new Swiper(".slide-best-img", {
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {},
});

const swiperBestInfo = new Swiper(".slide-best-info", {
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {},
});

const swiperWrapper = document.querySelector(".swiper-wrapper");
const playPauseButton = document.querySelector(".swiper-button-play-pause");

playPauseButton.addEventListener("click", function () {
  const span = this.querySelector("span");
  playPauseButton.classList.toggle("clicked");
  playPauseButton.classList.toggle("default");
  if (swiperIntro.autoplay.running) {
    swiperIntro.autoplay.stop();
    swiperWrapper.setAttribute("aria-live", "polite");
    this.setAttribute("aria-label", "슬라이드 쇼 재생");

    if (span) {
      span.textContent = "재생";
    }
  } else {
    swiperIntro.autoplay.start();
    swiperWrapper.setAttribute("aria-live", "off");
    this.setAttribute("aria-label", "슬라이드 쇼 정지");

    if (span) {
      span.textContent = "정지";
    }
  }
});

const swiperNew = new Swiper(".slide-new", {
  slidesPerView: 1.555,
  spaceBetween: 30,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {},
});

const swiperBranding = new Swiper(".slide-branding", {
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {},
});
