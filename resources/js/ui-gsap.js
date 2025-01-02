// brand-key section 애니메이션
// const ani1 = gsap.timeline();

// let keySection = document.querySelector(".brand-key");
// let keyLogo = document.querySelector(".brand-key svg");

// ani1.to(keyLogo, { scale: 3, opacity: 0 });

// ScrollTrigger.create({
//   animation: ani1,
//   trigger: keySection,
//   start: "top top",
//   end: "+=200vh",
//   pin: true,
//   scrub: true,
//   pinSpacing: false,
//   markers: true,
// });

// 섹션 풀페이지 효과
// document.querySelectorAll(".sec-b").forEach((section) => {
//   gsap.from(section.querySelector("h2"), {
//     opacity: 0,
//     y: "20%", // 위로 20% 이동하면서 투명도 0에서 1로
//     duration: 1,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: section, // 각 섹션을 트리거로 사용
//       start: "top bottom", // 화면에 나타나는 위치 (섹션의 top이 화면 bottom에 닿을 때)
//       end: "bottom top", // 섹션의 bottom이 화면 top을 지날 때
//       scrub: true, // 스크롤에 맞춰 애니메이션 진행
//     },
//   });
// });

// main - lookbook section animation
// ====================================================

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // section.sec-g 제목 고정
  gsap.to(".sec-look .sec-g__tit", {
    zIndex: 1000,
    scrollTrigger: {
      trigger: ".sec-look",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      markers: true,
    },
  });

  const imgs = document.querySelector(".sec-look__default");

  // section.sec-cont 애니메이션
  gsap.to(".sec-look .sec-g__cont", {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".sec-look .sec-g__cont",
      start: "top 80%", // 컨텐츠가 화면의 80% 지점에 들어왔을 때 시작
      end: () => "+=" + (imgs.scrollHeight + window.innerHeight / 4),
      toggleActions: "play none none none",
    },
  });

  // .sec-look__default__img 오버레이 효과
  const activeEffect = document.querySelectorAll(".sec-look__default__img");

  activeEffect.forEach((img) => {
    const active = document.createElement("div");
    active.className = "scorll-active";
    img.appendChild(active);

    // 애니메이션 정의
    gsap.fromTo(
      active,
      { opacity: 0.5 }, // 초기 상태
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: img,
          start: "top 90%", // 이미지가 화면의 90% 지점에 들어왔을 때
          toggleActions: "play none none reverse",
        },
      }
    );
  });
});
