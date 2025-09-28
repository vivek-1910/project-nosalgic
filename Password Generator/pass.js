document.getElementById("generate").addEventListener('click', function() {
    let length = parseInt(document.getElementById("passwordLength").value, 10);
    let small = document.getElementById("includelowerCase").checked;
    let caps = document.getElementById("includeupperCase").checked;
    let num = document.getElementById("includenumbers").checked;
    let sym = document.getElementById("includesymbols").checked; 
    const password = passwordGenerator(length, small, caps, num, sym);

    document.getElementById("output").textContent = `Password Is : ${password}` ;
});

function passwordGenerator(passwordLength, includelowerCase, includeupperCase, includenumbers, includesymbols) {
    let allowedChars = "";
    let password = "";

    if (passwordLength <= 0) {
        alert(`Enter a minimum of 1 length`);
        return ;
    }

    if (!includelowerCase && !includeupperCase && !includenumbers && !includesymbols) {
        alert(`Select at least 1 parameter`);
        return;
    }

    if (passwordLength > 16) {
        alert("Password Length Must be Under 16");
        return;
    }
    

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*?><_+";

    if (includelowerCase) allowedChars += lowerCase;
    if (includeupperCase) allowedChars += upperCase;
    if (includenumbers) allowedChars += numbers;
    if (includesymbols) allowedChars += symbols;

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars.charAt(randomIndex);
    }
    return password;
}

document.getElementById("copyButton").addEventListener('click', function() {
    var password = document.getElementById("output").textContent.split(":")[1].trim();
    copyToClipboard(password);
})

function copyToClipboard(text) {
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    if ("vibrate" in navigator) {
        navigator.vibrate(200);
    }
    alert("Password copied to clipboard!");
}