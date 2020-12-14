const display = document.getElementById("display");
const keyboard = document.getElementById("keyboard");
const buttons = document.querySelectorAll(".calc-button");

let result = 0;
let displayStr = "";

function displayNumber(event) {
  displayStr += `${event.target.innerText}`;
  display.innerText = displayStr;
}

keyboard.addEventListener("click", (e) => {
  if (e.target.id === "btn1") {
    displayNumber(e);
  } else if (e.target.id === "btn2") {
    displayNumber(e);
  } else if (e.target.id === "btn3") {
    displayNumber(e);
  } else if (e.target.id === "btn4") {
    displayNumber(e);
  } else if (e.target.id === "btn5") {
    displayNumber(e);
  } else if (e.target.id === "btn6") {
    displayNumber(e);
  } else if (e.target.id === "btn7") {
    displayNumber(e);
  } else if (e.target.id === "btn8") {
    displayNumber(e);
  } else if (e.target.id === "btn9") {
    displayNumber(e);
  } else if (e.target.id === "btn0") {
    displayNumber(e);
  } else if (e.target.id === "plus-minus") {
  } else if (e.target.id === "percent") {
    displayNumber(e);
  } else if (e.target.id === "clear") {
    display.innerText = '';
}
  } else if (e.target.id === "plus") {
    displayNumber(e);
  } else if (e.target.id === "minus") {
    displayNumber(e);
  } else if (e.target.id === "divide") {
    displayNumber(e);
  } else if (e.target.id === "multiply") {
    displayNumber(e);
  } else if (e.target.id === "equal") {
  } else if (e.target.id === "coma") {
    displayNumber(e);
  }
});
