/**
 * @var {Array} projectsData - contains jsonified data of projects.
 *
 */

export var projectsData = [
  {
    // java udbms
    logoSrc: "./assets/project_logos/java_ustp_dmbs_logo.png",
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
      "A proposed study helper app developed using Expo React Native as frontend and Firebase as a serverless backend and database.",
    link: "https://github.com/cmosqueda/moongle-buddy-app-gh",
  },
  {
    // currency converter
    logoSrc: "",
    projectName: "Currency Converter App",
    description: "A simple currency converter made for practicing API calls, developed using Expo React Native.",
    link: "https://github.com/cmosqueda/currency-converter-repo",
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
      "text-neutral-50 flex flex-row items-center border rounded-lg p-3 transition-all hover:shadow-lg w-full ";
    projectLink.target = "_blank"; // Open in new tab

    // Create image element
    const img = document.createElement("img");
    img.src = project.logoSrc;
    img.alt = project.projectName;
    img.className = "object-cover w-12 h-12 sm:w-20 sm:h-20 rounded-sm transition-all";

    // Create details container
    const detailsDiv = document.createElement("div");
    detailsDiv.className = "ml-3";

    // Project title
    const title = document.createElement("p");
    title.className = "text-sm sm:text-lg font-bold";
    title.textContent = project.projectName;

    // Project description
    const description = document.createElement("p");
    description.className = "text-xs sm:text-sm";
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
