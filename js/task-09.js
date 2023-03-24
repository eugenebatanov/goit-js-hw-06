const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

buttonEl.addEventListener('click', () => {
  const colorStyle = getRandomHexColor();
  bodyEl.style.backgroundColor = colorStyle;
  spanEl.textContent = colorStyle;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
