const mainKey = [];
const button_groups = document.querySelector("#button-groups");
const inhale = document.querySelector("#inhale");
const exhale = document.querySelector("#exhale");

for(let i = 1; i <= 5; i++) {
    //create buttons
    let button = document.createElement("button");
    button.textContent = `${i}`;
    button.onclick = key;
    button_groups.appendChild(button);
    button.disabled = true;
    
    for(let j = 1; j <= i; j++) {
        mainKey.push(j);
    }

}

function disabledButtons(boolean) {
    let buttons = button_groups.children;
    for(let button of buttons) {
        button.disabled = boolean;
    }
}

function key(e) {
    let value = +e.target.innerHTML;
    disabledButtons(true);
    inhale.disabled = false;
    
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
    // alert("inhale");
    inhale.disabled = true;
    exhale.disabled = false;
})

exhale.addEventListener("click", () => {
    exhale.disabled = true; 
    disabledButtons(false);
})