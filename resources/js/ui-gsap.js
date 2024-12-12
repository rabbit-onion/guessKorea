// brand-key section 애니메이션
const ani1 = gsap.timeline();

let keySection = document.querySelector(".brand-key");
let keyLogo = document.querySelector(".brand-key svg");

ani1.to(keyLogo, { scale: 3, opacity: 0 });

ScrollTrigger.create({
  animation: ani1,
  trigger: keySection,
  start: "top top",
  end: "+=200vh",
  pin: true,
  scrub: true,
  pinSpacing: false,
  markers: true,
});

// 섹션 풀페이지 효과
