document.addEventListener("DOMContentLoaded", function(){           // pretty much the first thing I add to any .js It makes sure that the script is ready and waiting when the page is loaded

var gridPos = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "e10", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "g10", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10", "j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8", "j9", "j10"]; // huge array needed to track positions of everything - of course I didn't write it all out - "Hi Chat. I don't feel like typing it all, can you complete this array for me, please?["a1", "a2", "a3"......."j8", "j9", "j10"]" works just fine :D
var bombHint = new Array(100).fill(0);                              // and again here "Please make me an array with 100 zeros in it.... just the actual array so that I don't have to type and count it myself :) I thought it would just give me [0, 0, 0, 0, 0..........etc] but instead it taught me a new way of doing it :D
var hereBombHere = [];    // this array is for where the bombs will be placed
var bombSigns = [];       // this one takes care of the squares that will hold the hints
var revealedTabs = 0;     // this will take care of the win condition
document.getElementById("MineStart").onclick = setBombs;          // starts everything
const numberBombs = 12;



function setBombs () {

    for (var i = 0; i < gridPos.length; i++ ){
        document.getElementById(gridPos[i]).textContent = "";   
    }

    var bombReset = document.getElementsByClassName("MineCol");         // first off, reset the colours of everything 
            for (let i = 0;i < bombReset.length; i++){                  // by cycling through the grid 
            bombReset[i].style.backgroundColor = "";                    // and changing it back to default
            bombHint[i] = 0;                                            // resets bombHint to 0 to prevent stacking 
        }
        hereBombHere = [];                                           // makes sure the array for bomb position is empty

     const hasBomb = new Set();                                   // this one took a while to figure out. My older code was producing non-unique positions. Lots of digging unearthed 'new Set()' which I need to look into more cos I don't really understand it but it works 
     const notHere = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 10, 20, 30, 40, 50, 60, 70, 80, 19, 29, 39, 49, 59, 69, 79, 89]); // sloppy but this is a list of numbers I don't want (the outer edges of the grid)
     while (hasBomb.size < numberBombs){
       const bombHere = Math.floor(Math.random() * 100);          // selects a random number. Needs a 10*10 grid to handle logic yet to be added (which will determine the Hints)
       if (!hasBomb.has(bombHere) && !notHere.has(bombHere)){     // checks that bombHere does NOT belong to either set 
       hasBomb.add(bombHere);                                     // having verified that it's a unique addition and not in the refused number list, it sticks it into the array
     }
    }
       hasBomb.forEach((value) => {                               // now we run through our unique number array (seriously, I feel like I'm explaining money laundering here)  
       hereBombHere.push(value);                                  // and we add it to the array which will place the boom-booms
     });
    console.log("hereBombHere", hereBombHere);                    // I love console.log - Did something not work? Add console.log to everything and see why. Did that piece of code do what I wanted? Check console.log
    for (var i = 0; i < hereBombHere.length; i++){                // Start placing bombs. I deliberately set up everything so that I can eventually add an option for grid size/difficulty
        var bombSpot = hereBombHere[i];                           // adds each position to a variable on each cycle
        var bombPlace = gridPos[bombSpot];                        // each time it finds a bomb it marks the spot in an array
        document.getElementById(bombPlace).style.backgroundColor = "#f4d292";   // and finally, it runs through that and makes things red
        
    }

// Here's where thing start getting ugly///


    for (var i = 0; i < hereBombHere.length; i++){                 // start a loop that runs for the length of hereBombHere (which is 8 but can be increased easily to any size)  
//      console.log("hereBombHere", hereBombHere);                   again an example of using log to find problems. I put this here because the rest of the loop wasn't functioning correctly and I wanted to ensure hereBombHere was still complete (which it was, meaning my problem is further along) - Update, it's an hour later and I've fixed it
      var bombHintAdd = hereBombHere[i];                           // sets any position containing a bomb to a value far higher than any other square (this will be used later to verify if a bomb is clicked )
      bombHint[bombHintAdd] = bombHint[bombHintAdd] +9;            // I really want to find a way to do this cleaner. It searches any square adjacent to a bomb and increases its value by 1 - there has to be a way to reduce the load
      bombHintAdd = hereBombHere[i] -11;
      bombHint[bombHintAdd] = bombHint[bombHintAdd] +1;
      bombHintAdd = hereBombHere[i] -10;
      bombHint[bombHintAdd] = bombHint[bombHintAdd] +1;
      bombHintAdd = hereBombHere[i] -9;
      bombHint[bombHintAdd] = bombHint[bombHintAdd] +1;
      bombHintAdd = hereBombHere[i] -1;
      bombHint[bombHintAdd] = bombHint[bombHintAdd] +1;
      bombHintAdd = hereBombHere[i] +1;
      bombHint[bombHintAdd] = bombHint[bombHintAdd] +1;
      bombHintAdd = hereBombHere[i] +9;
      bombHint[bombHintAdd] = bombHint[bombHintAdd] +1;
      bombHintAdd = hereBombHere[i] +10;
      bombHint[bombHintAdd] = bombHint[bombHintAdd] +1;
      bombHintAdd = hereBombHere[i] +11;
      bombHint[bombHintAdd] = bombHint[bombHintAdd] +1;
      }
      console.log("bombHint : ", bombHint, hereBombHere);

 /*     for (var i = 0; i < gridPos.length; i++ ){
          document.getElementById(gridPos[i]).textContent = bombHint[i];        // ages spent trying to figure this out. Was chatting to E*** via WhatsApp and laid out the problem step by step and solved it by seeing it laid out - my original logic was trying too hard to find the relevant index - LESSON : ALWAYS BREAK PROBLEMS DOWN
              }                                                                    and now I don't even need it anymore as these were only needed during testing */
              GameRun();
}
function GameRun(){                                                                     // moved this part into a function to prevent minefield being clicked pre-start

    window.addEventListener('contextmenu', (ev) => {
        ev.preventDefault();                                           // this prevents the menu opening on right-click - Now I just have to figure out how to get it to do something else
        console.log("right clicked",);                                 // had to take this step by step to make sure it was working. This is to confirm visually that rClick has happened
        var clicked = ev.target.id;                                    // adds the id of the clicked square to a var
        console.log("here : ", clicked);                               // and again let's me know that all is working up to here
        var bombMark = gridPos.indexOf(clicked);                       // takes the id of clicked square (e.g. b6) and finds the index of this in gridPos
        console.log("Please work = ", bombMark);                       // had my fingers crossed but it did indeed work 

        if (document.getElementById(clicked).style.backgroundColor !== "aqua") {            // this part takes care of what happens on rClick. First off, check if the square is default colour
            if (bombHint[bombMark] > 8) {                                               // and if there is a bomb. Other than in a very highly unlikely situation, a non-bomb square will never have more than 6 points
                console.log("Bing", bombHint[bombMark]);                                // Bing, Bang and Basta added to the steps to ensure that the correct option was being encountered
                document.getElementById(clicked).style.backgroundColor = "aqua";        // So, if it was default colour and has a bomb, the square changes colour and....
                document.getElementById(clicked).style.boxShadow = "inset 2px 2px 2px black"; 
                revealedTabs++;                                                         // ... 1 is added to the score for gameWin
            } else {                                                                    // else (that is, if it is default colour but doesn't contain a bomb)
                console.log("Bang");                                                    // let me know via console
                document.getElementById(clicked).style.backgroundColor = "aqua";        // and change the colour
                document.getElementById(clicked).style.boxShadow = "inset 2px 2px 2px black";
            }
        } else if (document.getElementById(clicked).style.backgroundColor === "aqua" && bombHint[bombMark] > 8) { // else if (that is, if the colour of the square is not default (handled above) square is aqua and there is a bomb)
                console.log("Basta");
                document.getElementById(clicked).style.backgroundColor = "";                    // changes the colour back to default
                document.getElementById(clicked).style.boxShadow = "";
                revealedTabs--;                                                                 // and reduces that game score
                console.log("This many : ", revealedTabs);
        } else {
            console.log(document.getElementById(clicked).style.backgroundColor)
            document.getElementById(clicked).style.backgroundColor = "";                           // the only other possibility is aqua coloured and not containing a bomb
            document.getElementById(clicked).style.boxShadow = "";
        }
    
      });
        document.getElementById("outerMine").addEventListener("click", function(event) {           // sets up a listener around the minefield
            if (event.target.classList.contains("MineCol")) {                   
                var butClick = event.target.id
                var workDammit = gridPos.indexOf(butClick);                                         // judging by variable names, I was either tired or getting frustrated at this point
                document.getElementById(butClick).textContent = bombHint[workDammit];                                  
                console.log("clicked", butClick);
               document.getElementById(butClick).style.color = "black";                         // sets a listener on all MineCol tiles (the playable ones) and reveals the bombHint when clicked.....
               document.getElementById(butClick).style.boxShadow = "inset 2px 2px 2px black";
/*
               window.addEventListener("click",                                                 // now that I have set up a rClick event, this is no longer needed. It does, however, correctly note a CtrlClick
               function(e) {
                 if (e.ctrlKey) console.log("Ctrl, yay!");                                     // hopefully I'll be able to use this to add bomb guess markers
               },
               false);  */
               if(document.getElementById(butClick).textContent > 8){
                console.log("dead");                                                            // ......or kills you
                document.getElementById(butClick).textContent = "KABOOOOOOM";
                for(i = 0; i < hereBombHere.length; i++){
                    document.getElementById(gridPos[hereBombHere[i]]).style.backgroundColor = "red";   // changes all the bombs to red. Might see if I can make this fancier - some animation, maybe?
                }
  
                document.getElementById("MineRestart").innerHTML = "You died. Click <span id='MineReload'>here</span> to try again";
                document.getElementById("MineStart").disabled = true;                           // disabled the Start Button because restarting doesn't clear the fields
                document.getElementById("MineReload").addEventListener("click", GameReload);    // and placed an alternative button for restarting
                }    
                var tileClear = gridPos.indexOf(butClick);                                      // seeming as you're not 'dead'; all this is to take care of what happens next
                console.log("Here it is : ", tileClear);                                        // usual check to make sure the gridPos is correctly identified
                if (bombHint[tileClear] === 0 && bombHint[tileClear - 1] === 0){                                // again, there has to be a neater way to do this 
                    document.getElementById(gridPos[tileClear -1]).textContent = "0";
                    document.getElementById(gridPos[tileClear -1]).style.color = "black";
                    document.getElementById(gridPos[tileClear -1]).style.boxShadow = "inset 2px 2px 2px black";
                }
                if (bombHint[tileClear] === 0 && bombHint[tileClear + 1] === 0){                // All of this is to check if, on pressing a square with a value of 0......
                    document.getElementById(gridPos[tileClear +1]).textContent = "0";           // ...it checks all adjacent squares and if they have a value of 0, reveals them
                    document.getElementById(gridPos[tileClear +1]).style.color = "black";
                    document.getElementById(gridPos[tileClear +1]).style.boxShadow = "inset 2px 2px 2px black";
                }
                if (bombHint[tileClear] === 0 && bombHint[tileClear - 11] === 0){
                    document.getElementById(gridPos[tileClear -11]).textContent = "0";
                    document.getElementById(gridPos[tileClear -11]).style.color = "black";
                    document.getElementById(gridPos[tileClear -11]).style.boxShadow = "inset 2px 2px 2px black";
                }
                if (bombHint[tileClear] === 0 && bombHint[tileClear - 10] === 0){
                    document.getElementById(gridPos[tileClear -10]).textContent = "0";
                    document.getElementById(gridPos[tileClear -10]).style.color = "black";
                    document.getElementById(gridPos[tileClear -10]).style.boxShadow = "inset 2px 2px 2px black";
                }
                if (bombHint[tileClear] === 0 && bombHint[tileClear - 9] === 0){
                    document.getElementById(gridPos[tileClear -9]).textContent = "0";
                    document.getElementById(gridPos[tileClear -9]).style.color = "black";
                    document.getElementById(gridPos[tileClear -9]).style.boxShadow = "inset 2px 2px 2px black";
                }
                if (bombHint[tileClear] === 0 && bombHint[tileClear  + 9] === 0){
                    document.getElementById(gridPos[tileClear + 9]).textContent = "0";
                    document.getElementById(gridPos[tileClear + 9]).style.color = "black";
                    document.getElementById(gridPos[tileClear + 9]).style.boxShadow = "inset 2px 2px 2px black";
                }
                if (bombHint[tileClear] === 0 && bombHint[tileClear  + 10] === 0){
                    document.getElementById(gridPos[tileClear + 10]).textContent = "0";
                    document.getElementById(gridPos[tileClear + 10]).style.color = "black";
                    document.getElementById(gridPos[tileClear + 10]).style.boxShadow = "inset 2px 2px 2px black";
                }
                if (bombHint[tileClear] === 0 && bombHint[tileClear  + 11] === 0){
                    document.getElementById(gridPos[tileClear + 11]).textContent = "0";
                    document.getElementById(gridPos[tileClear + 11]).style.color = "black";
                    document.getElementById(gridPos[tileClear + 11]).style.boxShadow = "inset 2px 2px 2px black";
                }
                console.log("Tiles Cleared : ", revealedTabs);                                  // this is a remnant of when I originally set gameWin situation by amount of squares successfully cleared 
                if (revealedTabs >= numberBombs){                                                         // (obviously, win by bombs correctly identified is far better)
                    document.getElementById("MineRestart").innerHTML = "You WIN!!! Click <span id='MineReload'>here</span> to play again";
                    for (i = 0;i < gridPos.length; i++){
                        document.getElementById(gridPos[i]).style.color = "green";              // make everything green. Again, maybe some animation here?
                        document.getElementById(gridPos[i]).style.backgroundColor = "green";
                        document.getElementById("MineStart").disabled = true;                        // disable the startbutton again
                        document.getElementById("MineReload").addEventListener("click", GameReload); // and activates the other restart button
                    }
                }
            }
        });    

        function GameReload(){                                                                   // refresh the page (will take this out once I figure out why my 'Clean the Field Loop isn't working)
        location.reload();
        }
}


});
// NEXT STEPS
// maybe some animation on win or lose

// find a way to auto-empty logically empty squares (Done :)
// add win condition  (Done :)
// add bomb marker by right click (Done :)


       
