function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const span = document.querySelector(".color");
const button = document.querySelector(".change-color");
const body = document.querySelector("body");
let colorValue = getRandomHexColor();

const changeBgdColor = (event) => {
  colorValue = getRandomHexColor();
  body.style.backgroundColor = colorValue;
  span.textContent = colorValue;
};

button.addEventListener("click", changeBgdColor);
