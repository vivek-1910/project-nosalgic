var from = document.getElementById('from');
var to = document.getElementById('to');
const input = document.getElementById('input');
const submit = document.getElementById('submit');
const output = document.getElementById('output');

function convert() {
    let fromValue = from.value; 
    let toValue = to.value;
    let inputValue = parseFloat(input.value); 

    let result;
    let Unit;

    if (fromValue === "option1" && toValue === "option2") {
        result = (inputValue * 9/5) + 32;
        Unit = ' F';
    } else if (fromValue === "option2" && toValue === "option1") {
        result = (inputValue - 32) * 5/9;
        Unit = ' °C';
    } else if (fromValue === "option1" && toValue === "option3") {
        result = inputValue + 273.15 ;
        Unit = ' K';
    } else if (fromValue === "option3" && toValue === "option1") {
        result = inputValue - 273.15;
        Unit = ' °C';
    } else if (fromValue === "option2" && toValue === "option3") {
        result = (inputValue - 32) * 5/9 + 273.15;
        Unit = ' K';
    } else if (fromValue === "option3" && toValue === "option2") {
        result = (inputValue - 273.15) * 9/5 + 32;
        Unit = ' F';
    }

    if (result !== undefined) {
        console.log(result);
        output.textContent = result.toFixed(2) + Unit;
    }
}
submit.addEventListener('click', convert);
