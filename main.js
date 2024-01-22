let colors = [
  "aqua",
  "aquamarine",
  "beige",
  "chocolate",
  "coral",
  "crimson",
  "gold",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "maroon",
  "navy",
  "olive",
  "orchid",
  "plum",
  "salmon",
  "sienna",
  "tan",
  "teal",
  "turquoise",
  "violet",
]
let color = colors[0];
let i = 0;

const box = document.getElementById("box");
const nameInput = document.getElementById("name-input");
const guessBtn = document.getElementById("guess-btn");
const revealBtn = document.getElementById("reveal-btn");
const newColorBtn = document.getElementById("new-color-btn");
const feedback = document.getElementById("feedback");

guessBtn.addEventListener("click", () => {
  let guess = nameInput.value.toLowerCase();
  if (guess === color) {
    feedback.innerHTML = "Good job!";
    feedback.style.color = "green";
    feedback.style.display = "block";
  } else {
    feedback.innerHTML = "Try again";
    feedback.style.color = "red";
    feedback.style.display = "block";
  }
  setTimeout(() => {
    feedback.style.display = "none";
  }, 2000)
})

revealBtn.addEventListener("click", () => {
  feedback.innerHTML = color[0].toUpperCase() + color.slice(1);
  feedback.style.color = "gray";
  feedback.style.display = "block";
  setTimeout(() => {
    feedback.style.display = "none";
  }, 2000)
})

newColorBtn.addEventListener("click", () => {
  let newColor = color;
  while (newColor === color) {
    newColor = colors[Math.floor(Math.random() * colors.length)];
  }
  color = newColor;
  box.style.background = color;

  nameInput.value = "";
  feedback.style.display = "none";
});