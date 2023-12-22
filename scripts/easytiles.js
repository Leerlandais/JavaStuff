const startTile = document.getElementById("startTile");
const tileHeader = document.getElementById("tileHeader");
const winOrder = ["tile11", "tile12", "tile13", "tile21", "tile22", "tile23", "tile31", "tile32", "tile33"];
startTile.onclick = shuffleTiles;
function shuffleTiles() {
    startTile.disabled = true;
    for (var row = 1; row <= 3; row++) { 
        for (var column = 1; column <= 3; column++) { 
            var row2 = Math.floor(Math.random() * 3 + 1); 
            var column2 = Math.floor(Math.random() * 3 + 1);    
            switchTilePos("tile" + row + column, "tile" + row2 + column2); 
        } 
    } 
}

function tileSelect(row, column) {
    console.log("clicked");
    var tile = document.getElementById("tile" + row + column) ; 
    var tile = tile.className;
    if (tile!="tile9") { 
        if (column < 3) {
            if ( document.getElementById("tile" + row + (column + 1)).className=="tile9") {
                switchTilePos("tile" + row + column, "tile" + row + (column + 1));
                return;
            }
        }
        if (column > 1) {
            if ( document.getElementById("tile" + row + (column - 1)).className=="tile9") {
                switchTilePos("tile" + row + column, "tile" + row + (column - 1));
                return;
            }
        }
        
        if (row > 1) {
            if ( document.getElementById("tile" + (row - 1) + column).className=="tile9") {
                switchTilePos("tile" + row + column, "tile" + (row - 1) + column);
                return;
            }
        }
        if (row < 3) {
            if ( document.getElementById("tile" + (row + 1) + column).className=="tile9") {
                switchTilePos("tile" + row + column, "tile" + (row + 1) + column);
                return;
            }
        } 
    }
    
}
function switchTilePos(firstTile, secTile) {
    var holdTile = document.getElementById(firstTile).className;
    document.getElementById(firstTile).className = document.getElementById(secTile).className;
    document.getElementById(secTile).className = holdTile;
}



/*
let currentOrder = [];
for (let i = 0; i < winOrder.length; i++) {
    if (document.getElementById(winOrder[i]).className === "tile" + i);
    currentOrder.push(winOrder[i]);
}   if (winOrder.length === currentOrder.length) {
        console.log(winOrder.length, currentOrder.length);
        console.log(winOrder, currentOrder);
        tileHeader.textContent = "That's right. Congratulations";
}
*/
