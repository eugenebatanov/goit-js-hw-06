const input = document.getElementById('validation-input');

input.addEventListener('blur', checkInputValid);

function checkInputValid(event) {
  const inputLengthValid = input.dataset.length;
  const inputLength = event.currentTarget.value.length;
  if (Number(inputLengthValid) === inputLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
