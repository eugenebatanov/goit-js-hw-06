const span = document.getElementById('text');

const input = document.getElementById('font-size-control');

span.style.fontSize = input.value + 'px';

input.addEventListener('click', e => {
  span.style.fontSize = e.currentTarget.value + 'px';
});
