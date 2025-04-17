document.addEventListener("DOMContentLoaded", () => {
  const flipCard = document.getElementById("flip-card");
  const flipInner = document.getElementById("flip-inner");
  const backText = document.getElementById("back-text");

  const phrases = [
    "The stars whispered your name tonight.",
    "You're the calm in chaos.",
    "Magic is just reality in disguise.",
    "Curiosity is your superpower.",
    "You see what others miss.",
    "Grayscale is your color of wisdom.",
    "You radiate stillness and strength.",
    "Reality bends for those who observe.",
    "You belong in the in-between.",
    "The quietest minds speak the loudest truths.",
  ];

  if (flipCard && flipInner && backText) {
    flipCard.addEventListener("click", () => {
      flipInner.classList.toggle("flipped");

      if (flipInner.classList.contains("flipped")) {
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        backText.textContent = randomPhrase;
      }
    });
  } else {
    console.warn("Element(s) not found:", { flipCard, flipInner, backText });
  }
});
