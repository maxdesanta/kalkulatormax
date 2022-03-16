function getInputValue() {
    let input = event.target.innerText;
    printValue(input);
}

function printValue(v) {
    let out = document.getElementById('hasil');
    let current = out.innerHTML;

    if (out.innerHTML == "0") {
        if (v != "C" && v != "Del" && v != "+/-") {
            out.innerHTML = "";
            out.innerHTML += v;
        }
    } else {
        // delete
        if (v == "Del") {
            out.innerHTML = current.slice(0. - 1);
            if (out.innerHTML.length <= 1) {
                out.innerHTML = "0";
            } 
        }
        // input number
        if (v != "C" && v != "Del" && v !=="=") {
            out.innerHTML += v;
        }
        // reset number
        if (v == "C") {
            out.innerHTML = "0"; 
        }
        // equal
        if (v == "=") {
            let has = out.innerHTML;
            out.innerHTML = eval(has);
        }
        // minus or plus number
        if (v == "+/-") {
            out.innerHTML = '-';
        }

    }
}


let buttons = document.querySelectorAll('.moskow');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute('onclick', 'getInputValue()');
}