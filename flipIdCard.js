document.addEventListener("DOMContentLoaded", () => {
  const flipCard = document.getElementById("flip-card");
  const flipInner = document.getElementById("flip-inner");
  const backText = document.getElementById("back-text");

  const phrases = [
    "Tralalero tralala",
    "Bombardini crocodili",
    "Tripi tropi",
    "Tung tung tung tung sahur",
    "What haffen vella",
    "Super idol de xiaorong",
    "I-step by the step, sakses ka eh, bigla kang sumakses eh",
    "Makikita mo sa imagine mo na bigla kang sumakses",
    "Ballerina cappuccina",
    "Baby mama t-rex",
    "Don coccodrillo",
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
