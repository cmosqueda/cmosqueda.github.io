// image arrays
// artworks
var artworks_arr = [
  "./assets/artworks/1.jpg",
  "./assets/artworks/2.jpg",
  "./assets/artworks/3.jpg",
  "./assets/artworks/4.jpg",
  "./assets/artworks/5.jpg",
  "./assets/artworks/5.jpg",
  "./assets/artworks/7.jpg",
  "./assets/artworks/8.jpg",
  "./assets/artworks/9.jpg",
  "./assets/artworks/10.png",
  "./assets/artworks/11.png",
  "./assets/artworks/12.png",
  "./assets/artworks/13.png",
  "./assets/artworks/14.png",
  "./assets/artworks/15.png",
  "./assets/artworks/16.png",
  "./assets/artworks/17.png",
  "./assets/artworks/18.png",
  "./assets/artworks/19.png",
  "./assets/artworks/20.png",
  "./assets/artworks/21.png",
  "./assets/artworks/22.png",
  "./assets/artworks/23.png",
  "./assets/artworks/24.png",
  "./assets/artworks/25.png",
  "./assets/artworks/26.png",
  "./assets/artworks/27.png",
  "./assets/artworks/28.png",
  "./assets/artworks/29.png",
  "./assets/artworks/30.png",
  "./assets/artworks/31.png",
  "./assets/artworks/32.png",
  "./assets/artworks/33.jpg",
  "./assets/artworks/34.png",
  "./assets/artworks/35.jpg",
  "./assets/artworks/36.png",
  "./assets/artworks/37.png",
  "./assets/artworks/38.jpg",
  "./assets/artworks/39.png",
  "./assets/artworks/40.png",
  "./assets/artworks/41.png",
  "./assets/artworks/42.jpg",
  "./assets/artworks/43.png",
  "./assets/artworks/44.png",
  "./assets/artworks/45.jpg",
  "./assets/artworks/46.jpg",
  "./assets/artworks/47.jpg",
  "./assets/artworks/48.jpg",
  "./assets/artworks/49.jpg",
  "./assets/artworks/50.jpg",
  "./assets/artworks/51.jpg",
  "./assets/artworks/52.jpg",
  "./assets/artworks/53.png",
  "./assets/artworks/54.png",
];

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
      idCard.classList.toggle("active-card-flip");
      isIdCardFlipped = true;
    } else {
      // cardBack.style.transform = "rotateY(180deg)";
      idCard.classList.toggle("active-card-flip");
      isIdCardFlipped = false;
    }
  });
});
