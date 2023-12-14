const dungStart = document.getElementById("dungStart");
const dungeon = document.getElementById("dungSet");
const dungSize = 20;  
const showClass = document.getElementById("showClass");
const showHP = document.getElementById("showHP");
const showArmour = document.getElementById("showArmour");
const showDodge = document.getElementById("showDodge");
const showAcc = document.getElementById("showAcc");
const showEvent = document.getElementById("showEvent");
var dungArray = [];
var playerClass = "";
var playerHP = "";
var playerArm = "";
var playerDodge = "";
var playerAcc = "";
var playerDam = "";
var currSpot = -1;


/* Things to do.
Change all arrays to objects holding class, HP etc
Set up create char rolls for each stat based on results of dice and class chosen
Create some mosters and stats
Create events for each square
*/
for (let i = 0; i < dungSize; i++) {        
    const placeDivs = document.createElement("div");  
    placeDivs.classList.add("dungDiv");  
    placeDivs.id = ("dung" + i);              
    dungeon.appendChild(placeDivs);    
    dungArray.push(placeDivs.id);
}

dungStart.addEventListener("click", playerPicksClass);

function playerPicksClass() {
    showAcc.textContent = "Accuracy : ";  
    dungStart.style.visibility = "hidden";
    showClass.textContent = "Pick Your Class";
    showHP.innerHTML = " <span id='barbar' class='visible'>Barbarian</span> : Huge HP, HP recovery, high Crit, low armour";
    showArmour.innerHTML = " <span id='ranger' class='visible'>Ranger</span> : Free hit before melee, maybe 2, can avoid ambush";
    showDodge.innerHTML = " <span id='warrior' class='visible'>Warrior</span> : +1 for all weapons, high armour, decent all-rounder";
    showAcc.innerHTML = " <span id='thief' class='visible'>Thief</span> : Low HP and Armour. Huge dodge and Crit chance, can avoid ambush";
    document.getElementById("dungChoiceList").addEventListener("click", function(event) {
        if (event.target.classList.contains("visible")) {
            console.log("Picked : ", event.target.id);
            playerClass = event.target.id;
            rollForStats(playerClass);
        }else {
            console.log("did you click?");
        }        
});
}


$("#dice-color").val("#000000");
      $("#dot-color").val("#ffd700");
      let rnd;
      let rnd2;
      let x, y;
      let w, z;
      $("#spin").click(function(e) {
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
        console.log("2 : ", rnd2, w, z);
 $(".dice").css(
 "transform",
 "translateZ(-100px) rotateY(" + x + "deg) rotateX(" + y + "deg)"
  );
  $(".dice.dice2").css(
    "transform",
    "translateZ(-100px) rotateY(" + w + "deg) rotateX(" + z + "deg)"
     );
});
$("#dot-color").change(function() {
  const dot = $("#dot-color").val();
  $(".dot").css("background-color", dot);
});
$("#dice-color").change(function() {
  const dice = $("#dice-color").val();
  $(".side").css("background-color", dice);
});


