document.addEventListener("DOMContentLoaded", function() {                                                                              // gets everything ready in advance
var myPicks = [];                                                                                                                       // create an Array for the random selection
var myGoCounter = 0;                                                                                                                    // create an Array to stock PC

    document.getElementById("startButton").onclick = GameStart;                                                                         // finds button and starts GameStart once clicked
    function GameStart() {                                                                                                              // starts the game
        var myGoCounter = 0;                                                                                                            // sets myGoCounter to 0. I'll change this later to be incremental
        var myPicks = [];                                                                                                               // creates an array to store my random choices
        var lastPick = 0;
    
        function RunChoice() {                                                                                                          // starts the function, nested in GameStart
            if (myGoCounter < 5) {                                                                                                      // checks the repeat counter
                document.getElementById("redBut").style.backgroundColor = "antiquewhite";                                               // changes colour back to default
                document.getElementById("greBut").style.backgroundColor = "antiquewhite";            
                document.getElementById("yelBut").style.backgroundColor = "antiquewhite";            
                document.getElementById("bluBut").style.backgroundColor = "antiquewhite";    
                console.log("goes", myGoCounter +1);          

                var myPick = Math.floor(Math.random() * 4) + 1;                                                                         // Picks a number
                if (myPick === lastPick){                                                                                               // prevents number repetition (temporary until I find out how to make them flash better)
                    console.log("same pick");
                    myGoCounter--;                                                                                                      // reduces go counter to ensure 5 numbers are picked
                    RunChoice();
                }
                
                else if (myPick === 1) {                                                                                                // Decides action based on random
                    console.log("1");
                    lastPick = myPick;
                    myPicks.push(myPick);                                                                                               // add the chosen number to Array
                    pingRed();                                                                                                          // calls the relevant function

                } else if (myPick === 2) {
                    console.log("2");
                    lastPick = myPick;
                    myPicks.push(myPick);
                    pingGre();

                } else if (myPick === 3) {
                    console.log("3");
                    lastPick = myPick;
                    myPicks.push(myPick);
                    pingYel();

                } else {
                    console.log("4");
                    lastPick = myPick;
                    myPicks.push(myPick);
                    pingBlu();

                }
                myGoCounter++;                                                                                                          //increments the counter
    
                if (myGoCounter >= 5) {                                                                                                 // checks if repeats are done...
                    console.log("doneRunChoice");                                                                                       // ...and logs this
                    lastPick = 0;
                    document.getElementById("PlayerTurn").textContent = "Press the buttons in the same order";                          // signals start of player turn                                                                                                 
                
                } else {   

                    setTimeout(RunChoice, 750);                                                                                         // Delay execution by 1 second for each loop
                }
            }

            function pingRed () {                                                                                                       // defines functions
                document.getElementById("redBut").style.backgroundColor = "red";                                                        // changes colour of button
                console.log("MyArray : " + myPicks);                                                                                    // outputs new Array to console
                console.log("1");                                                                                                       // outputs to console
                //    setTimeout(pingRed, 500);                                                                                                      
            }
            function pingGre () {
                document.getElementById("greBut").style.backgroundColor = "green";
                console.log("MyArray : " + myPicks);                                                                                    
                console.log("2");
                //    setTimeout(pingGre, 500);                                                                                                       
            }
            function pingYel () {
                document.getElementById("yelBut").style.backgroundColor = "yellow";
                console.log("MyArray : " + myPicks);                                                                                    
                console.log("3");
                //    setTimeout(pingYel, 500);                                                                                                       
            }
            function pingBlu () {
                document.getElementById("bluBut").style.backgroundColor = "blue";
                console.log("MyArray : " + myPicks);                                                                                    
                console.log("4");
                //    setTimeout(pingBlu, 500);                                                                                                       
            }
        }
    
        RunChoice();                                                                                                                    // Restarts everything (until counter is hit)
    }
    

});