document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("GuessStart").onclick = GameBegin;
    function GameBegin() {
        var range = prompt("How high would you like to set the upper limit?");
        if (isNaN(range)){
            alert("That's not a number, try again");
            GameBegin();
        }
        else {
            GameOn();
        }

    function GameOn(){
        let guessList = [];
        var myNum = Math.floor(Math.random() * parseInt(range) + 1);
        console.log(myNum);
        
        var attCount = 0;
        var gameRun = true;
        
        while (gameRun === true) {
            var yourNum = prompt("Make your guess");
            if (isNaN(yourNum)){
                alert("That's not a number. Enter a number from 1 to" + range + "!");
                GameOn();
            }
            attCount++;
            console.log("attCount", attCount);
            guessList.push(yourNum);
            console.log("guessList", guessList);
            
            if (parseInt(yourNum) === myNum) {
                gameRun = false;
                alert("You guessed it. Well Done! It took you " + attCount + " tries. The guesses you made were : " + guessList.join(" , ") + ".");
                TryAgain();
            }
            else if (myNum > yourNum) {
                alert("That's too small. Try again. Your last guess was " + yourNum + ".");
            }
            else if (myNum < yourNum) {
                alert("That's too big. Try again. Your last guess was " + yourNum + ".");
            }
        }
    function TryAgain(){
       if (confirm("Would you like to go again?") === true){
            GameBegin();
       }
       else {
        return;
       }

    }
    }
}

});