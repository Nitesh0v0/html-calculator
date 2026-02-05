const display = document.getElementById('display');

function appendValue(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // eval handles the string math calculation
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
