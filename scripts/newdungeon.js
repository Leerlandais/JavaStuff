const startDung = document.getElementById("startDung");
const spinDice = document.getElementById("spinDice");
const dungHeader = document.getElementById("dungHeader");
const playerClass = document.getElementById("playerClass");
const playerHP = document.getElementById("playerHP");
const playerArmour = document.getElementById("playerArmour");
const playerSpeed = document.getElementById("playerSpeed");
const playerLuck = document.getElementById("playerLuck");
const dungInfo = document.getElementById("dungInfo");
var playHP = 0;
var playArm = 0;
var playSpd = 0;
var playLck = 0;
spinDice.style.display = "none";


startDung.onclick = makeChar;

function makeChar() {

  startDung.textContent = "Continue";
  dungHeader.textContent = "Let's pick a Class";
  playerClass.textContent = "For the moment there isn't any, so go ahead and click Continue";
  playerHP.textContent = "HP : ";
  playerArmour.textContent = "Armour : ";
  playerSpeed.textContent = "Speed : ";
  playerLuck.textContent = "Luck : ";
  dungInfo.textContent = "Click below to roll your stats";
  startDung.onclick = rollStats;
}

function rollStats () {
  startDung.style.display = "none";
  dungHeader.textContent = "Roll for HP";
  playerClass.textContent = "As I said before but let's say you picked Warrior";
  playerHP.textContent = "HP : ";
  playerArmour.textContent = "Armour : ";
  playerSpeed.textContent = "Speed : ";
  playerLuck.textContent = "Luck : ";
  dungInfo.textContent = ""; 
  spinDice.style.display = "";
  spinDice.onclick = rollHP;
}

function rollHP() {
  dungHeader.textContent ="Now for Armour";
  playerClass.textContent = "Warrior";
  playHP = Math.floor((rnd + rnd2)*8 +(rnd + rnd2)/3);
  playerHP.textContent = "HP : " + playHP;
  spinDice.onclick = rollArmour;
}

function rollArmour() {
  dungHeader.textContent ="Next for Speed";
  playArm = Math.floor((rnd + rnd2)*8 +(rnd + rnd2)/3);
  playerArmour.textContent = "Armour : " + playArm; 
  spinDice.onclick = rollSpeed;
}

function rollSpeed() {
  dungHeader.textContent ="Once more for Luck";
  playSpd = Math.floor((rnd + rnd2)*8 +(rnd + rnd2)/3);
  playerSpeed.textContent = "Speed : " + playSpd;
  spinDice.onclick = rollLuck;
}

function rollLuck() {
  dungHeader.textContent ="That's all for now and not bad for an evening's work";
  playLck = Math.floor((rnd + rnd2)*8 +(rnd + rnd2)/3);
  playerLuck.textContent = "Luck : " + playLck;
  //spinDice.onclick = rollLuck;
}













































// DON'T TOUCH

$("#dice-color").val("#000000");
    $("#dot-color").val("#ffd700");
    let rnd;
    let rnd2;
    let x, y;
    let w, z;
    let lastRnd = -1;
    let lastRnd2 = -1;
    $("#spinDice").click(function(e) {
    document.getElementById("spinDice").style.display = "none";
        e.preventDefault();
        rnd = Math.floor(Math.random() * 6 + 1);
        switch (rnd) {
          case 1:
            x = 720;
            y = 810;
            break;
          case 6:
            x = 720;
            y = 990;
            break;
          default:
            x = 720 + (6 - rnd) * 90;
            y = 900;
            break;
        }
        console.log("1 : ", rnd, x, y);
        if(rnd === lastRnd) {
            console.log ("Do a Roll");
            x += 360;
            y += 360;
        }
        rnd2 = Math.floor(Math.random() * 6 + 1);
        switch (rnd2) {
          case 1:
            w = 720;
            z = 810;
            break;
          case 6:
            w = 720;
            z = 990;
            break;
          default:
            w = 720 + (6 - rnd2) * 90;
            z = 900;
            break;
        }
        if(rnd2 === lastRnd2) {
            console.log ("Do a Roll");
            w += 360;
            z += 360;
        }
        console.log("2 : ", rnd2, w, z);

 $(".dice").css(
 "transform",
 "translateZ(-100px) rotateY(" + x + "deg) rotateX(" + y + "deg)"
  );
  lastRnd = rnd;
  $(".dice.dice2").css(
    "transform",
    "translateZ(-100px) rotateY(" + w + "deg) rotateX(" + z + "deg)"
     );
    lastRnd2 = rnd2;
setInterval(() => {
    document.getElementById("spinDice").style.display = "initial";
}, 3000);  
});