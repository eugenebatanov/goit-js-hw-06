const input = document.getElementById("validation-input");

input.addEventListener("blur", checkInputValid);

function checkInputValid(event) {
  const inputLengthValid = input.dataset.length;
  const inputLength = event.currentTarget.value.length;
  if (inputLengthValid == inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

// console.log("6" == 6);

// ===================
// const inputEl = document.querySelector('input');
// inputEl.addEventListener('blur', onInputBlur);
// function onInputBlur(event) {
//     const total = event.currentTarget.value.length
//     if (Number(inputEl.dataset.length) !== total) {
//         inputEl.classList.add('invalid');
//         return;
//     }
//     inputEl.classList.add('valid');
// ======================

// input.addEventListener("blur", (event) =>
//   event.currentTarget.value === ""
//     ? (output.textContent = "Anonymous")
//     : (output.textContent = event.currentTarget.value)
// );
