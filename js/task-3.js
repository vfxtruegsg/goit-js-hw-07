const inputField = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputField.addEventListener("input", (even) => {
  const trimmedValueInput = inputField.value.trim();
  outputText.textContent =
    trimmedValueInput === "" ? "Anonymous" : trimmedValueInput;
});
