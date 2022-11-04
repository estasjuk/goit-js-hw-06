const inputRef = document.querySelector("#validation-input");
const lengthOfInputRef = document.querySelector("#validation-input[data-length]");

inputRef.addEventListener("blur", onCheckAmountOfSymbols);

function changeClass(elem, remove, add) {
  elem.classList.remove(remove);
  elem.classList.add(add);
}

function onCheckAmountOfSymbols(event) { 
    if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
        changeClass(inputRef, 'invalid', 'valid');
    }
    else
        {
        changeClass(inputRef, 'valid', 'invalid');
    }
}
