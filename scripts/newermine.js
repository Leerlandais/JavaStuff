

var diff = "";
var bombCount = 0;
var hasBomb = new Set();
var bombPos = [];
var bombHint = new Array(100).fill(0); 
let bombHintArray = [];

document.getElementById("diff1").onclick = gameEasy;
document.getElementById("diff2").onclick = gameMid;
document.getElementById("diff3").onclick = gameHard;


function gameEasy() {
    console.log("Easy");
    diff = 100;
    bombCount = 10;
    makeMine();
}
function gameMid() {
    console.log("Mid");
    diff = 100;
    bombCount = 16;
    makeMine();
}
function gameHard() {
    console.log("Hard");
    diff = 100;
    bombCount = 22;
    makeMine();
}

function makeMine() {
    console.log(diff);
    const diffBut1 = document.getElementById('diff1');
    const diffBut2 = document.getElementById('diff2');
    const diffBut3 = document.getElementById('diff3');
    diffBut1.remove();
    diffBut2.remove();
    diffBut3.remove();
    for (let i = 0; i < diff; i++) {
        const gridMaker = document.getElementById("makeGridHere"); 
        const placeGrid = document.createElement("div");
          placeGrid.classList.add("mineSquare");
          placeGrid.id = (i); 
    //      placeGrid.textContent = i + 1;
          gridMaker.appendChild(placeGrid);
    }
   // bombCount = Math.sqrt(parseInt(diff));
    while (hasBomb.size < bombCount){
      const bombHere = Math.floor(Math.random() * diff);
      if (!hasBomb.has(bombHere)){
      hasBomb.add(bombHere);
    }
   }
    bombHintArray = Array.from(hasBomb);
    console.log("arry :", bombHintArray);
    bombPos = Array.from(hasBomb);
    console.log(hasBomb, bombCount);
   for (i = 0; i < bombCount; i++){
        document.getElementById(bombPos[i]).style.backgroundColor = "red";
   }
   console.log("size", bombHintArray.length);
   
   for (var i = 0; i < bombHintArray.length; i++){                 // start a loop that runs for the length of hasBomb (which is 8 but can be increased easily to any size)  
          console.log("hasBomb", bombHintArray);                //   again an example of using log to find problems. I put this here because the rest of the loop wasn't functioning correctly and I wanted to ensure hasBomb was still complete (which it was, meaning my problem is further along) - Update, it's an hour later and I've fixed it
          var bombHintAdd = bombHintArray[i];                                                                  // sets any position containing a bomb to a value far higher than any other square (this will be used later to verify if a bomb is clicked )
          bombHint[bombHintAdd] = bombHint[bombHintAdd] +9;            // I really want to find a way to do this cleaner. It searches any square adjacent to a bomb and increases its value by 1 - there has to be a way to reduce the load
          bombHintAdd = bombHintArray[i] -11;
          bombHint[bombHintAdd] = bombHint[bombHintAdd] +1;
          bombHintAdd = bombHintArray[i] -10;
          bombHint[bombHintAdd] = bombHint[bombHintAdd] +1;
          bombHintAdd = bombHintArray[i] -9;
          bombHint[bombHintAdd] = bombHint[bombHintAdd] +1;
          bombHintAdd = bombHintArray[i] -1;
          bombHint[bombHintAdd] = bombHint[bombHintAdd] +1;
          bombHintAdd = bombHintArray[i] +1;
          bombHint[bombHintAdd] = bombHint[bombHintAdd] +1;
          bombHintAdd = bombHintArray[i] +9;
          bombHint[bombHintAdd] = bombHint[bombHintAdd] +1;
          bombHintAdd = bombHintArray[i] +10;
          bombHint[bombHintAdd] = bombHint[bombHintAdd] +1;
          bombHintAdd = bombHintArray[i] +11;
          bombHint[bombHintAdd] = bombHint[bombHintAdd] +1;
        }
        console.log("bombHint : ", bombHint, bombHintArray);
   
    for (i = 0; i < (bombHint.length); i++){
        if (document.getElementById(i) != null){
            document.getElementById(i).textContent = bombHint[i];
        }else {
            continue;
        }
    }   
        
    }

/*
    gridArray.push(placeGrid.id);  
    placeGrid.textContent = placeGrid.id;
 }
 console.log(gridArray);



*/