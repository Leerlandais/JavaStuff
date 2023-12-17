const scoreSnake = document.getElementById("scoreSnake");
const bigGrid = 396;                                                    // sets size of grid. Width controlled using CSS, set to 725px
const bigGridFind = document.getElementById("snakeSet");                // locates the area where the grid will be placed
const startBut = document.getElementById("snakeStart");                 // locates the start button
const snakeGridArray = [];                                              // array to hold the grid
var snakeLength = 5;                                                    // starting length of snake
var snakePos = [];
var snakeSpeed = 150;                                                      // array to hold snake's position
for (i = 0; i < snakeLength; i++) {
    snakePos[i] = i+206;                                                // place the snake at the middle of the grid
}
var newSnakePos = [];                                                   // array used to calculate snake movement
var snakeDir = "";                                                      // used to hold current direction
var gridFood = new Set();                                               // array to store food positions
var snakeHead = snakePos[0];                                            // used to hold current position of snake's head
var deadRim = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 43, 44, 65, 66, 87, 88, 109, 110, 131, 132, 153, 154, 175, 176, 197, 198, 219, 220, 241, 242, 263, 264, 285, 286, 307, 308, 329, 330, 351, 352, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395];
var currDir = "";                                                                        // very annoying array to type out, needed to control the outer rim
var snakeCollide = [];                                                  // used to check if the snake runs into itself                                
for (let i = 0; i < bigGrid; i++) {                                     // now that all that is done, time to make the grid
    const placeDivs = document.createElement("div");                    // creates the <div> elements
    placeDivs.classList.add("snakeGrid");                               // adds class to each
    placeDivs.id = (i);                                                 // and an indiviual id
    bigGridFind.appendChild(placeDivs);                                 // puts the divs in place
    snakeGridArray.push(placeDivs.id);                                  // adds the div ids to the grid Array
                                                                        //   placeDivs.textContent = placeDivs.id;
}
deadRim.forEach(item => {                                               // colours the outer rim red
    document.getElementById(snakeGridArray[item]).style.backgroundColor = "red";
})
scoreSnake.value = 5;
// console.log(snakeGridArray);

//startBut.addEventListener("click", makeFood(12));                           // waits for start to be pressed

document.addEventListener("keydown", (e) => {                           // Listens for arrow button presses and sends relevant direction to move snake function
    if (e.key === "ArrowUp" && currDir !== "sDown") {
        // console.log("up arrow pressed", currDir);
        moveSnake("sUp");
    } else if (e.key === "ArrowDown" && currDir !== "sUp") {
        moveSnake("sDown");
        // console.log("down arrow pressed");
    } else if (e.key === "ArrowLeft" && currDir !== "sRight") {
        moveSnake("sLeft");
        // console.log("left arrow pressed");
    } else if (e.key === "ArrowRight" && currDir !== "sLeft") {
        moveSnake("sRight");
        // console.log("right arrow pressed");
    }
});

function makeFood(amount) {                                                   // time to place some food
    startBut.textContent = "Snake length : " + scoreSnake.value;
 //   snakeSpeed = snakeSpeed -10;
    while (gridFood.size < amount){                                         // adjust this to change how much to place
        var foodSquare = Math.floor(Math.random() * 396)
          if (!gridFood.has(foodSquare) && !snakePos.includes(foodSquare) && !deadRim.includes(foodSquare)){    // makes sure the random selection is unique, isn't where the snake is and isn't in the outer rim
             gridFood.add(foodSquare);                                                                          // adds it all to the array
          }
      }
        gridFood.forEach(item => {
        document.getElementById(snakeGridArray[item]).style.backgroundColor = "green";                          // and colours the squares
      });
      // console.log("Food Placed", gridFood);
      makeSnake;
}

