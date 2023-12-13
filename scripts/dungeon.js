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

for (let i = 0; i < dungSize; i++) {        
    const placeDivs = document.createElement("div");  
    placeDivs.classList.add("dungDiv");  
    placeDivs.id = ("dung" + i);              
    dungeon.appendChild(placeDivs);    
    dungArray.push(placeDivs.id);
}

dungStart.addEventListener("click", playerPicksClass);

function playerPicksClass() {
    /* showClass.textContent = "class : ";
    showHP.textContent = "HP : ";
    showArmour.textContent = "Armour : ";
    showDodge.textContent = "Dodge : ";
    showAcc.textContent = "Accuracy : ";  */ // This was used to test stuff, will leave it here cos I'll surely need it later
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
            rollPlayer(playerClass);
        }else {
            console.log("did you click?");
        }        
});
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

    if (playerClass === "barbar") {
        playerHP = playerHP + 30;
        playerArm = playerArm - 20;
        playerAcc = playerAcc + 20;
        playerDam = 15;
        console.log ("adjusted for Barbarian");
    }else if (playerClass === "ranger") {
        playerDam = 5;
        console.log ("no adjust for Rangers");
    }else if (playerClass === "warrior") {
        playerArm = playerArm + 20;
        playerAcc = playerAcc +10;
        playerHP = playerHP +10;
        playerDam = 10;
        console.log("adjusted for Warrior");
    }else if (playerClass === "thief") {
        playerDodge = playerDodge + 25;
        playerAcc = playerAcc + 25;
        playerHP = playerHP - 15;
        playerArm = playerArm - 15;
        playerDam = -5;
        console.log("adjusted for Thief");
    }else {
        console.log("something went wrong");
    }

        showClass.textContent = "Class : " + playerClass;
        showHP.textContent = "HP : " + playerHP;
        showArmour.textContent = "Armour : " + playerArm;
        showDodge.textContent = "Dodge : " + playerDodge;
        showAcc.textContent = "Accuracy : " + playerAcc;
        runGame();
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

function runEvent(evPick) {
    if (evPick === 1) {
        showEvent.textContent = "Fight a monster";
    }else if (evPick === 2) {
        showEvent.textContent = "Safe Spot, you rest a little and regain some HP";
        playerHP = playerHP + 10;
        showHP.textContent = "HP : " + playerHP;
    }else if (evPick === 3) {
        showEvent.textContent = "Ambush!";
    }else if (evPick === 4) {
        showEvent.textContent = "A treasure chest! Dare you open it?"
    }else {
        showEvent.textContent = "Hmmm, something went wrong";
    }
}

/* Things to do :-
- Random generate HP, Armour, Speed, Dodge, Accuracy (crit)
- Make a class list Barbarian (better HP, HP recovery per level), Ranger (gets a free hit, 2 if crit, has increased chance of avoiding ambush), Warrior (weap bonus, better armour), Thief (low HP and armour, excellent dodge/crit chance)
- set up buttons to pick class
- set up random event selector for each square
- create random events, more difficult as time goes on - attacks by enemy, cave (empty, treasure or danger), safe spot, find some way to add options
- if battle, take ranger shot, do speed roll to see who attacks first. Attack chance vs dodge chance. If good, damage roll vs armour. Damage done vs HP. If dead, end. Else, roll for next attack
- roll for loot (add dangerous loot etc)
- add win condition
- make everything above better :D
*/

// Cliquez <span id='step9' class='visible'>ici</span> pour voir ce qui se passe