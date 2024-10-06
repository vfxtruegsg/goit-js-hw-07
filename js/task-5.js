function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const bodyColorActive = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");

buttonChangeColor.addEventListener("click", changeColor);

function changeColor(event) {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  bodyColorActive.textContent = newColor;
}
