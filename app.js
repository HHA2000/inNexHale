const mainKey = [];
const button_groups = document.querySelector("#button-groups");
const inhale = document.querySelector("#inhale");
const exhale = document.querySelector("#exhale");

for(let i = 1; i <= 10; i++) {
    //create buttons
    let button = createButton(i);
    button_groups.appendChild(button);
    
    for(let j = 1; j <= i; j++) {
        mainKey.push(j);
    }

}

function createButton(i) {
    let button = document.createElement("button");
    button.textContent = `${i}`;
    button.onclick = key;
    button.disabled = true;
    button.style.background = "black";
    return button;
}

function disabledButtons(boolean) {
    let buttons = button_groups.children;
    for(let button of buttons) {
        if(boolean) {
            button.disabled = boolean;
            button.style.background = "black";
        }
        else {
            button.disabled = boolean;
            button.style.background = "blueviolet";
        }
    }
}

function key(e) {
    let value = +e.target.innerHTML;
    disabledButtons(true);
    disableInNExhale(inhale, false);        
    
    if(mainKey.shift() == value){
        console.log("OK");
    }
    else {
        alert("Need more conentration!");
        location.reload();
    }

    if(mainKey.length == 0) {
        alert("Congragulation! Go to Meditation");
        location.reload();
    }
} 

inhale.addEventListener("click", () => {
    disableInNExhale(inhale, true);
    disableInNExhale(exhale, false);
})

exhale.addEventListener("click", () => {
    disableInNExhale(exhale, true);
    disabledButtons(false);
})

function disableInNExhale(button, boolean) {
    if(boolean) {
        button.disabled = boolean;
        button.style.background = "black";
    }
    else {
        button.disabled = boolean;
        button.style.background = "cadetblue";
    }
}