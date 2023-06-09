const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', event =>
  event.currentTarget.value.trim() === ''
    ? (output.textContent = 'Anonymous')
    : (output.textContent = event.currentTarget.value),
);
