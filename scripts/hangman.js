var allowedLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var possibleWordList = ["freedom", "capture", "weather", "channel", "conduct", "diamond", "positive", "realize", "arrange", "picture", "mission", "protect", "monitor", "undergo", "purpose", "whistle", "network", "comment", "machine", "comfort", "display", "prepare", "holiday", "balance", "example", "control", "outline", "monster", "upgrade", "college", "contact", "resolve"];
var findThisWord = "";
var previousGuesses = [];
var livesLeft = 6;
var hintToDisplay = [];
var lastGuess = "";

var headDiv = document.getElementById("headHang");
var bodyDiv = document.getElementById("bodyHang");
var legsDiv = document.getElementById("legsHang");
var hintDisp = document.getElementById("hintDisplay");
var guessDisp = document.getElementById("guessDisplay");

document.getElementById("hangStart").onclick = startHang;

function startHang(){
    document.getElementById("hangStart").style.display = "none";
    headDiv.textContent = "";
    bodyDiv.textContent = "";
    legsDiv.textContent = "";
        let randPick = Math.floor(Math.random() * possibleWordList.length)
        findThisWord = possibleWordList[randPick];
        console.log(findThisWord, " is the word to find");
        displayFirstClue(findThisWord);
}

function displayFirstClue (wordToFind) {
    var showThisHint = [];
    for (let i = 0; i < wordToFind.length; i++) {
        showThisHint.push("_");
    }
    hintDisp.textContent = showThisHint.join(" ");
    hintToDisplay = showThisHint;
    setTimeout(() => {
    askForLetter();
}, 1000);
}

function askForLetter() {
    console.log("So far, so good");
    var userGuess = prompt("Guess a letter");
    if (allowedLetters.includes(userGuess) && !previousGuesses.includes(userGuess)){
        console.log("that works");
        previousGuesses.push(userGuess);
        console.log ("prevGuesses ", previousGuesses);
        guessDisp.textContent = "You've guessed : " + previousGuesses.join(" ");
        testLetter (userGuess);
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
        setTimeout(() => {
        dieAnotherBit();
    }, 250);
    }else {
        console.log ("move along, nothing to see here");
        addLetterToHint (guess);
    }
}

function addLetterToHint (letterToAdd) {
    for (let i = 0; i < findThisWord.length; i++) {
        if (hintToDisplay[i] != "_") {
            continue;
        }
        else if (findThisWord[i] === letterToAdd) {
            console.log ("good for : ", i);
            hintToDisplay[i] = letterToAdd;
        }
    }
    hintDisp.textContent = hintToDisplay.join (" ");
    console.log(hintToDisplay)
    testForWin(hintToDisplay);
}

function testForWin(wordToCheck) {
    if (!wordToCheck.includes("_") && wordToCheck.join("") === findThisWord) {
        console.log("you win")
        youWin();
    }else {
        setTimeout(() => {
        askForLetter();
    }, 1000);
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
    hintDisp.innerHTML = "You DIED!!! Click <span id='hangReload'>here</span> to play again. The word you needed was <span id='hangReload'> " + findThisWord + "</span>";

    document.getElementById("hangReload").addEventListener("click", hangRestart)
}

function youWin() {
    headDiv.textContent = "";
    bodyDiv.textContent = "";
    document.getElementById("legsFree").textContent = "/\\";
    document.getElementById("bodyFree").textContent = "/|\\";
    legsDiv.textContent = "O";
    hintDisp.innerHTML = "You WIN!!! Click <span id='hangReload'>here</span> to play again.";
    guessDisp.textContent = "You've guessed : " + findThisWord;
}

function hangRestart() {
    location.reload();
}

