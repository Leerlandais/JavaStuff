document.addEventListener("DOMContentLoaded", function(){           // pretty much the first thing I add to any .js It makes sure that the script is ready and waiting when the page is loaded

var gridPos = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "e10", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "g10", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10", "j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8", "j9", "j10"]; // huge array needed to track positions of everything - of course I didn't write it all out - "Hi Chat. I don't feel like typing it all, can you complete this array for me, please?["a1", "a2", "a3"......."j8", "j9", "j10"]" works just fine :D

var hereBombHere = [];    // this array is for where the bombs will be placed
var bombSigns = [];       // this one takes care of the squares that will hold the hints

document.getElementById("MineStart").onclick = setBombs;          // starts everything

function setBombs () {
    var bombReset = document.getElementsByClassName("MineCol");   // first off, reset the colours of everything 
        for (let i = 0;i < bombReset.length; i++){                // by cycling through the grid 
            bombReset[i].style.backgroundColor = "";              // and changing it back to default
        }
     hereBombHere = [];                                           // makes sure the array for bomb position is empty

     const hasBomb = new Set();                                   // this one took a while to figure out. My older code was producing non-unique positions. Lots of digging unearthed 'new Set()' which I need to look into more cos I don't really understand it but it works 
     while (hasBomb.size < 10) {                                  // here's where it helps...anything added to hasBomb will be unique. No more repetition of bombs
       const bombHere = Math.floor(Math.random() * 100);          // selects a random number. Needs a 10*10 grid to handle logic yet to be added (which will determine the Hints)
       hasBomb.add(bombHere);                                     // having verified that it's a unique addition to the "Set", it sticks it into the array
     }
       hasBomb.forEach((value) => {                               // now we run through our unique number array (seriously, I feel like I'm explaining money laundering here)  
       hereBombHere.push(value);                                  // and we add it to the array which will place the boom-booms
     });
    console.log(hereBombHere);                                    // I love console.log - Did something not work? Add console.log to everything and see why. Did that piece of code do what I wanted? Check console.log
    for (var i = 0; i < hereBombHere.length; i++){                // Start placing bombs. I deliberately set up everything so that I can eventually add an option for grid size/difficulty
        var bombSpot = hereBombHere[i];                           // adds each position to a variable on each cycle
        var bombPlace = gridPos[bombSpot];                        // each time it finds a bomb it marks the spot in an array
        document.getElementById(bombPlace).style.backgroundColor = "red";   // and finally, it runs through that and makes things red
    }
}


});

// For tomorrow, a big job. Figure out how to limit the bomb placement to the inner 8*8 grid

// idea...create a const notHere = new Set() to refuse the 36 outer blocks