document.addEventListener("DOMContentLoaded", function () {
  const goTopBtn = document.getElementById("goTopBtn");
  const resumeBtn = document.getElementById("resumeBtn");

  window.addEventListener("scroll", () => {
    const show = window.scrollY > 200;

    [goTopBtn, resumeBtn].forEach((btn) => {
      if (show) {
        btn.classList.add("opacity-100");
        btn.classList.remove("opacity-0", "pointer-events-none");
      } else {
        btn.classList.remove("opacity-100");
        btn.classList.add("opacity-0", "pointer-events-none");
      }
    });
  });

  window.goToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
});
