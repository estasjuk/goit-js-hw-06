const refs = {
  body: document.querySelector("body"),
  changeColorBtn: document.querySelector(".change-color"),
  colorOutput: document.querySelector(".color"),
}

refs.changeColorBtn.addEventListener("click", onChangeBodyColor);

function onChangeBodyColor(event) {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.colorOutput.textContent = color;
 }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

