
    let balloon = document.getElementById("balloon")
    balloon.style.fontSize = "20px";
    window.addEventListener("keydown", blowUp);
    
    function blowUp(event) {
        let number = Number(balloon.style.fontSize.match(/\d+/)[0]);
        if(event.key == "ArrowUp") {
            event.preventDefault();
            number = number + (number * 0.1);

            balloon.style.fontSize = `${number}px`;
            console.log(`${balloon.style.fontSize}`);
            console.log(number);
        }
        else if(event.key == "ArrowDown") {
            event.preventDefault();
            number = number - (number * 0.1);
            balloon.style.fontSize = number
            console.log(`${balloon.style.fontSize}`);        
            }
        if (number > 40) {
            balloon.innerHTML= "explodes";
            window.removeEventListener("keydown", blowUp);
        }

    }
