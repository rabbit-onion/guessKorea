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
document.querySelectorAll(".sec-b").forEach((section) => {
  gsap.from(section.querySelector("h2"), {
    opacity: 0,
    y: "20%", // 위로 20% 이동하면서 투명도 0에서 1로
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section, // 각 섹션을 트리거로 사용
      start: "top bottom", // 화면에 나타나는 위치 (섹션의 top이 화면 bottom에 닿을 때)
      end: "bottom top", // 섹션의 bottom이 화면 top을 지날 때
      scrub: true, // 스크롤에 맞춰 애니메이션 진행
    },
  });
});
