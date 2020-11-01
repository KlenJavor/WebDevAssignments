let balloon = document.getElementById("balloon");
balloon.style.fontSize = "20px";
window.addEventListener("keydown", inflate);

function inflate(event) {
  let number = Number(balloon.style.fontSize.match(/\d+/)[0]);
  if (event.key == "ArrowDown" && number < 21) {
    event.preventDefault();
    balloon.style.fontSize = `${number}px`;
  } else if (event.key == "ArrowUp") {
    event.preventDefault();
    number = 1.1 * number;
    balloon.style.fontSize = `${number}px`;
  } else if (event.key == "ArrowDown") {
    event.preventDefault();
    number = 0.9 * number;
    balloon.style.fontSize = `${number}px`;
  }
  if (number > 300) {
    balloon.innerText = "💥";
    window.removeEventListener("keydown", inflate);
  }
}
