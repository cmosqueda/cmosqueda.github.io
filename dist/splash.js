// splash screen

window.addEventListener("load", () => {
  const splash = document.getElementById("splash");

  // Fade out splash screen after 1.5s
  setTimeout(() => {
    splash.classList.add("opacity-0");
  }, 2000);

  // Remove splash from DOM after fade (optional)
  setTimeout(() => {
    splash.style.display = "none";
  }, 3000);
});
