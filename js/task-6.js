function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputField = document.querySelector("#controls input");
const allButton = document.querySelectorAll("#controls button");

allButton[0].classList.add("create-button");
allButton[1].classList.add("destroy-button");
