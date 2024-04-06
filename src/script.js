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

// projects button
let allProjBtn = document.getElementById("p-allProjects");
let javaBtn = document.getElementById("p-java");
let pythonBtn = document.getElementById("p-python");
let figmaBtn = document.getElementById("p-figma");
let webappBtn = document.getElementById("p-webapp");

// projects container a classes
let javaProjs = document.getElementsByClassName("java-app");
let pythonProjs = document.getElementsByClassName("python-app");
let figmaProjs = document.getElementsByClassName("figma-design");
let webappProjs = document.getElementsByClassName("web-app");

function displayProject(p) {
  if (p == "all") {
    // undo button styles
    let otherBtns = [pythonBtn, figmaBtn, allProjBtn, webappBtn, javaBtn];

    for (let btns of otherBtns) {
      btns.style.backgroundColor = "";
      btns.style.color = "";
    }

    // undo projects display

    for (let projects of javaProjs) {
      projects.style.display = "";
    }

    for (let projects of pythonProjs) {
      projects.style.display = "";
    }

    for (let projects of figmaProjs) {
      projects.style.display = "";
    }

    for (let projects of webappProjs) {
      projects.style.display = "";
    }

    // diri ko ni stop
  } else if (p == "java") {
    // undo button styles
    let otherBtns = [pythonBtn, figmaBtn, allProjBtn, webappBtn];

    for (let btns of otherBtns) {
      btns.style.backgroundColor = "";
      btns.style.color = "";
    }

    allProjBtn.style.color = "black";
    allProjBtn.style.backgroundColor = "var(--color-accent)";

    // apply button style to java button only
    javaBtn.style.color = "var(--color-accent)";
    javaBtn.style.background = "black";

    for (let projects of javaProjs) {
      projects.style.display = "";
    }

    // hide other projects
    for (let projects of pythonProjs) {
      projects.style.display = "none";
    }

    for (let projects of figmaProjs) {
      projects.style.display = "none";
    }

    for (let projects of webappProjs) {
      projects.style.display = "none";
    }
  } else if (p == "python") {
    // undo button styles
    let otherBtns = [figmaBtn, javaBtn, allProjBtn, webappBtn];

    for (let btns of otherBtns) {
      btns.style.backgroundColor = "";
      btns.style.color = "";
    }

    allProjBtn.style.color = "black";
    allProjBtn.style.backgroundColor = "var(--color-accent)";

    pythonBtn.style.color = "var(--color-accent)";
    pythonBtn.style.background = "black";

    for (let projects of javaProjs) {
      projects.style.display = "none";
    }

    for (let projects of pythonProjs) {
      projects.style.display = "";
    }

    for (let projects of figmaProjs) {
      projects.style.display = "none";
    }

    for (let projects of webappProjs) {
      projects.style.display = "none";
    }
  } else if (p == "figma") {
    // undo button styles
    let otherBtns = [pythonBtn, javaBtn, allProjBtn, webappBtn];

    for (let btns of otherBtns) {
      btns.style.backgroundColor = "";
      btns.style.color = "";
    }

    allProjBtn.style.color = "black";
    allProjBtn.style.backgroundColor = "var(--color-accent)";

    figmaBtn.style.color = "var(--color-accent)";
    figmaBtn.style.background = "black";

    for (let projects of javaProjs) {
      projects.style.display = "none";
    }

    for (let projects of pythonProjs) {
      projects.style.display = "none";
    }

    for (let projects of figmaProjs) {
      projects.style.display = "";
    }

    for (let projects of webappProjs) {
      projects.style.display = "none";
    }
  } else if (p == "webapp") {
    // undo button styles
    let otherBtns = [figmaBtn, javaBtn, allProjBtn, pythonBtn];

    for (let btns of otherBtns) {
      btns.style.backgroundColor = "";
      btns.style.color = "";
    }

    allProjBtn.style.color = "black";
    allProjBtn.style.backgroundColor = "var(--color-accent)";

    webappBtn.style.color = "var(--color-accent)";
    webappBtn.style.background = "black";

    for (let projects of javaProjs) {
      projects.style.display = "none";
    }

    for (let projects of pythonProjs) {
      projects.style.display = "none";
    }

    for (let projects of figmaProjs) {
      projects.style.display = "none";
    }

    for (let projects of webappProjs) {
      projects.style.display = "";
    }
  }
}
