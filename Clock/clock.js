let lastSecond = new Date().getSeconds();

function updateClock() {
    const time = new Date();
    const hour = time.getHours().toString().padStart(2,0);
    const minute = time.getMinutes().toString().padStart(2,0);
    const second = time.getSeconds().toString().padStart(2,0);
    const timeStr = `${hour}:${minute}:${second}`;
    document.getElementById("time").textContent = timeStr;
    
    const currentSecond = time.getSeconds();
    if (currentSecond !== lastSecond) {
        lastSecond = currentSecond;
        if ("vibrate" in navigator) {
            navigator.vibrate(50);
        }
    }
}

updateClock();
setInterval(updateClock, 1000);
