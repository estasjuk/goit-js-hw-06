const inputRef = document.querySelector("#validation-input");
const lengthOfInputRef = document.querySelector("#validation-input[data-length]");

inputRef.addEventListener("blur", onCheckAmountOfSymbols);

function onCheckAmountOfSymbols(event) { 
    if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
        event.currentTarget.classList.add("valid")
    }
        else
        { event.currentTarget.classList.add("invalid") }
    }
