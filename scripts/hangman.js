var wordArray = ["word", "another", "repeat"]                                               //the words will be here
var allowedLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordToFind = "";                                                                        // this will eventually be the word to find
var playerLives = 6;                                                                        // how many goes
var hintDisplay = "";
var playerWord = "";
var playerGuess = "";
var startButton = document.getElementById("hangStart");                                     // click here to start things
var showHint = document.getElementById("hangDisplay");

for (let i = 0; i < 42; i++) {                                                              // could have done this with HTML but decided to go full JS                                                   
    const gridMaker = document.getElementById("gallows");                                   // locates a field
    const placeGrid = document.createElement("div");                                        // makes a div
      placeGrid.classList.add("hangGallows");                                               // adds a class to all divs
      placeGrid.id = (i);                                                                   // adds an ID to each individual div
      placeGrid.textContent = i;                                                            // adds a number to grid. Development reasons
      gridMaker.appendChild(placeGrid);                                                     // finally adds the element tp the parent 
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    console.log("up arrow pressed");
    playerLives--;
    console.log(playerLives);
  }else{
    console.log("not that one");
  }
  let headDiv = document.getElementById("9");
  let bodyDiv = document.getElementById("15");
  let legsDiv = document.getElementById("21");
  
  if (playerLives === 5){
    document.getElementById("9").textContent = "O";
  }else if (playerLives === 4){
    bodyDiv.textContent = "|";
  }else if (playerLives === 3){
    bodyDiv.textContent = "|\\";
  }else if (playerLives === 2){
    bodyDiv.textContent = "/|\\";
  }else if (playerLives === 1){
    legsDiv.textContent = "/";
  }else if (playerLives === 0){
    legsDiv.textContent = "/\\";
    headDiv.style.color = "violet";
  }
});
startButton.onclick = startHangman;                                                         

function startHangman(){
  console.log("ok");
  for (let i = 36; i < 42; i++){
    document.getElementById(i).style.opacity = "0";
  }
  [0, 1, 2, 3, 6, 12, 18, 24, 30, 31, 32, 33, 34, 35].forEach(id => {
    document.getElementById(id).style.backgroundColor = "saddlebrown";
  });
    wordToFind = wordArray[Math.floor(Math.random() * (wordArray.length))];
    console.log(wordToFind);
    startButton.disabled = true;
 // displayGuesses(wordToFind);
  for (let i = 0; i < wordToFind.length; i++) {
    playerGuess += "_"
  }
  showHint.textContent = playerGuess;
  console.log(playerGuess);  
  playerGuess = prompt("What's your guess?");
  checKGuess(wordToFind, playerGuess);
}

function checKGuess (word, letter) {
  console.log (word, letter, "go go go");
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter){
      console.log ("nice one");
    }else {
      playerLives--;
      console.log("uhoh : ", playerLives);
    }
  }
}










  


/*

  function displayGuesses(word){
    for (let i = 0; i < word.length; i++){
      hintDisplay = hintDisplay + "_ ";
    }
    document.getElementById("hangDisplay").textContent = hintDisplay;
    playerGuess = prompt("Pick a letter");
    checkGuess(wordToFind, playerGuess)
  }


    if (!checkGuess) {
      playerLives--;
      console.log("ouch");
    } else {
      console.log("good");
    }
  

  function checkGuess(word, letter){
      for (var i = 0; i < word.length; i++) {
          if (word[i] === letter) return true
      }
      return false
  }
  
  
    var newHintDisplay = "";
      for (var i = 0; i < wordToFind.length; i++) {
        if (wordToFind[i] === letter) {
          newHintDisplay += letter;
        }else 
          newHintDisplay += wordToFind[i];
      }
      hintDisplay = newHintDisplay;
      displayGuesses(hintDisplay);
    }	
  */