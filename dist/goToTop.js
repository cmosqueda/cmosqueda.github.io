// goToTop.js

document.addEventListener("DOMContentLoaded", function () {
  const goTopBtn = document.getElementById("goTopBtn");

  // Show button when user scrolls down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      goTopBtn.classList.add("opacity-100");
      goTopBtn.classList.remove("opacity-0", "pointer-events-none");
    } else {
      goTopBtn.classList.remove("opacity-100");
      goTopBtn.classList.add("opacity-0", "pointer-events-none");
    }
  });

  // Scroll to top smoothly
  window.goToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
});
