// button menu-bar mobile orientation
const menuButton = document.getElementById("topnav-toggle");
var isMenuToggled = false;

// topnav mobile dom
// also topnav mobile dom but id
const topnavMobile = document.getElementById("topnav-mobile");

menuButton.addEventListener("click", (e) => {
  if (isMenuToggled === false) {
    topnavMobile.style.top = "7%";
    menuButton.style.transform = "rotate(90deg)";
    isMenuToggled = true;
  } else {
    topnavMobile.style.top = "";
    menuButton.style.transform = "rotate(0deg)";
    isMenuToggled = false;
  }
});

const topnavMobileLinks = document.querySelectorAll(".topnav-mobile-a");

topnavMobileLinks.forEach((linkElement) => {
  linkElement.addEventListener("click", () => {
    topnavMobile.style.top = "";
    menuButton.style.transform = "rotate(0deg)";
    isMenuToggled = false;
  });
});

// sa id card nga mag flip animation
var isIdCardFlipped = false;
const idCard = document.getElementById("id-card");
const flipCardsClick = document.querySelectorAll(".flip-card-click");

flipCardsClick.forEach((clickArea) => {
  clickArea.addEventListener("click", () => {
    if (isIdCardFlipped === false) {
      // idCard.style.transform = "rotateY(180deg)";
      idCard.classList.toggle("active");
      isIdCardFlipped = true;
    } else {
      // cardBack.style.transform = "rotateY(180deg)";
      idCard.classList.toggle("active");
      isIdCardFlipped = false;
    }
  });
});
