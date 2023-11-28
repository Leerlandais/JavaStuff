document.addEventListener("DOMContentLoaded", function() {                                                                              // gets everything ready in advance
var myPicks = [];                                                                                                                       // create an Array for the random selection
var yourPicks = [];                                                                                                                     // create an Array for player selection
var myGoCounter = 0;                                                                                                                    
var yourGoCounter = 0;

    document.getElementById("startButton").onclick = GameStart;                                                                         // finds button and starts GameStart once clicked
    function GameStart() {                                                                                                              // starts the game
        var myGoCounter = 0;                                                                                                            // sets myGoCounter to 0. I'll change this later to be incremental
        var lastPick = 0;
        myPicks = [];                                                                                                               
    
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
                    myPicks.push(1);                                                                                               // add the chosen number to Array
                    pingRed();                                                                                                          // calls the relevant function

                } else if (myPick === 2) {
                    console.log("2");
                    lastPick = myPick;
                    myPicks.push(2);
                    pingGre();

                } else if (myPick === 3) {
                    console.log("3");
                    lastPick = myPick;
                    myPicks.push(3);
                    pingYel();

                } else {
                    console.log("4");
                    lastPick = myPick;
                    myPicks.push(4);
                    pingBlu();

                }
                myGoCounter++;                                                                                                          //increments the counter
    
                if (myGoCounter >= 5) {                                                                                                 // checks if repeats are done...
                    console.log("doneRunChoice");                                                                                       // ...and logs this
                    lastPick = 0;
                    yourGoCounter = myGoCounter;
                    document.getElementById("PlayerTurn").textContent = "Press the buttons in the same order";                          // signals start of player turn    
                    PlayerTurn();                                                                                             
                
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
        function PlayerTurn() {
            document.getElementById("redBut").style.backgroundColor = "antiquewhite";                                                   // changes colour back to default
            document.getElementById("greBut").style.backgroundColor = "antiquewhite";            
            document.getElementById("yelBut").style.backgroundColor = "antiquewhite";            
            document.getElementById("bluBut").style.backgroundColor = "antiquewhite";
            console.log("Hi");
            yourPicks = [];
            var yourCount = 0;
                console.log(yourCount);
                var clickRed = document.getElementById("redBut");                                                                       // assigns a variable to buttons
                var clickGre = document.getElementById("greBut");
                var clickYel = document.getElementById("yelBut");
                var clickBlue = document.getElementById("bluBut");
                 clickRed.addEventListener("click", playRed);                                                                           // waits for a button to be clicked and launches related function
                 clickGre.addEventListener("click", playGre);
                 clickYel.addEventListener("click", playYel);
                 clickBlue.addEventListener("click", playBlu);

            function playRed() {                                                                                                        // logs the players choice
                console.log("Player picked Red");
                yourPicks.push(1);
                yourGoCounter--;
                console.log("YourArray " + yourPicks);
                console.log(yourGoCounter);
                if (yourGoCounter < 1) {                                                                                                 
                    console.log("donePlayerChoice");                                                                                       
                    alert("Time to check");
                }                
            }
            function playGre() {
                console.log("Player picked Green");
                yourPicks.push(2);
                yourGoCounter--;
                console.log("YourArray " + yourPicks);
                console.log(yourGoCounter);
                if (yourGoCounter < 1) {                                                                                                 
                    console.log("donePlayerChoice");                                                                                       
                    alert("Time to check");
                }                
            }
            function playYel() {
                console.log("Player picked Yellow");
                yourPicks.push(3);
                yourGoCounter--;
                console.log("YourArray " + yourPicks);
                console.log(yourGoCounter);
                if (yourGoCounter < 1) {                                                                                                 
                    console.log("donePlayerChoice");                                                                                       
                    alert("Time to check");
                }                
            }
            function playBlu() {
                console.log("Player picked Blue");
                yourPicks.push(4);
                yourGoCounter--;
                console.log("YourArray " + yourPicks);
                console.log(yourGoCounter);
                if (yourGoCounter < 1) {                                                                                                 
                    console.log("donePlayerChoice");                                                                                       
                    alert("Time to check");
                }                
            }   
        }
    }
    

});