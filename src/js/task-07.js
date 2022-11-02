const inputRef = document.querySelector("#font-size-control");
const outputTextRef = document.querySelector("#text");

inputRef.addEventListener("input", onChangeFontsize);

function onChangeFontsize(event) { 
    outputTextRef.style.fontSize = `${event.currentTarget.value}px`;
}