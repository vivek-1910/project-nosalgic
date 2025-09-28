const display = document.getElementById("display");

function appendTo(input) {
    if ("vibrate" in navigator) {
        navigator.vibrate(10);
    }
    display.value += input;
    
}

function clearDisplay() {
    if ("vibrate" in navigator) {
        navigator.vibrate(10);
    }
    display.value = "";
    display.value += input;
}

function replaceOperators(expression) {
    expression = expression.replace(/×/g, '*');
    expression = expression.replace(/÷/g, '/');
    return expression;
}

function calc() {
    if ("vibrate" in navigator) {
        navigator.vibrate(200);
    }
    try {
        let expression = display.value;
        expression = replaceOperators(expression);
        display.value = eval(expression);
    } catch {
        alert(`Error`);
    }
    display.value += input;
}

function plusminus() {
    display.value = -(display.value);
    if ("vibrate" in navigator) {
        navigator.vibrate(10);
    }
    display.value += input;
}

function percent() {
    const num = Number(display.value);
    display.value = num/100;
    if ("vibrate" in navigator) {
        navigator.vibrate(10);
    }
    display.value += input;
}
