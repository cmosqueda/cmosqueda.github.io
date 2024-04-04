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

let introContinue = document.getElementById("moreContent");
let readMoreSpan = document.getElementById("readMore");
let readLessSpan = document.getElementById("readLess");
let seeMoreToggled = false;

readLessSpan.style.textDecoration = "underline";

// for toggling see more button on about me
function seeMore() {
  if (seeMoreToggled == false) {
    seeMoreToggled = true;
    introContinue.style.display = "contents";
    readMoreSpan.style.display = "none";
    readLessSpan.style.display = "contents";

    readLessSpan.style.textDecoration = "underline";
  } else {
    seeMoreToggled = false;
    introContinue.style.display = "";
    readMoreSpan.style.display = "contents";
    readLessSpan.style.display = "";
  }
}
