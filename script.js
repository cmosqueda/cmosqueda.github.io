// project data objects
// projects nako

var projectsData = [
  {
    // Java UDBMS
    logoSrc: "./assets/project_logos/java_ustp_dbms_logo.png",
    title: "Java USTP DBMS Project",
    description: "A simple GUI standalone database system using text file handling developed with windowbuilder.",
    link: "https://github.com/cmosqueda/group6_ustpdbms",
  },
  {
    // TUkinter
    logoSrc: "./assets/project_logos/python_tukinter_logo.png",
    title: "TUkinter",
    description: "A simple GUI tkinter tutorial application developed with Python's tkinter.",
    link: "https://github.com/cmosqueda/tkinter_gui",
  },
  {
    // UniDeals
    logoSrc: "./assets/project_logos/figma_unideals_logo.png",
    title: "Unideals",
    description: "A school e-commerce web application mockup designed on figma.",
    link: "https://www.figma.com/proto/hIvYdOgvDCLvtDO1TrHzP7/R6-%7C-Mosqueda%2C-Christine-Reisa-P.?type=design&node-id=1-2&t=4qdUzuuNV9ysUgAD-0&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A2",
  },
  {
    // FFF
    logoSrc: "./assets/project_logos/figma_fff_logo.png",
    title: "Fred's Fast Food",
    description: "A fastfood e-commerce web application mockup designed on figma.",
    link: "https://www.figma.com/proto/mfrYEEvKEqFmlEj4IBabNb/R6---Mosqueda%2C-Christine-Reisa-P.-%7C-Finals-PIT?node-id=2-2&scaling=scale-down-width",
  },
  {
    // Stopwatch
    logoSrc: "./assets/project_logos/webapp_stopwatch_logo.png",
    title: "Stopwatch Web App",
    description: "A simple stopwatch web app.",
    link: "/cmosqueda.github.io/assets/web_apps/stopwatch.html",
  },
  {
    // Interture
    logoSrc: "./assets/interture_icon.png",
    title: "Interture Web",
    description:
      "A frontend web e-commerce prototype developed using ReactJS Vite. (Collaborative work with P.N.Salaan, S.N.Tilan, R.A.Naliatan, D.J.Ebajay, L.C.Flores)",
    link: "https://github.com/cmosqueda/interture-react",
  },
];

// image arrays
// artworks
var artworks_arr = [
  "./assets/artworks/1.jpg",
  "./assets/artworks/2.jpg",
  "./assets/artworks/3.jpg",
  // "./assets/artworks/4.jpg",
  // "./assets/artworks/5.jpg",
  // "./assets/artworks/6.jpg",
  // "./assets/artworks/7.jpg",
  // "./assets/artworks/8.jpg",
  // "./assets/artworks/9.jpg",
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
  // "./assets/artworks/43.png",
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

// dynamic html for projects
// parent node
var projContentHolder = document.getElementById("project-content");

const projSectionTitle = document.createElement("div");
projSectionTitle.id = "project-section-title";
projSectionTitle.textContent = "Projects";
projContentHolder.appendChild(projSectionTitle);

projectsData.forEach((project) => {
  const projLink = document.createElement("a");
  projLink.className = "project-link";
  projLink.href = project.link;
  projContentHolder.appendChild(projLink);

  // sulod sa link => project card
  const projectCard = document.createElement("div");
  projectCard.className = "project-card";
  projLink.appendChild(projectCard);

  // sulod sa project card
  const logoHolder = document.createElement("img");
  logoHolder.className = "project-logo";
  logoHolder.src = project.logoSrc;
  projectCard.appendChild(logoHolder);

  const detailsHolder = document.createElement("div");
  detailsHolder.className = "project-details-holder";
  projectCard.appendChild(detailsHolder);

  // sulod sa details holder
  // title
  const projTitle = document.createElement("h2");
  projTitle.className = "project-title";
  projTitle.textContent = project.title;
  detailsHolder.appendChild(projTitle);

  // project description
  const projDesc = document.createElement("p");
  projDesc.className = "project-description";
  projDesc.textContent = project.description;
  detailsHolder.appendChild(projDesc);
});

// dynamic html for art gallery

// ultra mega parent node
var artGallSection = document.getElementById("artworks-section");

const artSectionTitle = document.createElement("div");
artSectionTitle.id = "art-section-title";
artSectionTitle.textContent = "Art Gallery";
artGallSection.appendChild(artSectionTitle);

// parent node
var artContentHolder = document.getElementById("art-content-holder");

// artworks dynamic
artworks_arr.forEach((art) => {
  const artHolder = document.createElement("div");
  artContentHolder.appendChild(artHolder);

  // element for image
  const artImage = document.createElement("img");
  artImage.src = art;
  artHolder.appendChild(artImage);
});
