const startTile = document.getElementById("startTile")
startTile.onclick = shuffleTiles;


function shuffleTiles() {
    for (var row = 1; row <= 4; row++) { 
       for (var column = 1; column <= 4; column++) { 
        var row2 = Math.floor(Math.random()*4 + 1); 
        var column2 = Math.floor(Math.random()*4 + 1);
 //       console.log("tile"+row+"_"+column,"tile"+row2+"_"+column2);
        tileExchange("tile"+row+"_"+column,"tile"+row2+"_"+column2); 
       }
    } 
} 

function tileExchange(cell1, cell2) {
    let cell1Element = document.getElementById(cell1);
    let cell2Element = document.getElementById(cell2);
 //   console.log(cell1, cell1Element.id, cell2, cell2Element.id);
    let tileHolder = cell1;
    cell1Element.id = cell2;
    cell2Element.id = tileHolder;
    /*
    let tileHolder = document.getElementById(cell1).id;
 //   console.log("temp", temp);
    document.getElementById(cell1).id = cell2;
    document.getElementById(cell2).id = tileHolder;
    */
}

function moveTile(row, col) {
    var tileClicked = document.getElementById("tile" + row + "_" + col);
    if (tileClicked.id != "tile1_4") {
        if (col < 4) {
            if ("tile" + row + "_" + (col + 1) === "tile1_4"){
                tileExchange("tile" + row + "_" + col, "tile" + row + "_" + (col + 1));
                return;
            }
        }
    }else {
        console.log ("bah");        
    }

}

/*

function moveTile(row, col) {
    var tileClicked = document.getElementById("tile" + row + "_" + col);
    console.log(tileClicked.id, "the box to the right is " + "tile" + row + "_" + (col + 1));
    if (tileClicked.className != "blank") {
        console.log(tileClicked.className)
        console.log(document.getElementById("tile" + row + "_" + (col + 1)).className)
    if (document.getElementById("tile" + row + "_" + (col + 1)).id === "tile1_4") {
        console.log(tileClicked.id, "  : and the other ",  "tile" + row + "_" + (col + 1))
        tileExchange(tileClicked.id, "tile" + row + "_" + (col + 1));
        return;
    }else if (tileClicked.id === "tile1_4") {
        console.log ("that's the blank one"); 
    }else {
        console.log ("Error : func moveTile", "tile" + row + "_" + (col + 1) === "tile1_4");
    }
}
}

*/