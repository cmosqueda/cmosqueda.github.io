document.addEventListener("DOMContentLoaded", function () {
  const goTopBtn = document.getElementById("goTopBtn");
  const resumeBtn = document.getElementById("resumeBtn");
  const resumeText = document.getElementById("resumeText");
  const resumeIcon = document.getElementById("resumeIcon");

  let isExpanded = false;
  let autoCollapseTimer = null;

  // Show buttons on scroll
  window.addEventListener("scroll", () => {
    const show = window.scrollY > 200;

    [goTopBtn, resumeBtn].forEach((btn) => {
      if (show) {
        btn.classList.add("opacity-100");
        btn.classList.remove("opacity-0", "pointer-events-none");
      } else {
        btn.classList.remove("opacity-100");
        btn.classList.add("opacity-0", "pointer-events-none");
        collapseResume();
      }
    });
  });

  // Resume button behavior
  resumeBtn.addEventListener("click", function (e) {
    if (!isExpanded) {
      e.preventDefault();
      expandResume();
    } else {
      clearTimeout(autoCollapseTimer);
      window.open(resumeBtn.href, "_blank");
    }
  });

  // Collapse when clicking outside
  document.addEventListener("click", function (e) {
    if (isExpanded && !resumeBtn.contains(e.target)) {
      collapseResume();
    }
  });

  function expandResume() {
    isExpanded = true;

    resumeBtn.classList.remove("max-w-[40px]");
    resumeBtn.classList.add("max-w-[180px]");

    resumeText.classList.remove("max-w-0", "opacity-0");
    resumeText.classList.add("max-w-[140px]", "opacity-100");

    resumeIcon.classList.add("rotate-180");

    // Auto-collapse after 5 seconds
    autoCollapseTimer = setTimeout(() => {
      collapseResume();
    }, 5000);
  }

  function collapseResume() {
    isExpanded = false;

    resumeBtn.classList.remove("max-w-[180px]");
    resumeBtn.classList.add("max-w-[40px]");

    resumeText.classList.remove("max-w-[140px]", "opacity-100");
    resumeText.classList.add("max-w-0", "opacity-0");

    resumeIcon.classList.remove("rotate-180");

    clearTimeout(autoCollapseTimer);
  }

  // Scroll to top function
  window.goToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
});
