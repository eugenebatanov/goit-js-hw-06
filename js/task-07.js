const span = document.getElementById("text");

const input = document.getElementById("font-size-control");

input.addEventListener("click", (e) => {
  span.style.fontSize = e.currentTarget.value + "px";
});
