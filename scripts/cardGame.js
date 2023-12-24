

var card = document.querySelectorAll('.cardSpot');
card.forEach(function(cardSpot) {
cardSpot.addEventListener( 'click', function() {
  cardSpot.classList.toggle('flippedCard');
});
});


const cardBackgrounds = [
  "images/MoustacheGlasses.svg",
  "images/MoustacheGlasses.svg",
  "images/GlassesSmirk.svg",
  "images/GlassesSmirk.svg",
  "images/TongueSquint.svg",
  "images/TongueSquint.svg",
  "images/TongueSmile.svg",
  "images/TongueSmile.svg",
  "images/StarsEyes.svg",
  "images/StarsEyes.svg",
  "images/PurpleDevil.svg",
  "images/PurpleDevil.svg",
  "images/MoneySmile.svg",
  "images/MoneySmile.svg",
  "images/WinkSmile.svg",
  "images/WinkSmile.svg"

];
cardBackgrounds.push(...cardBackgrounds);



document.getElementById("cardStart").addEventListener("click", function () {
  const cards = document.querySelectorAll('.cardBack');

  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tempBackground = cardBackgrounds[i];
    cardBackgrounds[i] = cardBackgrounds[j];
    cardBackgrounds[j] = tempBackground;

    cards[i].style.backgroundImage = `url(${cardBackgrounds[i]})`;
    cards[j].style.backgroundImage = `url(${cardBackgrounds[j]})`;
  }
});





/*
document.getElementById("cardStart").addEventListener("click", function () {
  for (let i = 0; i < 16; i++) {

    let firstSpot = Math.floor(Math.random() * 16 + 1);
    let secndSpot = Math.floor(Math.random() * 16 + 1);
    
    while (secndSpot === firstSpot) {
      secndSpot = Math.floor(Math.random() * 16) + 1;
    }

    firstSpot = firstSpot * 2;
    secndSpot = secndSpot * 2;

    let thisCard = document.getElementById("card" + firstSpot);
    let thatCard = document.getElementById("card" + secndSpot);

    let thisCardIndex = parseInt(thisCard.id.replace("card", ""));
    let thatCardIndex = parseInt(thatCard.id.replace("card", ""));
console.log(thisCardIndex, thatCardIndex);

    let tempBackground = cardBackgrounds[thisCardIndex - 1];
    cardBackgrounds[thisCardIndex - 1] = cardBackgrounds[thatCardIndex - 1];
    cardBackgrounds[thatCardIndex - 1] = tempBackground;

    thisCard.style.backgroundImage = `url(${cardBackgrounds[thisCardIndex - 1]})`;
    thatCard.style.backgroundImage = `url(${cardBackgrounds[thatCardIndex - 1]})`;
  }
});











document.getElementById("cardStart").addEventListener("click", function() {
for (let i = 0; i < 16; i++) {
    let firstSpot = Math.floor(Math.random() * 16 + 1);
    let secndSpot = Math.floor(Math.random() * 16 + 1);
    while (secndSpot === firstSpot) {
      secndSpot = Math.floor(Math.random() * 16) + 1;
  }
    firstSpot = firstSpot * 2;
    secndSpot = secndSpot * 2;
    console.log(firstSpot, secndSpot);
  
  
    let thisCard = document.getElementById("card" + firstSpot);
    let thatCard = document.getElementById("card" + secndSpot);
  
    let holdStyle = thisCard.style.backgroundImage;
    thisCard.style.backgroundImage = thatCard.style.backgroundImage;
    thatCard.style.backgroundImage = holdStyle;
}
});

*/