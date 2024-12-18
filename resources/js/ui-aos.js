document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".sec-b");

  sections.forEach(function (section) {
    section.setAttribute("data-aos", "fade-up");
    section.setAttribute("data-aos-once", "false");
  });

  AOS.init();
});
