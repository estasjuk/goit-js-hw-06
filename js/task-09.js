const refs = {
  body: document.querySelector("body"),
  changeColorBtn: document.querySelector(".change-color"),
  colorOutput: document.querySelector(".color"),
}

refs.changeColorBtn.addEventListener("click", onChangeBodyColor);

function onChangeBodyColor(event) {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorOutput.textContent = getRandomHexColor();
 }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

