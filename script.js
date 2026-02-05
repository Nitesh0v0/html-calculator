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
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Keyboard Support Logic
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Handle numbers and operators
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendValue(key);
    }

    // Handle Enter key for calculation
    if (key === 'Enter') {
        calculate();
    }

    // Handle Backspace for deleting last character
    if (key === 'Backspace') {
        deleteLast();
    }

    // Handle Escape for clearing the display
    if (key === 'Escape') {
        clearDisplay();
    }
});
