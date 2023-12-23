

var card = document.querySelectorAll('.cardSpot');
card.forEach(function(cardSpot) {
cardSpot.addEventListener( 'click', function() {
  cardSpot.classList.toggle('flippedCard');
});
});


/*const card = document.getElementById("cardCard");
card.onclick = flipCard;

function flipCard () {
    card.classList.toggle("flippedCard");
}


document.getElementById("cardSet").addEventListener("click", function(event) {
    if (event.target.classList.contains("card")) {
        console.log("Clicked card: ", event.target.id);
        event.target.classList.toggle("flippedCard");
    }
});

*/