const dungStart = document.getElementById("dungStart");
const dungeon = document.getElementById("dungSet");
const dungSize = 20;  
const showClass = document.getElementById("showClass");
const showHP = document.getElementById("showHP");
const showArmour = document.getElementById("showArmour");
const showDodge = document.getElementById("showDodge");
const showAcc = document.getElementById("showAcc");
var dungArray = [];
var playerClass = "";

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
function rollPlayer(classPicked) {
    let rolls = []; 
    for (i = 0; i < 4; i++) {
        rolls.push(Math.floor(Math.random() * 61) + 40);
    }
    console.log(rolls);
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