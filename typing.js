// js/typing.js

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("typewriter");
  const phrases = [
    "tripi tropi ",
    "tung tung tung tung sahur ",
    "tralalero tralala ",
    "bombardini crocodili ",
    "potini vedridini ",
    "boom shakalaka ",
    "sobrang latina ",
  ];

  let currentPhrase = 0;
  let currentChar = 0;
  let isDeleting = false;

  function type() {
    const currentText = phrases[currentPhrase];
    const displayedText = isDeleting
      ? currentText.substring(0, currentChar--)
      : currentText.substring(0, currentChar++);

    element.textContent = displayedText;

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && currentChar === currentText.length) {
      delay = 1000;
      isDeleting = true;
    } else if (isDeleting && currentChar === 0) {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      delay = 300;
    }

    setTimeout(type, delay);
  }

  type();
});
