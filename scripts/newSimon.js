var redButton = document.getElementById("simonRed");
var yelButton = document.getElementById("simonYellow");
var greButton = document.getElementById("simonGreen");
var bluButton = document.getElementById("simonBlue");
var startButton = document.getElementById("simonStart");
var simonTurns = 3;
var simonsPick = [];


/*
startButton.addEventListener.onclick = startButton.textContent = "Hi";
redButton.addEventListener.onclick = redButton.textContent = "Hi";
yelButton.addEventListener.onclick = yelButton.textContent = "Hi";
greButton.addEventListener.onclick = greButton.textContent = "Hi";
bluButton.addEventListener.onclick = bluButton.textContent = "Hi";
*/

startButton.addEventListener("click", startGo);

function startGo() {
    startButton.style.visibility = "hidden";
    redButton.style.opacity = "0.5";
    yelButton.style.opacity = "0.5";
    greButton.style.opacity = "0.5";
    bluButton.style.opacity = "0.5";
    for (let i = 0; i < simonTurns; i++) {
        simonsPick.push(Math.floor(Math.random() * simonTurns) + 1);
    }
    console.log(simonsPick);
    simonPings(simonsPick);
}


