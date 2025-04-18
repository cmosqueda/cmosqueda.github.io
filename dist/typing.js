// js/typing.js

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("typewriter");
  const phrases = [
    "One look, give 'em whiplash ",
    "Beat drop with a big flash ",
    "집중해 좀 더 think fast ",
    "이유 넌 이해 못 해 uh ",
    "왜 이제야 know I did that, uh ",
    "Day one, know I been bad, uh ",
    "Don't stop 흔들린 채 ",
    "무리해도 can't touch that (can't touch that) ",
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
