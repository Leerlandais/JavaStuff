document.addEventListener("DOMContentLoaded", function() {

document.getElementById("dobStart").onclick = dobBegin;

function dobBegin(){
    var DoB = prompt("Please enter your date of birth (DD/MM/YYYY");
    if (isNaN(DoB)){
        alert("Please input your DOB correctly - 8 figures, no slashed, eg 27061975");
        dobBegin();
    }

    else if (DoB.length !== 8){
        alert("Please input your DOB correctly - 8 figures, no slashed, eg 27061975");
        dobBegin();
    }
    else{
        cutString();    // I was going to DoB = parseInt(DoB) here but couldn't in case the first number was a 0, hence lots of parseInt elsewhere
    }

function cutString(){
    var dayShow = 0;
    var newMM = 0;
    var LYfix = 0;

    var DD = DoB.substring(0, 2);
        console.log(DD);
    var MM = DoB.substring(2, 4);
        console.log(MM);
    var YYx = DoB.substring(4, 6);
        console.log(YYx);
    var YYy = DoB.substring(4);
        console.log(YYy);
    var YY = DoB.substring(6);
        console.log (YY);

        if (parseInt(YYy) % 100 === 0 && parseInt(YYy) % 400 !== 0){
            LYfix++;
            console.log("1",LYfix);
        }
            console.log("current", LYfix);
        if (parseInt(YY) % 4 === 0 && MM < 3 && DD < 30){
            LYfix--;
            console.log("2", LYfix);
        }

        console.log(LYfix);
        
        
        if (parseInt(YYx) === 20){
            LYfix = LYfix + 6;
            console.log ("good");
        }
        else if (parseInt(YYx) === 21){
            LYfix = LYfix + 4;
        }
        else if (parseInt(YYx) === 22){
            LYfix = LYfix + 2;
        }
        else if (parseInt(YYx) === 18){
            LYfix = LYfix + 2;
        }
        else if (parseInt(YYx) === 17){
            LYfix = LYfix + 4;
        }
        else if (parseInt(YYx) === 16){
            LYfix = LYfix + 6;
        }

            console.log(LYfix);

        if (parseInt(MM) === 1){
            newMM = 1;
        }
        else if (parseInt(MM) === 2){
            newMM = 4;
        }
        else if (parseInt(MM) === 3){
            newMM = 4;
        }
        else if (parseInt(MM) === 4){
            newMM = 0;
        }
        else if (parseInt(MM) === 5){
            newMM = 2;
        }
        else if (parseInt(MM) === 6){
            newMM = 5;
        }
        else if (parseInt(MM) === 7){
            newMM = 0;
        }
        else if (parseInt(MM) === 8){
            newMM = 3;
        }
        else if (parseInt(MM) === 9){
            newMM = 6;
        }
        else if (parseInt(MM) === 10){
            newMM = 1;
        }
        else if (parseInt(MM) === 11){
            newMM = 4;
        }
        else if (parseInt(MM) === 12){
            newMM = 6;
        }
            console.log("Month", newMM);

            YY = parseInt(YY) + parseInt(YY/4);
            console.log(YY, LYfix);

            dayCalc = (YY + parseInt(DD) + newMM + LYfix) % 7;

            if (dayCalc === 0){
                alert("You were born on a Saturday");
            }
            else if (dayCalc === 1){
                alert("You were born on a Sunday");
            }
            else if (dayCalc === 2){
                alert("You were born on a Monday");
            }
            else if (dayCalc === 3){
                alert("You were born on a Tuesday");
            }
            else if (dayCalc === 4){
                alert("You were born on a Wednesday");
            }
            else if (dayCalc === 5){
                alert("You were born on a Thursday");
            }
            else{
                alert("You were born on a Friday");
            }

}
}

});