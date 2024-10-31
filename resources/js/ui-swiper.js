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
  loop: true,
});

// new arrivals section
// ====================================================

const swiperBestImg = new Swiper(".slide-best-img", {
  centeredSlides: true,
  effect: "fade",
  loop: true,
  speed: 1000,
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChangeTransitionStart: function () {},
  },
});

const swiperBestInfo = new Swiper(".slide-best-info", {
  centeredSlides: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// bestImg 스와이퍼와 bestInfo 스와이퍼를 연동
swiperBestImg.controller.control = swiperBestInfo;
swiperBestInfo.controller.control = swiperBestImg;

// swiper 재생/정지 버튼
// ===================================================================
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

// new arrivals section
// ====================================================

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
  loop: true,
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
  loop: true,
});
