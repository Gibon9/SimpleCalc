const display = document.getElementById("display");
const keyboard = document.getElementById("keyboard");
const buttons = document.querySelectorAll(".calc-button");

keyboard.addEventListener("click", (e) => {
  console.log(e.target);
});
