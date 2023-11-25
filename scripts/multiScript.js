document.addEventListener("DOMContentLoaded", function() {
var diffLevel = 0;
document.getElementById("facile").onclick = StartMath;
document.getElementById("moyen").onclick = StartMath;
document.getElementById("dur").onclick = StartMath;
function StartMath(){
console.log(diffLevel);
}


});