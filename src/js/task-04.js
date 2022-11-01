
const buttonIncrementRef = document.querySelector('button[data-action="increment"]');
const buttonDecrementRef = document.querySelector('button[data-action="decrement"]');
let counterRef = document.querySelector("#value");
let counterValue = 0;

buttonIncrementRef.addEventListener("click", onIncrement);
buttonDecrementRef.addEventListener("click", onDecrement);

function onIncrement() { 
    counterValue += 1;
    return counterRef.textContent = counterValue
}

function onDecrement() { 
    counterValue -= 1;
    return counterRef.textContent = counterValue
}
