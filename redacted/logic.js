document.addEventListener("DOMContentLoaded", function(){
var gameLevel = "0";
    document.getElementById("logicTable").addEventListener("click", function(event) {
        if (event.target.classList.contains("logButton")) {
            console.log("Clicked square:", event.target.id);
            var sqClicked = event.target;
        }
        if (sqClicked.style.backgroundColor ===""){
            sqClicked.style.backgroundColor = "red";
            }else if(sqClicked.style.backgroundColor === "red"){
                sqClicked.style.backgroundColor = "green";            
            }else if(sqClicked.style.backgroundColor === "green"){
                sqClicked.style.backgroundColor = "";
            }

        });
    document.getElementById("level1").addEventListener("click", function(){  
        console.log("EasyGame");
        document.getElementById("Clue1").textContent = easy1;
        document.getElementById("Clue2").textContent = easy2;
        document.getElementById("Clue3").textContent = easy3;
        document.getElementById("Clue4").textContent = easy4;
        document.getElementById("Clue5").textContent = easy5;
        document.getElementById("Clue6").textContent = easy6;
    });
    document.getElementById("level2").addEventListener("click", function(){  
        console.log("MidGame");
        document.getElementById("Clue1").textContent = mid1;
        document.getElementById("Clue2").textContent = mid2;
        document.getElementById("Clue3").textContent = mid3;
        document.getElementById("Clue4").textContent = mid4;
        document.getElementById("Clue5").textContent = mid5;
        document.getElementById("Clue6").textContent = mid6;
    });
    document.getElementById("level3").addEventListener("click", function(){  
        console.log("HardGame");
        document.getElementById("Clue1").textContent = hard1;
        document.getElementById("Clue2").textContent = hard2;
        document.getElementById("Clue3").textContent = hard3;
        document.getElementById("Clue4").textContent = hard4;
        document.getElementById("Clue5").textContent = hard5;
        document.getElementById("Clue6").textContent = hard6;
    });
    
});



var easy1 = "John's last name is Grant, and he dislikes outdoor sports.";
var easy2 = "Brian's favorite pastime is Golf, and he drives a Ford.";
var easy3 = "Eric's last name is Power, and he drives a Renault.";
var easy4 = "Paul enjoys Painting, and he doesn't drive an Audi.";
var easy5 = "Dave drives a Toyota and prefers Jogging.";
var easy6 = "Smith isn't John's last name; he drives an Audi.";
var mid1 = "Smith isn't Paul's last name." ;
var mid2 = "The person who enjoys Painting drives a Volvo." ;
var mid3 = "Eric's favorite pastime is either Jogging or Golf." ;
var mid4 = "John doesn't drive a Renault." ;
var mid5 = "Grant's last name isn't Murphy." ;
var mid6 = "Dave drives either an Audi or a Toyota." ;
var hard1 = "Either Paul or Dave drives a Renault.";
var hard2 = "The person with the last name Jones enjoys Tennis.";
var hard3 = "The person who enjoys Drinking drives a Ford.";
var hard4 = "Smith's first name isn't John.";
var hard5 = "Grant's favorite sport isn't Golf or Jogging.";
var hard6 = "Murphy drives a Toyota.";

