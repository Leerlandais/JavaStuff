 
const bigGrid = 551;                                                        // Yeah...551, spent 15 minutes trying to get it to be a box, without corners
const bigGridFind = document.getElementById("snakeSet");                    // This is to find the element which will contain the grid
const gridArray = [];                                                       // This is to hold the grid in an array for later use
const gridFood = [];                                                        // This will be used to store the positions of "food"


    for (let i = 0; i < bigGrid; i++) {                                     // This is where things got tricky. Already, how to create a grid via JS (which of course isn't enough, the grid has to have class and id.
      const placeGrid = document.createElement("div");                      // Having already done more than a few grids by hand, I had to find a better way)
      placeGrid.classList.add("gridXY");                                    // New JS tool here, createElement...It's wonderful. Adds a <div> to the HTML (visible via 'Inspector'). Then it adds a class to each dic (the 551 of bigGrid)
      placeGrid.id = "x" + (i + 1);                                         // and adds a unique id to each one. I wanted a1...a30, b1...b30 etc but couldn't figure out how to do that                                   
      bigGridFind.appendChild(placeGrid);                                   // This relates back to the createElly bit and places it in the parent (the fieldset surrounding it all). The positioning and size is in the .css
      gridArray.push(placeGrid.id);                                         // and finally, slaps it all into the array created for later use
    }
        console.log(gridArray);                                             // Fingers crossed, toes crossed, eyes fucking crossed. Hope this works (and as always, console log is my best friend)


document.getElementById("snakeSet").onclick = goSnake; 

function goSnake(){
  console.log("That's step 1");
}

  
 


        // For tomorrow : 
// Get the grid set up ---- (done)
// Pick some UNIQUE random spots for food (let's say 8, which once at 4 will always stay at 4)
// Make a square or a line of squares (the snake)
// Automate it's movement to always advance current direction (for the start, just from right to left) is square === free
// Set it to die if wall === true
// Figure out how to make it recognise key presses
// Figure out how to make the snake change direction (and bend while doing so)
// Figure out how to make snake bigger when foodInHeadEnd = true
// Everything else

  




// const hasBomb = new Set();                                  
// while (hasBomb.size < 8){
//  const bombHere = Math.floor(Math.random() * 100);          
//  if (!hasBomb.has(bombHere) && !notHere.has(bombHere)){     
//  hasBomb.add(bombHere);                                     
// 
// 
//  hasBomb.forEach((value) => {                               
//  hereBombHere.push(value);                                  
// );
// onsole.log("hereBombHere", hereBombHere);                   
// or (var i = 0; i < hereBombHere.length; i++){               
//   var bombSpot = hereBombHere[i];                           
//   var bombPlace = gridPos[bombSpot];                        
//   document.getElementById(bombPlace).style.backgroundColor = "#f4d292";