/* Things to do :-
- Random generate HP, Armour, Speed, Dodge, Accuracy (crit) - Done
- Make a class list Barbarian (better HP, HP recovery per level), Ranger (gets a free hit, 2 if crit, has increased chance of avoiding ambush), Warrior (weap bonus, better armour), Thief (low HP and armour, excellent dodge/crit chance)  - Done
- set up buttons to pick class  - Done
- set up random event selector for each square  - Done but will get bigger, of course
- add win condition - Done
- create random events, more difficult as time goes on - attacks by enemy, cave (empty, treasure or danger), safe spot, find some way to add options  - Doneish

    Stuff to still do :-

- if battle, take ranger shot, do speed roll to see who attacks first. Attack chance vs dodge chance. If good, damage roll vs armour. Damage done vs HP. If dead, end. Else, roll for next attack
- roll for loot (add dangerous loot etc)
- so, very, very much more
- make everything above better :D





function rollPlayer(classPicked) {
    if (classPicked === "barbar") {

        console.log ("adjusted for Barbarian");
    }else if (classPicked === "ranger") {

        console.log ("no adjust for Rangers");
    }else if (classPicked === "warrior") {

        console.log("adjusted for Warrior");
    }else if (classPicked === "thief") {
        
        console.log("adjusted for Thief");
    }else {                                                                                                                          // new habit: add an "else (error)" once all other possibilities are covered
        console.log("something went wrong");
    }

        showClass.textContent = "Class : " + classPicked;
        showHP.textContent = "HP : " + playerHP;
        showArmour.textContent = "Armour : " + playerArm;
        showDodge.textContent = "Dodge : " + playerDodge;
        showAcc.textContent = "Accuracy : " + playerAcc;
        runGame();
}

function runEvent(evPick) {
    showEvent.style.color = "";
    if (evPick === 1) {
        showEvent.textContent = "Fight a monster. Ouch, that stung";
//            monsterFight();      
    }else if (evPick === 2) {
        showEvent.textContent = "Safe Spot, you rest a little and regain some HP";
//        safeSpot();
    }else if (evPick === 3) {
        showEvent.textContent = "Ambush! You've been hurt. Badly";
//        ambushSpot();
    }else if (evPick === 4) {
        showEvent.textContent = "A treasure chest! Dare you open it?"
//        chestEvent();
    }else {
        showEvent.textContent = "Hmmm, something went wrong";
    }
}

function runGame() {
    showEvent.textContent = "Press -> to advance (Don't bother telling me that you can just hold it down, I haven't added 'prevent that' yet :p"
    document.addEventListener("keydown", (e) => {
       if (e.key === "ArrowRight") {
            console.log("Arrow Pressed");
            currSpot = currSpot + 1;
            console.log(currSpot);
            document.getElementById("dung" + currSpot).style.backgroundColor = "blue";
       }
       if (currSpot === 19){
        showEvent.textContent = "You WIN";
        showEvent.style.color = "red";
            }else {
                var eventChoice = 0;
                eventChoice = Math.floor((Math.random()) * 4) + 1;
                console.log("event ", eventChoice);
                runEvent(eventChoice);
            }    
    });

}




}
function rollPlayer(classPicked) {
    let rolls = []; 
    for (i = 0; i < 4; i++) {
        rolls.push(Math.floor(Math.random() * 61) + 20);
    }
        playerHP = rolls[0];
        playerArm = rolls[1];
        playerDodge = rolls[2];
        playerAcc = rolls[3];

    if (classPicked === "barbar") {
        playerHP = playerHP + 50;
        playerArm = playerArm - 20;
        playerAcc = playerAcc + 20;
        playerDam = 15;
        console.log ("adjusted for Barbarian");
    }else if (classPicked === "ranger") {
        playerDam = 5;
        console.log ("no adjust for Rangers");
    }else if (classPicked === "warrior") {
        playerArm = playerArm + 20;
        playerAcc = playerAcc +10;
        playerHP = playerHP +10;
        playerDam = 10;
        console.log("adjusted for Warrior");
    }else if (classPicked === "thief") {
        playerDodge = playerDodge + 25;
        playerAcc = playerAcc + 25;
        playerHP = playerHP - 15;
        playerArm = playerArm - 15;
        playerDam = -5;
        console.log("adjusted for Thief");
    }else {
        console.log("something went wrong");
    }

        showClass.textContent = "Class : " + classPicked;
        showHP.textContent = "HP : " + playerHP;
        showArmour.textContent = "Armour : " + playerArm;
        showDodge.textContent = "Dodge : " + playerDodge;
        showAcc.textContent = "Accuracy : " + playerAcc;
        runGame();
}

function runEvent(evPick) {
    showEvent.style.color = "";
    if (evPick === 1) {
        showEvent.textContent = "Fight a monster. Ouch, that stung";
            monsterFight();      
    }else if (evPick === 2) {
        showEvent.textContent = "Safe Spot, you rest a little and regain some HP";
        safeSpot();
    }else if (evPick === 3) {
        showEvent.textContent = "Ambush! You've been hurt. Badly";
        ambushSpot();
    }else if (evPick === 4) {
        showEvent.textContent = "A treasure chest! Dare you open it?"
        chestEvent();
    }else {
        showEvent.textContent = "Hmmm, something went wrong";
    }
}
function monsterFight() {
    playerHP = playerHP - 15;
    showHP.textContent = "HP : " + playerHP;
    if (playerHP < 1) {
        showEvent.innerHTML = `You died. Click <span id="restartGame">here</span> to restart`;
        document.getElementById("restartGame").addEventListener("click", function() {
            location.reload()
        });
    }
}
function safeSpot() {
    playerHP = playerHP + 15;
    showHP.textContent = "HP : " + playerHP;
}
function ambushSpot() {
    playerHP =  playerHP - 40;
    showHP.textContent = "HP : " + playerHP;
        if (playerHP < 1) {
            showEvent.innerHTML = `You died. Click <span id="restartGame">here</span> to restart`;
            document.getElementById("restartGame").addEventListener("click", function() {
                location.reload()
            });
        }
}
function chestEvent() {
    showEvent.style.color = "green";
}



*/

