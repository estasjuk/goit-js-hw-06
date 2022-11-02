const refs = {
  inputNumber: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
}

refs.createBtn.addEventListener("click", onCreateCollection);
refs.destroyBtn.addEventListener("click", onDestroyBoxes);
  

function createBoxes(amount) {

let divs = [];
let size = 30;

    for (let i = 0; i <= amount; i += 1) {
      const div = document.createElement("div");
      div.style.backgroundColor = getRandomHexColor();
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      size += 10;
      divs.push(div);
      
    }
    refs.boxes.append(...divs);
}

function onCreateCollection(event) { 
  createBoxes(Number(refs.inputNumber.value));
}

function onDestroyBoxes() { 
    refs.boxes.innerHTML = '';
  }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