function makeSnake() {
    // console.log(snakeHead);
    snakeCollide = snakePos.slice(1);                                                                           // copies the current snake position (minus the head) to the collide array
    if (deadRim.includes(snakeHead) || snakeCollide.includes(snakeHead)) {                                      // checks if the snake's head has reached the outer rim or collided with its body
        confirm("You died. You grew your snake to " + snakePos.length);                                         // You're dead. Also shows snake's length
        location.reload();
    }
     newSnakePos = [];                                                                                          // makes sure this is empty
    //  startBut.disabled = true;
    // console.log ("here we are : ", snakePos);
    for (let i = 1; i < snakePos.length; i++) {
        document.getElementById(snakePos[i]).style.backgroundColor = "blue";                                    // colours the snake
    }   document.getElementById(snakePos[0]).style.backgroundColor = "yellow";
    if (gridFood.has(snakePos[0])) { 
        if (snakeSpeed > 65) {
        let goFaster = snakeSpeed / 50;                                                                           // checks if the snake is eating. When I made this part, I hadn't yet made a var for snakeHead
        snakeSpeed = snakeSpeed - goFaster;
        console.log("speed up");
        }else {
            snakeSpeed = snakeSpeed;
            console.log("no change");
        }
        gridFood.delete(snakePos[0]); 
        console.log(snakeSpeed);                                                                          // removes the food once eaten 
        // console.log ("He ate!");
        snakePos.push(snakePos[snakePos.length-1] - snakeDir);                                                  // adds a new square to the end of snake's position depending on snake's current direction
        scoreSnake.value++;
        startBut.textContent = "Snake length : " + scoreSnake.value;
        
        // console.log("dir : ", snakeDir, "pos : ", snakePos);
    }
    if (gridFood.size < 2){
        makeFood(6);                                                                                            // late addition. Adds more food to keep the game going
    }
    
}

var intervalId = null;
                                                                                         // var to control which direction will be repeated

function moveSnake(dir) {
    

    console.log(currDir);
    deadRim.forEach(item => {
        document.getElementById(snakeGridArray[item]).style.backgroundColor = "red";
      });
    clearInterval(intervalId);
                                                                                      // stops repetition of previous direction (if any)

    if (dir === "sUp") {
        intervalId = setInterval(() => {                                                                        // starts the interval repetition
        // console.log("let's move up");
        newSnakePos[0] = (snakePos[0]) - 22;                                                                    // moves the snakes head position to the square immediately above
        snakeDir = - 22;                                                                                        // stores the current direction
        document.getElementById(snakePos[snakePos.length-1]).style.backgroundColor = "";                        // deletes the last square of the snake
           for (let i = 0; i < snakePos.length - 1; i++) {
               document.getElementById(snakePos[i]).style.backgroundColor = "";                                 // deletes the rest of the snake
               newSnakePos.push(snakePos[i]);                                                                   // and makes the updated position of the snake
               }
               snakePos = newSnakePos;
               // console.log ("new position : ", snakePos);
               snakeHead = snakePos[0]; 
               currDir = dir;                                                                        // stored for collision detection
                makeSnake();                                                                                    // jump back to here to colour the new snake
            }, snakeSpeed);                                                                                            // and repeat 10 times per second
            }else if (dir === "sDown") {
                intervalId = setInterval(() => {
    
                // console.log("let's move down");
        newSnakePos[0] = (snakePos[0]) + 22;                                                                    // same as line 90 but moves to the square immediately below
        snakeDir = + 22;
        document.getElementById(snakePos[snakePos.length-1]).style.backgroundColor = "";
        for (let i = 0; i < snakePos.length - 1; i++) {
            document.getElementById(snakePos[i]).style.backgroundColor = "";
            newSnakePos.push(snakePos[i]);
        }
        snakePos = newSnakePos;
        // console.log ("new position : ", snakePos);
        snakeHead = snakePos[0];
        currDir = dir;
        makeSnake();
    }, snakeSpeed);
    }else if (dir === "sLeft") {

        intervalId = setInterval(() => {
        // console.log("let's move left");
        newSnakePos[0] = (snakePos[0]) - 1;                                                                      // line 90 again but this time to the left
        snakeDir = - 1;
        document.getElementById(snakePos[snakePos.length-1]).style.backgroundColor = "";
        for (let i = 0; i < snakePos.length - 1; i++) {
            document.getElementById(snakePos[i]).style.backgroundColor = "";
            newSnakePos.push(snakePos[i]);
        }
        snakePos = newSnakePos;
        // console.log ("new position : ", snakePos);
        snakeHead = snakePos[0];
        currDir = dir;
        makeSnake();  
    }, snakeSpeed);      
    }else if (dir === "sRight") {
        intervalId = setInterval(() => {
        // console.log("let's move right");
        newSnakePos[0] = (snakePos[0]) + 1;                                                                       // and, of course, to the right
        snakeDir = + 1;
        document.getElementById(snakePos[snakePos.length-1]).style.backgroundColor = "";
        for (let i = 0; i < snakePos.length - 1; i++) {
            document.getElementById(snakePos[i]).style.backgroundColor = "";
            newSnakePos.push(snakePos[i]);
        }
        snakePos = newSnakePos;
        // console.log ("new position : ", snakePos);
        snakeHead = snakePos[0];
        currDir = dir;
        makeSnake();
    }, snakeSpeed);
    }
}

