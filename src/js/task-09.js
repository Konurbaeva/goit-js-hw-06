const buttonEl = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

const currentColor = `${getRandomHexColor()}`;

console.log("currentColor: " + currentColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changesBackgroundColorOfBody = function() {

  document.body.style.backgroundColor = currentColor;
  spanRef.textContent = currentColor;
}

buttonEl.addEventListener('click', changesBackgroundColorOfBody);