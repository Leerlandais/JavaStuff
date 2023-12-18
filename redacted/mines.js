document.addEventListener("DOMContentLoaded", function(){

var gridPos = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"];
var hereBombHere = [];
var bombSigns = [];
document.getElementById("MineStart").onclick = setBombs;

function setBombs () {
    var bombReset = document.getElementsByClassName("MineBut");
        for (let i = 0;i < bombReset.length; i++){
            bombReset[i].style.backgroundColor = "white";
        }
     hereBombHere = [];   

    for (var i = 0; i < 8; i++){
        bombHere = Math.floor(Math.random() * 64);
        hereBombHere.push(bombHere);

    }
    console.log(hereBombHere);
    for (var i = 0; i < hereBombHere.length; i++){
        var bombSpot = hereBombHere[i];
        var bombPlace = gridPos[bombSpot];
        document.getElementById(bombPlace).style.backgroundColor = "red";
    }
}

});



/*
let bombSign = bombHere - 9;
bombSigns.push(bombSign);
bombSign = bombHere - 8;
bombSigns.push(bombSign);
bombSign = bombHere - 7;
bombSigns.push(bombSign);
bombSign = bombHere - 1;
bombSigns.push(bombSign);
bombSign = bombHere + 1;
bombSigns.push(bombSign);
bombSign = bombHere + 7;
bombSigns.push(bombSign);
bombSign = bombHere + 8;
bombSigns.push(bombSign);
bombSign = bombHere + 9;
bombSigns.push(bombSign);
console.log("Bombsign" +bombSigns); */