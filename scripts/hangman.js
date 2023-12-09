var allowedLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var possibleWordList = ["freedom", "capture", "weather", "channel", "conduct", "diamond", "positive", "realize", "arrange", "picture", "mission", "protect", "monitor", "undergo", "purpose", "whistle", "network", "comment", "machine", "comfort", "display", "prepare", "holiday", "balance", "example", "control", "outline", "monster", "upgrade", "college", "contact", "resolve"];
var findThisWord = "";
var previousGuesses = [];
var livesLeft = 6;


var headDiv = document.getElementById("headHang");
var bodyDiv = document.getElementById("bodyHang");
var legsDiv = document.getElementById("legsHang");
var hangDisp = document.getElementById("hangDisplay");

document.getElementById("hangStart").onclick = startHang;

function startHang(){
    document.getElementById("hangStart").style.display = "none";
    headDiv.textContent = "";
    bodyDiv.textContent = "";
    legsDiv.textContent = "";
        let randPick = Math.floor(Math.random() * possibleWordList.length)
        findThisWord = possibleWordList[randPick];
        console.log(findThisWord, " is the word to find");
        displayWordClue(findThisWord);
}

function displayWordClue (word) {
    let hintToDisplay = "";
    for (let i = 0; i < word.length; i++) {
        hintToDisplay += "_ ";
    }
    hangDisp.textContent = hintToDisplay;
    setTimeout(() => {
    askForLetter();
}, 1000);
}

function askForLetter () {
    var yourGuess = prompt("Guess the word or a letter");
    if (allowedLetters.includes(yourGuess) && !previousGuesses.includes(yourGuess)){
        console.log("that works");
        previousGuesses += yourGuess;
        console.log ("prevGuesses ", previousGuesses);
        testLetter (yourGuess);
    }else{
        console.log("not an allowed letter");
        askForLetter();
    }
}

function testLetter (guess) {
    console.log(guess, " and ", findThisWord);
    if (!findThisWord.includes(guess)) {
        livesLeft--;
        console.log("that hurt ", livesLeft);
        hangDisp.textContent = "You guessed : " + previousGuesses;
        setTimeout(() => {
        dieAnotherBit();
    }, 250);
    }else {
        addLatestGuess();
    }
}

function dieAnotherBit() {
    if (livesLeft === 5) {
        headDiv.textContent = "O";
            setTimeout(() => {
        askForLetter();
    }, 1000);
    }else if (livesLeft === 4) {
        bodyDiv.textContent = "|";
            setTimeout(() => {
        askForLetter();
    }, 1000);
    }else if (livesLeft === 3) {
        bodyDiv.textContent = "/|";
            setTimeout(() => {
        askForLetter();
    }, 1000);
    }else if (livesLeft === 2) {
        bodyDiv.textContent = "/|\\";
            setTimeout(() => {
        askForLetter();
    }, 1000);
    }else if (livesLeft === 1) {
        legsDiv.textContent = "\\";
            setTimeout(() => {
        askForLetter();
    }, 1000);
    }else if (livesLeft === 0) {
        youDied();
    }
}

function youDied() {
    legsDiv.textContent = "/\\";
    headDiv.style.color = "violet";
    hangDisp.innerHTML = "You DIED!!! Click <span id='hangReload'>here</span> to play again. You guessed : " + previousGuesses + ".";

    document.getElementById("hangReload").addEventListener("click", hangRestart)
}

function hangRestart() {
    location.reload();
}

function addLatestGuess() {
    console.log("got one");
}