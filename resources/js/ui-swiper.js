const swiperIntro = new Swiper(".slide-intro", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {},
  loop: true,
  secName: "slide",
});

// best arrivals section
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
  secName: "sec-best",
});

const swiperBestInfo = new Swiper(".slide-best-info", {
  centeredSlides: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    on: {
      autoplayTimeLeft(s, time, progress) {
        const circles = document.querySelectorAll(".progress-ring__circle");
        circles.forEach((circle) => {
          const offset = 44 * (1 - progress); // 진행 상황에 따라 offset 계산
          circle.style.strokeDashoffset = offset;
        });
      },
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `
        <span class="${className}">
          <svg class="progress-ring" width="20" height="20">
            <circle
              class="progress-ring__circle"
              cx="10"
              cy="10"
              r="7"
              fill="transparent"
              stroke="#000"
              stroke-width="2"
              stroke-dasharray="44"
              stroke-dashoffset="44"
            ></circle>
          </svg>
        </span>`;
    },
  },
  secName: "sec-best",
});

// bestImg 스와이퍼와 bestInfo 스와이퍼를 연동
swiperBestImg.controller.control = swiperBestInfo;
swiperBestInfo.controller.control = swiperBestImg;

// new arrivals section
// ====================================================

const swiperNew = new Swiper(".slide-new", {
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".sec-new-pagination",
    clickable: true,
  },
  loop: true,
  secName: "sec-new",
});

const swiperBranding = new Swiper(".slide-branding", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  secName: "sec-branding",
});

// swiper 재생/정지 버튼 컨트롤
// ============================================================================
const swiperWrapper = document.querySelector(".swiper-wrapper");
const swiperList = [swiperIntro, swiperBestImg, swiperBestInfo, swiperNew, swiperBranding];

swiperList.forEach((item) => {
  const playPauseButton = document.querySelector(`.${item.passedParams.secName} .swiper-button-play-pause`);

  playPauseButton.addEventListener("click", function () {
    if (item === swiperBestImg) {
      return;
    }

    const span = this.querySelector("span");
    playPauseButton.classList.toggle("clicked");
    playPauseButton.classList.toggle("default");

    if (item.autoplay.running) {
      item.autoplay.stop();
      swiperWrapper.setAttribute("aria-live", "polite");
      this.setAttribute("aria-label", "슬라이드 쇼 재생");

      if (span) {
        span.textContent = "재생";
      }
    } else {
      item.autoplay.start();
      swiperWrapper.setAttribute("aria-live", "off");
      this.setAttribute("aria-label", "슬라이드 쇼 정지");

      if (span) {
        span.textContent = "정지";
      }
    }
  });
});

// playPauseButton.addEventListener("click", function () {
//   const span = this.querySelector("span");
//   playPauseButton.classList.toggle("clicked");
//   playPauseButton.classList.toggle("default");
//   swiperList.map((item) => {
//     if (item.autoplay.running) {
//       item.autoplay.stop();
//       swiperWrapper.setAttribute("aria-live", "polite");
//       this.setAttribute("aria-label", "슬라이드 쇼 재생");

//       if (span) {
//         span.textContent = "재생";
//       }
//     } else {
//       item.autoplay.start();
//       swiperWrapper.setAttribute("aria-live", "off");
//       this.setAttribute("aria-label", "슬라이드 쇼 정지");

//       if (span) {
//         span.textContent = "정지";
//       }
//     }
//   });
// });

// playPauseButton.addEventListener("click", function () {
//   const span = this.querySelector("span");
//   playPauseButton.classList.toggle("clicked");
//   playPauseButton.classList.toggle("default");
//   if (swiperIntro.autoplay.running) {
//     swiperIntro.autoplay.stop();
//     swiperWrapper.setAttribute("aria-live", "polite");
//     this.setAttribute("aria-label", "슬라이드 쇼 재생");

//     if (span) {
//       span.textContent = "재생";
//     }
//   } else {
//     swiperIntro.autoplay.start();
//     swiperWrapper.setAttribute("aria-live", "off");
//     this.setAttribute("aria-label", "슬라이드 쇼 정지");

//     if (span) {
//       span.textContent = "정지";
//     }
//   }
// });
