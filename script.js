// for header
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("shadow-md");
    header.classList.remove("m-5", "rounded-3xl");
  } else {
    header.classList.add("m-5", "rounded-3xl");
    header.classList.remove("shadow-md");
  }
});

// for smooth scroll
// // scroll.js
// document.addEventListener("DOMContentLoaded", () => {
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector("[data-scroll-container]"),
//     smooth: true,
//   });
// });
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.remove("opacity-0", "translate-y-5");
//         entry.target.classList.add("opacity-100", "translate-y-0");
//       }
//     });
//   },
//   {
//     threshold: 0.1,
//   }
// );

// document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
