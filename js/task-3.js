const inputField = document.getElementById("name-input");
const outputText = document.getElementById("name-output");

inputField.addEventListener("input", (even) => {
  const trimmedValueInput = inputField.value.trim();
  outputText.textContent =
    trimmedValueInput === "" ? "Anonymous" : trimmedValueInput;
});
