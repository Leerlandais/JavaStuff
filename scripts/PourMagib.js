
var age = prompt("Votre age?");

if(age < 13){
    console.log("Je vous recommande de regarder des dessins animés.");
}else if(age >= 13 && age < 18){
    console.log("Pourquoi ne pas regarder un film de comédie?");
}else if (age > 18){
    console.log("Oseriez-vous regarder un film d'horreur?"); 
}else {
    console.log("Il y avait un problème. Essayez encore.");
}





var age = prompt("Votre age?")
drivePerm(age);
function drivePerm(age) {
if (age >= 20){
        console.log("Vous pourrez conduire au Sénégal et la France et aux Etats-Unis");
    }else if (age >= 18){
        console.log("Vous pourrez conduire au France ainsi que aux Etats-Unis");
    }else if(age >= 16){
        console.log("Vous pourrez conduire aux Etats-Unis");
    }else if(age < 16){
        console.log("Désolé, vous êtes trop jeune pour conduire.");
    }else {
        console.log("Il y avait un problème. Essayez encore.")
}
}


function FortCookies(){
    var cookieNum = Math.floor(Math.random() * 11)
switch(cookieNum){
    case 0: console.log("Le voyage d'un millier de kilomètres commence avec un pas.");
        break;
    case 1: console.log("Racontez toujours la vérité – c'est la chose la plus facile à se rappeler.");
        break;
    case 2: console.log("Si vous avez besoin d'un coup de main vous en trouverez une au bout de votre bras.");
        break;
    case 3: console.log("On tend à recevoir ce à quoi on s'attend.");
        break;
    case 4: console.log("Un diplomate est un homme qui se rappelle toujours de l'anniversaire d'une femme mais jamais de son âge.");
        break;
    case 5: console.log("Oubliez le but, appréciez le voyage.");
        break;
    case 6: console.log("Si la vie vous donne des citrons faites-en de la limonade.");
        break;
    case 7: console.log("Si on suivait nos propres conseils on aurait du succès.");
        break;
    case 8: console.log("C'est mieux d'avoir un mauvais plan que pas de plan du tout.");
        break;
    case 9: console.log("Le meilleur moyen de rendre les enfants bons est de les rendre heureux.");
        break;
    case 10: console.log("Ne poursuivez pas le bonheur – créez le.");
        break;
}   
}


function findMax(num1, num2, num3){
    var biggestNum = Math.max(num1, num2, num3);
    return biggestNum; 
}


function drawRectangle(recHeight, recWidth, recSymbol = "*"){ 
         console.log (recHeight, recWidth, recSymbol);
         var gridArray = [];
         var vertArray = [];
            for (var i = 0; i < recWidth; i++){
                gridArray.push(recSymbol);
                if (i != 0 || i != gridArray.length-1){
                    vertArray.push("");
                }else{
                    vertArray.push(recSymbol);
                }
            }
            console.log(gridArray.length);
            var showArray = gridArray.join("");
            var showVert = vertArray.join(" ");
            console.log(showArray);
            for (j=0; j < recHeight;j++){
                console.log(showVert);
            }
     console.log(showArray);

}

/*

       for (var j = 0; j < recHeight; j++){
                if(j === 0 || j === recWidth && j > 0 && j < recHeight){
                    console.log(' - ', recSymbol, ' - ');
                }    
            }
            for (var k = 0; k < recWidth; k++){
                console.log(recSymbol);
            }
false
true
false?
1 ou true?
true
aucune idée
true

Créez une fonction drawRectangle qui prendra au maximum 3 arguments et qui dessinera dans votre console, à base de caractères de votre clavier, un rectangle dont l'intérieur est vide. Lors de l'appel deux des paramètres sont obligatoires: la longueur et la hauteur. Le dernier paramètre est le caractère qui sera utilisé pour dessiner le rectangle et sa valeur de base est '*'

    for (let i = 0; i < recLength; i++){
        for (let j = 0; j < recWidth; j++){
    }
}


                if((i > 0 || i < recLength) && j === 0 || j === recWidth){
                    console.log(recSymbol);
                }
                if(i === recLength){
                    console.log(recSymbol);
                }
*/
 