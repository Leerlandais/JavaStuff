document.addEventListener("DOMContentLoaded", function() {


var diffLevel = 0;
    document.getElementById("facile").onclick = function() {
        diffSet(1);
}
    document.getElementById("moyen").onclick = function() {
        diffSet(2);
}
    document.getElementById("dur").onclick = function() {
        diffSet(3);
}

function diffSet(level) {
    diffLevel = level;
    StartMath();
}
function StartMath() {
    console.log(diffLevel);

    if (diffLevel === 1){
        var num1 = Math.floor(Math.random() * 9) + 1;
        var num2 = Math.floor(Math.random() * 9) + 1;
                mathTest();
    }
    else if (diffLevel === 2){
        var num1 = Math.floor(Math.random() * 24) + 1;
        var num2 = Math.floor(Math.random() * 24) + 1;  
                mathTest();      
    }
    else {
        var num1 = Math.floor(Math.random() * 99) + 1;
        var num2 = Math.floor(Math.random() * 99) + 1;
                mathTest();
    }

    function mathTest(){
    var game = true;
    while (game === true){
    
    console.log(num1, num2);
    var numTot = num1*num2;
    console.log(numTot);
    
    
    var yourAns = prompt("What is " + num1 + " x " + num2 + "?")
    if (parseInt(yourAns) === numTot) {
        alert("Hurrah!");
        game = false;
    }
    else {
        alert("Sorry, that's not right. Try again");
    }
        }

    }
}


});