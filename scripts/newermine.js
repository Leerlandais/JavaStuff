

var diff = "";
var bombCount = 0;
var hasBomb = new Set();
var bombPos = [];

document.getElementById("diff1").onclick = gameEasy;
document.getElementById("diff2").onclick = gameMid;
document.getElementById("diff3").onclick = gameHard;


function gameEasy() {
    console.log("Easy");
    diff = 64;
    makeMine();
}
function gameMid() {
    console.log("Mid");
    diff = 100;
    makeMine();
}
function gameHard() {
    console.log("Hard");
    diff = 144;
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
          placeGrid.id = (i + 1); 
          placeGrid.textContent = i + 1;
          gridMaker.appendChild(placeGrid);
    }
    bombCount = Math.sqrt(parseInt(diff));
    while (hasBomb.size < bombCount){
      const bombHere = Math.floor(Math.random() * diff);
      if (!hasBomb.has(bombHere)){
      hasBomb.add(bombHere);
    }
   }
    bombPos = Array.from(hasBomb);
    console.log(hasBomb, bombCount);
   for (i = 0; i < bombCount; i++){
        document.getElementById(bombPos[i]).style.backgroundColor = "red";
   }
}
/* adjust this so that it creates an 8*8 grid, 10*10 or 12*12





    gridArray.push(placeGrid.id);  
    placeGrid.textContent = placeGrid.id;
 }
 console.log(gridArray);



*/