window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("shadow-md");
    header.classList.remove("m-5");
  } else {
    header.classList.add("m-5");
    header.classList.remove("shadow-md");
  }
});
