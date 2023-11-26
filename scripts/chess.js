// document.addEventListener("DOMContentLoaded", function(){           Doesn't work with this turned on

var previousElement = null;
    function selectPiece(element, color) {
        if (previousElement !== null) {
            previousElement.style.color = ''; 
        }
        element.style.color = color;
        previousElement = element;
    }

var firstClick = null;
    document.getElementById("chessboard").addEventListener("click", function(event) {
        if (event.target.classList.contains("square")) {
            console.log("Clicked square:", event.target.id);
            var pickSquare = event.target;
            

            if(pickSquare.textContent === "" && firstClick === null){
                firstClick = firstClick;
                console.log("clicked empty")
            }
            
            else if (firstClick === null){
            firstClick = pickSquare;
            }
            else {
            var movePiece = firstClick.textContent;
            pickSquare.textContent = movePiece;
            firstClick.textContent = "";
            firstClick = null;
            }
        }
    
    });

// });