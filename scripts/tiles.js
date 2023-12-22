const startTile = document.getElementById("startTile");
const winOrder = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tile9", "tile10", "tile11", "tile12", "tile13", "tile14", "tile15", "tile16"];
startTile.onclick = shuffleTiles;

function shuffleTiles() {
    startTile.disabled = true;
    for (var row = 1; row <= 4; row++) { 
        for (var column = 1; column <= 4; column++) { 
            var row2 = Math.floor(Math.random() * 4 + 1); 
            var column2 = Math.floor(Math.random() * 4 + 1);    
            switchTilePos("tile" + row + column, "tile" + row2 + column2); 
        } 
    } 
}

function tileSelect(row, column) {
    console.log("clicked");
    var tile = document.getElementById("tile" + row + column) ; 
    var tile = tile.className;
    if (tile!="tile16") { 
        if (column < 4) {
            if ( document.getElementById("tile" + row + (column + 1)).className=="tile16") {
                switchTilePos("tile"+row+column,"tile" + row + (column + 1));
                return;
            }
        }
        if (column > 1) {
            if ( document.getElementById("tile" + row + (column - 1)).className=="tile16") {
                switchTilePos("tile"+row+column,"tile" + row + (column - 1));
                return;
            }
        }
        
        if (row > 1) {
            if ( document.getElementById("tile" + (row - 1) + column).className=="tile16") {
                switchTilePos("tile"+row+column,"tile" + (row - 1) + column);
                return;
            }
        }
        if (row < 4) {
            if ( document.getElementById("tile" + (row + 1) + column).className=="tile16") {
                switchTilePos("tile"+row+column,"tile" + (row + 1) + column);
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

