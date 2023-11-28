document.addEventListener("DOMContentLoaded", function() {                                                                              // gets everything ready in advance
var myPicks = [];                                                                                                                       // create an Array for the random selection
var myGoCounter = 0;                                                                                                                    // create an Array to stock PC

    document.getElementById("startButton").onclick = GameStart;                                                                         // finds button and starts GameStart once clicked
    function GameStart() {                                                                                                              // starts the game
        var myGoCounter = 0;                                                                                                            // sets myGoCounter to 0. I'll change this later to be incremental
        var myPicks = [];                                                                                                               // creates an array to store my random choices
    
        function RunChoice() {                                                                                                          // starts the function, nested in GameStart
            if (myGoCounter < 5) {                                                                                                      // checks the repeat counter
                document.getElementById("redBut").style.backgroundColor = "antiquewhite";                                               // changes colour back to default
                document.getElementById("greBut").style.backgroundColor = "antiquewhite";            
                document.getElementById("yelBut").style.backgroundColor = "antiquewhite";            
                document.getElementById("bluBut").style.backgroundColor = "antiquewhite";              

                var myPick = Math.floor(Math.random() * 4) + 1;                                                                         // Picks a number
                if (myPick === 1) {                                                                                                     // Decides action based on random
                    myPicks.push(myPick);                                                                                               // add the chosen number to Array
                    pingRed();                                                                                                          // calls the relevant function

                } else if (myPick === 2) {
                    console.log("2");
                    myPicks.push(myPick);
                    pingGre();

                } else if (myPick === 3) {
                    console.log("3");
                    myPicks.push(myPick);
                    pingYel();

                } else {
                    console.log("4");
                    myPicks.push(myPick);
                    pingBlu();

                }
                myGoCounter++;                                                                                                          //increments the counter
    
                if (myGoCounter >= 5) {                                                                                                 // checks if repeats are done...
                    console.log("doneRunChoice");                                                                                       // ...and logs this
                
                } else {   

                    setTimeout(RunChoice, 1000);                                                                                        // Delay execution by 1 second for each loop
                }
            }

            function pingRed () {                                                                                                       // defines functions
                document.getElementById("redBut").style.backgroundColor = "red";                                                        // changes colour of button
                console.log("MyArray : " + myPicks);                                                                                    // outputs new Array to console
                console.log("1");                                                                                                       // outputs to console
            }
            function pingGre () {
                document.getElementById("greBut").style.backgroundColor = "green";
                console.log("MyArray : " + myPicks);                                                                                    
                console.log("2");                                                                                                       
            }
            function pingYel () {
                document.getElementById("yelBut").style.backgroundColor = "yellow";
                console.log("MyArray : " + myPicks);                                                                                    
                console.log("3");                                                                                                       
            }
            function pingBlu () {
                document.getElementById("bluBut").style.backgroundColor = "blue";
                console.log("MyArray : " + myPicks);                                                                                    
                console.log("4");                                                                                                       
            }
        }
    
        RunChoice();                                                                                                                    // Restarts everything (ubtil counter is hit)
    }
    
        // FOR TOMORROW: Place buttons, get theem to colour when pinged
});