let container = document.getElementById("container");
let buttons = document.createElement("div");

window.onload = (e) => {
  createButtons();
  onClickDisplay();
};

// for each div in container create a button 
// let the button have text as is the div´s name
// add buttons to DOM
function createButtons() {
  for (let div of Array.from(container.children)) {
    let button = document.createElement("button");
    button.textContent = div.getAttribute("name");
    buttons.appendChild(button);
  }
  container.insertBefore(buttons, container.firstChild);
}

  function onClickDisplay() {for (let i = 0; i < buttons.children.length; i++) {
    buttons.children[i].addEventListener("focus", (e) => {
      for (let j = 1; j < container.children.length; j++) {
        container.children[j].style.display = "none";
      }
      container.children[i + 1].style.display = "block";
    });
  }
}
