const bigGrid = 396;
const bigGridFind = document.getElementById("snakeSet");
const startBut = document.getElementById("snakeStart");
const snakeGridArray = [];
var snakeLength = 5;
var snakePos = [];
for (i = 0; i < snakeLength; i++) {
    snakePos[i] = i+206; 
}
var newSnakePos = [];
var snakeDir = "";
var gridFood = new Set();
var snakeHead = snakePos[0];
var deadRim = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 43, 44, 65, 66, 87, 88, 109, 110, 131, 132, 153, 154, 175, 176, 197, 198, 219, 220, 241, 242, 263, 264, 285, 286, 307, 308, 329, 330, 351, 352, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395];
var snakeCollide = "";
for (let i = 0; i < bigGrid; i++) {
    const placeDivs = document.createElement("div");
    placeDivs.classList.add("snakeGrid");
    placeDivs.id = (i);
    bigGridFind.appendChild(placeDivs);
    snakeGridArray.push(placeDivs.id)
 //   placeDivs.textContent = placeDivs.id;
}
deadRim.forEach(item => {
    document.getElementById(snakeGridArray[item]).style.backgroundColor = "red";
})
console.log(snakeGridArray);

startBut.addEventListener("click", makeFood);

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        console.log("up arrow pressed");
        moveSnake("sUp");
    } else if (e.key === "ArrowDown") {
        moveSnake("sDown");
        console.log("down arrow pressed");
    } else if (e.key === "ArrowLeft") {
        moveSnake("sLeft");
        console.log("left arrow pressed");
    } else if (e.key === "ArrowRight") {
        moveSnake("sRight");
        console.log("right arrow pressed");
    }
});

function makeFood() {
    while (gridFood.size < 18){
        var foodSquare = Math.floor(Math.random() * 400)
          if (!gridFood.has(foodSquare) && !snakePos.includes(foodSquare) && !deadRim.includes(foodSquare)){
             gridFood.add(foodSquare);
          }
      }
        gridFood.forEach(item => {
        document.getElementById(snakeGridArray[item]).style.backgroundColor = "green";
      });
      console.log("Food Placed", gridFood);
      makeSnake;
}

function makeSnake() {
    console.log(snakeHead);
    snakeCollide = snakePos.slice(1);
    if (deadRim.includes(snakeHead) || snakeCollide.includes(snakeHead)) {
        confirm("You died");
        location.reload();
    }
     newSnakePos = [];
    //  startBut.disabled = true;
    console.log ("here we are : ", snakePos);
    for (let i = 0; i < snakePos.length; i++) {
        document.getElementById(snakePos[i]).style.backgroundColor = "blue";
    }
    if (gridFood.has(snakePos[0])) {
        gridFood.delete(snakePos[0]);
        console.log ("He ate!");
        snakePos.push(snakePos[snakePos.length-1] - snakeDir);          
        console.log("dir : ", snakeDir, "pos : ", snakePos);
    }
    
}

function moveSnake(dir) {
    if (dir === "sUp") {
        console.log("let's move up");
        newSnakePos[0] = (snakePos[0]) - 22;
        snakeDir = - 22;
        document.getElementById(snakePos[snakePos.length-1]).style.backgroundColor = "";
           for (let i = 0; i < snakePos.length - 1; i++) {
               document.getElementById(snakePos[i]).style.backgroundColor = "";
               newSnakePos.push(snakePos[i]);
               }
               snakePos = newSnakePos;
               console.log ("new position : ", snakePos);
               snakeHead = snakePos[0];
                makeSnake();
    }else if (dir === "sDown") {
        console.log("let's move down");
        newSnakePos[0] = (snakePos[0]) + 22;
        snakeDir = + 22;
        document.getElementById(snakePos[snakePos.length-1]).style.backgroundColor = "";
           for (let i = 0; i < snakePos.length - 1; i++) {
               document.getElementById(snakePos[i]).style.backgroundColor = "";
               newSnakePos.push(snakePos[i]);
               }
               snakePos = newSnakePos;
               console.log ("new position : ", snakePos);
               snakeHead = snakePos[0];
                makeSnake();
    }else if (dir === "sLeft") {
        console.log("let's move left");
         newSnakePos[0] = (snakePos[0]) - 1;
         snakeDir = - 1;
         document.getElementById(snakePos[snakePos.length-1]).style.backgroundColor = "";
            for (let i = 0; i < snakePos.length - 1; i++) {
                document.getElementById(snakePos[i]).style.backgroundColor = "";
                newSnakePos.push(snakePos[i]);
                }
                snakePos = newSnakePos;
                console.log ("new position : ", snakePos);
                snakeHead = snakePos[0];
                 makeSnake();        
    }else if (dir === "sRight") {
        console.log("let's move right");
        newSnakePos[0] = (snakePos[0]) + 1;
        snakeDir = + 1;
        document.getElementById(snakePos[snakePos.length-1]).style.backgroundColor = "";
           for (let i = 0; i < snakePos.length - 1; i++) {
               document.getElementById(snakePos[i]).style.backgroundColor = "";
               newSnakePos.push(snakePos[i]);
               }
               snakePos = newSnakePos;
               console.log ("new position : ", snakePos);
               snakeHead = snakePos[0];
                makeSnake();
    }
}

