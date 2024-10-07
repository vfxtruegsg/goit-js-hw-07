function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

destroyButton.addEventListener("click", destrotBoxes);
function destrotBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

function createBoxes(amount) {
  boxesContainer.innerHTML = "";

  let size = 30;
  let boxesHTML = "";

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}; margin-bottom: 10px;"></div>`;
    size += 10;
  }

  boxesContainer.innerHTML = boxesHTML;
}
