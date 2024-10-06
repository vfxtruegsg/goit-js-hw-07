const form = document.querySelector(".login-form");
const submitButton = document.querySelector(".login-form button");
const inputFields = document.querySelectorAll("input");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const elements = event.target.elements;
  if (inputFields[0].value === "" || inputFields[1].value === "") {
    alert("All form fields must be filled in");
  }
  const fieldValues = {
    email: inputFields[0].value.trim(),
    password: inputFields[1].value.trim(),
  };
  console.log(fieldValues);
  event.target.reset();
}
