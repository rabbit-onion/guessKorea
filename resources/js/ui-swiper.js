// pagination bullet(active) 원의 반지름, 길이 지정
const r = 10;
const lengthCircle = 2 * Math.PI * r;

// intro slide
// ==============================================================
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
  secName: "sec-best",
});

const swiperBestInfo = new Swiper(".slide-best-info", {
  centeredSlides: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      const circles = document.querySelectorAll(".progress-ring__circle");
      const activeCircle = document.querySelector(".swiper-pagination-bullet-active .progress-ring__circle");
      const offset = lengthCircle * progress;

      activeCircle.style.strokeDashoffset = offset;

      circles.forEach((circle) => {
        if (circle !== activeCircle) {
          circle.style.strokeDashoffset = lengthCircle;
        }
      });
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `
        <span class="${className}">
          <svg class="progress-ring" width="25" height="25">
            <circle
              class="progress-ring__circle"
              cx="12.5"
              cy="12.5"
              r=${r}
              fill="transparent"
              stroke="#858585"
              stroke-width="1"
              stroke-dasharray=${lengthCircle}
              stroke-dashoffset=${lengthCircle}
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

// branding section
// ==========================================================
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
