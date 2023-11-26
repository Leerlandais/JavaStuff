// document.addEventListener("DOMContentLoaded", function(){           Doesn't work with this turned on

let previousElement = null;
    function selectPiece(element, color) {
        if (previousElement !== null) {
            previousElement.style.color = ''; 
        }
        element.style.color = color;
        previousElement = element;
    }



// });