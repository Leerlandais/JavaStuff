const startDung = document.getElementById("startDung");
const spinDice = document.getElementById("spinDice");
const dungHeader = document.getElementById("dungHeader");
const playerClass = document.getElementById("playerClass");
const playerHP = document.getElementById("playerHP");
const playerArmour = document.getElementById("playerArmour");
const playerSpeed = document.getElementById("playerSpeed");
const playerLuck = document.getElementById("playerLuck");
const dungInfo = document.getElementById("dungInfo");
const enemyClass = document.getElementById("enemyClass");
const enemyHP = document.getElementById("enemyHP");
const enemyArmour = document.getElementById("enemyArmour");
const enemySpeed = document.getElementById("enemySpeed");
const enemyLuck = document.getElementById("enemyLuck");
var diceRoll1 = "";
var diceRoll2 = "";


var playerCard = {
        playClass : "",
        playHP : 0,
        playArm : 0,
        playSpd : 0,
        playLck : 0
      };
      var nmeCard = {
        nmeClass : "Wolf",
        nmeHP : 100,
        nmeArm : 45,
        nmeSpd : 60,
        nmeLck : 10
      };

spinDice.style.display = "none";

startDung.style.color = "green";
startDung.onclick = makeChar;

function makeChar() {
  startDung.style.color = "black";
  startDung.textContent = "Continue";
  dungHeader.textContent = "Let's pick a Class";
  playerClass.textContent = "For the moment there isn't any, so go ahead and click Continue";
  playerCard.playClass = "Warrior";
  playerHP.textContent = "HP : " + playerCard.playHP;
  playerArmour.textContent = "Armour : " + playerCard.playArm;
  playerSpeed.textContent = "Speed : " + playerCard.playSpd;
  playerLuck.textContent = "Luck : " + playerCard.playLck;
  dungInfo.textContent = "Click below to roll your stats";
  startDung.onclick = rollStats;
}

function rollStats () {
  startDung.disabled = true;
  dungHeader.textContent = "Roll for HP";
  playerClass.textContent = playerCard.playClass;
  playerHP.textContent = "HP : " + playerCard.playHP;
  playerArmour.textContent = "Armour : " + playerCard.playArm;
  playerSpeed.textContent = "Speed : " + playerCard.playSpd;
  playerLuck.textContent = "Luck : " + playerCard.playLck;
  dungInfo.textContent = ""; 
  spinDice.style.display = "";
  spinDice.onclick = rollHP;
}

function rollHP() {
  dungHeader.textContent ="Now for Armour";
  playerCard.playHP = Math.floor((rnd + rnd2)*8 +(rnd + rnd2)/3);
  playerHP.textContent = "HP : " + playerCard.playHP;
  spinDice.onclick = rollArmour;
}

function rollArmour() {
  dungHeader.textContent ="Next for Speed";
  playerCard.playArm = Math.floor((rnd + rnd2)*8 +(rnd + rnd2)/3);
  playerArmour.textContent = "Armour : " + playerCard.playArm; 
  spinDice.onclick = rollSpeed;
}

function rollSpeed() {
  dungHeader.textContent ="Once more for Luck";
  playerCard.playSpd = Math.floor((rnd + rnd2)*8 +(rnd + rnd2)/3);
  playerSpeed.textContent = "Speed : " + playerCard.playSpd;
  spinDice.onclick = rollLuck;
}

function rollLuck() {
  dungHeader.textContent ="That's your char rolled";
  playerCard.playLck = Math.floor((rnd + rnd2)*8 +(rnd + rnd2)/3);
  playerLuck.textContent = "Luck : " + playerCard.playLck;
  startDung.disabled = false;
  spinDice.disabled = true;
  startDung.textContent = "Step Outside";
  startDung.onclick = advanceStep;
}

function advanceStep() {
  startDung.textContent = "Continue";
  dungHeader.textContent = "Fight";
  enemyClass.textContent = nmeCard.nmeClass;
  enemyHP.textContent = "HP : " + nmeCard.nmeHP;
  enemyArmour.textContent = "Armour : " + nmeCard.nmeArm;
  enemySpeed.textContent = "Speed : " + nmeCard.nmeSpd;
  enemyLuck.textContent = "Luck : " + nmeCard.nmeLck;
  diceRoll1 = "";
  diceRoll2 = "";
  startDung.onclick = fightEvent;
}

function fightEvent() {
  let damRoll = "";
  diceRoll1 = "";
  diceRoll2 = "";
  spinDice.disabled = false;
  startDung.disabled = true;
  dungHeader.textContent = "Roll your attack";
  spinDice.addEventListener("click", function () {
    damRoll = (diceRoll1 + diceRoll2);
    damRoll = damRoll + (playerCard.playSpd - nmeCard.nmeArm);
    dungInfo.textContent = "You hit for " + damRoll + " damage";
    nmeCard.nmeHP -= damRoll;
    enemyHP.textContent = "HP : " + nmeCard.nmeHP;
    if (nmeCard.nmeHP < 1) {
      fightWin();
    }else {
      enemyAttack();
    }
  });
}

function enemyAttack () {
  let damRoll = "";
  diceRoll1 = "";
  diceRoll2 = "";
  spinDice.disabled = false;
  startDung.disabled = true;
  dungHeader.textContent = "Roll for enemy's attack";
  spinDice.addEventListener("click", function () {
    damRoll = (diceRoll1 + diceRoll2);
    damRoll = damRoll + (nmeCard.nmeSpd - playerCard.playArm);
    dungInfo.textContent = "You were hit for " + damRoll + " damage";
    playerCard.playHP -= damRoll;
    playerHP.textContent = "HP : " + playerCard.playHP;
    if (playerCard.playHP < 1) {
      fightLose();
    }else {
      fightEvent();
    }
  });
  }

  function fightWin () {
    dungInfo.textContent = "Congratulations, you won";
    spinDice.disabled = true;
    startDung.disabled = false;
    startDung.onclick = advanceStep;
  }

  function fightLose () {
    dungInfo.textContent = "You have died";
    spinDice.disabled = true;
    startDung.disabled = false;
    startDung.onclick = advanceStep;
  }


    /*
    if (playerCard.playHP < 1) {
      dungInfo.textContent = "You died";
      spinDice.disabled = true;
      startDung.disabled = false;
      startDung.textContent = "Click to Restart";
      startDung.onclick = reloadPage;
    }else if (nmeCard.nmeHP < 1) {
      dungInfo.textContent = "You win";
      spinDice.disabled = true;
      startDung.disabled = false;
      startDung.textContent = "Click to continue";
      startDung.onclick = reloadPage;
    }
    */
function reloadPage() {
  location.reload();
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
  //      console.log("1 : ", rnd, x, y);
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
  //          console.log ("Do a Roll");
            w += 360;
            z += 360;
        }
  //      console.log("2 : ", rnd2, w, z);

 $(".dice").css(
 "transform",
 "translateZ(-100px) rotateY(" + x + "deg) rotateX(" + y + "deg)"
  );
  diceRoll1 = ""
  lastRnd = rnd;
  diceRoll1 = rnd;
  $(".dice.dice2").css(
    "transform",
    "translateZ(-100px) rotateY(" + w + "deg) rotateX(" + z + "deg)"
     );
     diceRoll2 = "";
    lastRnd2 = rnd2;
    diceRoll2 = rnd2;
setInterval(() => {
    document.getElementById("spinDice").style.display = "initial";
}, 1000);  
});