const time = document.getElementById("time");
let timer = null;
let startTime = 0;
let elapsedtime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
    startTime = Date.now() - elapsedtime;
    timer = setInterval(update, 10) ;
    isRunning = true;
    }
    if ("vibrate" in navigator) {
        navigator.vibrate(500);
    }
    document.getElementById("start").textContent = "Resume";
}

function pause(){
    if (isRunning){
        clearInterval(timer);
        elapsedtime = Date. now ()- startTime;
        isRunning = false;
    }
    if ("vibrate" in navigator) {
        navigator.vibrate(100);
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedtime = 0;
    isRunning = false;
    time.textContent = "00:00:00:00";
    if ("vibrate" in navigator) {
        navigator.vibrate(200)
        navigator.vibrate(200);
    }
    document.getElementById("start").textContent = "Start";
}

function update(){

    const currentTime = Date.now();
    elapsedtime = currentTime - startTime;

    let hours = Math.floor(elapsedtime/(1000*60*60));
    let minute = Math.floor(elapsedtime/(1000*60)%60);
    let second = Math.floor(elapsedtime/(1000)%60);
    let millisecond = Math.floor((elapsedtime%1000)/10);

    hours = String(hours).padStart(2,"0");
    minute = String(minute).padStart(2,"0");
    second = String(second).padStart(2,"0");
    millisecond = String(millisecond).padStart(2,"0");

    time.textContent = `${hours}:${minute}:${second}:${millisecond}`
    console.log(time.textContent);
}