function rollDice(){
    const input = document.getElementById("input").value;
    const Value = document.getElementById("Value");
    const Image = document.getElementById("Image");

    const diceValue = [];
    const diceImage = [];

    if(input<=6){
        for(let i = 0; i < input ; i++){
            const Values = Math.floor(Math.random() * 6) + 1;
            diceValue.push(Values);
            diceImage.push(`<img src="Dice-Images/${Values}.svg" width="150" height="150">`);
        }
    }
    else{
        alert('Maximum Number Of Dice Should Be 6');
    }

    Value.innerHTML = `Dice Value:<br><span style="display: block; text-align: center;">${diceValue.join('  :  ')}</span>`;

    Image.innerHTML = diceImage.join("");
}
