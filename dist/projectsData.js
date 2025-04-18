/**
 * @var {Array} projectsData - contains jsonified data of projects.
 *
 */

export var projectsData = [
  {
    // java udbms
    logoSrc: "./assets/favicon.png",
    projectName: "Java UDBMS",
    description:
      "A simple GUI standalone student and instructor database management system using text file handling, developed with java windowbuilder, a drag-and-drop GUI designer.",
    link: "https://github.com/cmosqueda/group6_ustpdbms",
  },
  {
    // tukinter
    logoSrc: "./assets/project_logos/python_tukinter_logo.png",
    projectName: "TUkinter",
    description: "A simple GUI tkinter tutorial application developed with Python's tkinter.",
    link: "https://github.com/cmosqueda/tkinter_gui",
  },
  {
    // unideals
    logoSrc: "./assets/project_logos/figma_unideals_logo.png",
    projectName: "UniDeals",
    description:
      "A figma prototype for a proposed one-stop ordering, bartering, and queueing system for academic materials, school merchandise, and tutoring services in our university.",
    link: "https://www.figma.com/proto/hIvYdOgvDCLvtDO1TrHzP7/R6-%7C-Mosqueda%2C-Christine-Reisa-P.?type=design&node-id=1-2&t=4qdUzuuNV9ysUgAD-0&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A2",
  },
  {
    // FFF
    logoSrc: "./assets/project_logos/figma_fff_logo.png",
    projectName: "Fred's Fast Food",
    description: "A fastfood e-commerce web application mockup designed on figma.",
    link: "https://www.figma.com/proto/mfrYEEvKEqFmlEj4IBabNb/R6---Mosqueda%2C-Christine-Reisa-P.-%7C-Finals-PIT?node-id=2-2&scaling=scale-down-width",
  },
  {
    // Trail.lib
    logoSrc: "./assets/favicon.png",
    projectName: "Trail.lib",
    description:
      "Figma prototype of a “what-if” idea for our campus’s library. This simple solution is designed for browsing library catalogs, book detail viewing, and for monitoring transactions and activities of library members.",
    link: "https://www.figma.com/design/LU6EGSGaYpanF0OPb4X8Gu/Mosqueda_3R8_MidtermLab?node-id=0-1&t=rgeR93h1iyCOQBmw-1",
  },
  {
    // interture
    logoSrc: "./assets/project_logos/interture_icon.png",
    projectName: "InterTure",
    description:
      "A frontend prototype for an e-commerce developed using ReactJS Vite. (Collaborative work with P.N.Salaan, S.N.Tilan, R.A.Naliatan, D.J.Ebajay, L.C.Flores)",
    link: "https://github.com/cmosqueda/interture-react",
  },
  {
    // moongle buddy
    logoSrc: "./assets/project_logos/moongle_icon.png",
    projectName: "MOONGLE Buddy",
    description:
      "A proposed study helper app developed using Expo React Native as frontend and Firebase as a serverless backend and database. (Collaborative work with S.N.Tilan, J.Baraocor, L.C.Flores)",
    link: "https://github.com/cmosqueda/moongle-buddy-app-gh",
  },
  {
    // currency converter
    logoSrc: "./assets/favicon.png",
    projectName: "Currency Converter App",
    description: "A simple currency converter made for practicing API calls, developed using Expo React Native.",
    link: "https://github.com/cmosqueda/currency-converter-repo",
  },
  {
    // sudoku react game
    logoSrc: "./assets/project_logos/sudoku_icon.png",
    projectName: "Sudoku Game - Expo React Native",
    description: "A simple Sudoku game developed using Expo React Native as frontend.",
    link: "https://github.com/cmosqueda/sudoku-react",
  },
  {
    logoSrc: "./assets/favicon.png",
    projectName: "Affitnity",
    description: "A working, full-stack web prototype for a fitness app using React, Django, and PostgreSQL. (WIP)",
    link: "https://github.com/cmosqueda/affitnity-react",
  },
  {
    logoSrc: "./assets/favicon.png",
    projectName: "Rock Paper Scissors CLI (Windows .exe)",
    description: "A retro-style CLI-based game written in Python, packaged as an .exe for Windows.",
    link: "https://github.com/cmosqueda/rock-paper-scissors-cli",
  },
];

const projectsWrapper = document.getElementById("projectswrapperid");

// Function to render projects dynamically
function renderProjects() {
  projectsData.forEach((project) => {
    // Create anchor element
    const projectLink = document.createElement("a");
    projectLink.href = project.link;
    projectLink.className =
      " text-neutral-50 flex flex-col flex-grow items-center text-center border rounded-lg p-5 bg-neutral-900 hover:bg-neutral-200 hover:text-neutral-900 hover:shadow-xl transition-all w-auto sm:w-[260px] h-auto  ";
    projectLink.target = "_blank"; // Open in new tab
    projectLink.classList.add("cursor-pointer");

    // Create image element
    const img = document.createElement("img");
    img.src = project.logoSrc;
    img.alt = project.projectName;
    img.className = "object-cover w-14 h-14 sm:w-20 sm:h-20 rounded-md transition-all";

    // Create details container
    const detailsDiv = document.createElement("div");
    detailsDiv.className = " mt-3";

    // Project title
    const title = document.createElement("p");
    title.className = "text-sm sm:text-lg font-bold";
    title.textContent = project.projectName;

    // Project description
    const description = document.createElement("p");
    description.className = "text-xs hidden sm:block";
    description.textContent = project.description;

    // Append elements
    detailsDiv.appendChild(title);
    detailsDiv.appendChild(description);
    projectLink.appendChild(img);
    projectLink.appendChild(detailsDiv);
    projectsWrapper.appendChild(projectLink);
  });
}

// Call the function after DOM is loaded
document.addEventListener("DOMContentLoaded", renderProjects);
