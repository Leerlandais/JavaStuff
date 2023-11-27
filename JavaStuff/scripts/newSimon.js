document.addEventListener("DOMContentLoaded", function() {                                                                              // gets everything ready in advance
var myPicks = [];                                                                                                                       // create an Array for the random selection
var myGoCounter = 0;                                                                                                                    // create an Array to stock PC

    document.getElementById("startButton").onclick = GameStart;                                                                         // finds button and starts GameStart once clicked
    function GameStart() {                                                                                                              // starts the game
        var myGoCounter = 0;                                                                                                            // sets myGoCounter to 0. I'll change this later to be incremental
        var myPicks = [];                                                                                                               // creates an array to store my random choices
    
        function RunChoice() {                                                                                                          // starts the function, nested in GmaeStaty
            if (myGoCounter < 5) {                                                                                                      // checks the repeats
                var myPick = Math.floor(Math.random() * 4) + 1;                                                                         // Picks a number
                if (myPick === 1) {                                                                                                     // Decides action based on random
                    console.log("1");
                    myPicks.push(myPick);
                    console.log("MyArray : " + myPicks);

                } else if (myPick === 2) {
                    console.log("2");
                    myPicks.push(myPick);
                    console.log("MyArray : " + myPicks);

                } else if (myPick === 3) {
                    console.log("3");
                    myPicks.push(myPick);
                    console.log("MyArray : " + myPicks);

                } else {
                    console.log("4");
                    myPicks.push(myPick);
                    console.log("MyArray : " + myPicks);

                }
                myGoCounter++;
    
                setTimeout(RunChoice, 1000);                                                                                            // Delay execution by 1 second
            }
        }
    
        RunChoice();
    }
    
        
});