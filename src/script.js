let navSideBar = document.querySelector(".navigation");
let isToggled = false;

// for toggling menu
function toggleMenu() {
  if (isToggled == false) {
    isToggled = true;
    navSideBar.style.display = "flex";
  } else {
    isToggled = false;
    navSideBar.style.display = "";
  }
}
