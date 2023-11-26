document.addEventListener("DOMContentLoaded", function() {
    var goCount = 0;
    var myList = [];
    var yourList = [];
    document.getElementById("butStart").onclick = startSimon;
    function startSimon(){
        setTimeout(function() {
        document.getElementById("butStart").style.opacity = "0";
        var goes = 5; // add user defined level soon
      
        while (goCount < 5){
        
            var pingPick = Math.floor(Math.random() * 4) + 1;
            if (pingPick === 1){
                document.getElementById("butRed").style.opacity = "0.1";
                document.getElementById("butGre").style.opacity = "0.1";
                document.getElementById("butYel").style.opacity = "0.1";
                document.getElementById("butBlu").style.opacity = "0.1";
                pingRed();
                goCount++;   
            }
            else if (pingPick === 2){
                document.getElementById("butRed").style.opacity = "0.1";
                document.getElementById("butGre").style.opacity = "0.1";
                document.getElementById("butYel").style.opacity = "0.1";
                document.getElementById("butBlu").style.opacity = "0.1";
                pingGre();
                goCount++;
                
            }
            else if (pingPick === 3){
                document.getElementById("butRed").style.opacity = "0.1";
                document.getElementById("butGre").style.opacity = "0.1";
                document.getElementById("butYel").style.opacity = "0.1";
                document.getElementById("butBlu").style.opacity = "0.1";
                pingYel();
                goCount++;    
            }
            else{
                document.getElementById("butRed").style.opacity = "0.1";
                document.getElementById("butGre").style.opacity = "0.1";
                document.getElementById("butYel").style.opacity = "0.1";
                document.getElementById("butBlu").style.opacity = "0.1";
                pingBlu();
                goCount++;
            }
           
        }
        
        console.log(myList);
        
        function pingRed(){
            document.getElementById("butRed").style.opacity = "1";
            myList.push(pingPick);
            console.log(pingPick);
        }
        function pingGre(){
            document.getElementById("butGre").style.opacity = "1";
            myList.push(pingPick);
            console.log(pingPick);
        }
        function pingYel(){
            document.getElementById("butYel").style.opacity = "1";
            myList.push(pingPick);
            console.log(pingPick);
        }
        function pingBlu(){
            document.getElementById("butBlu").style.opacity = "1";
            myList.push(pingPick);
            console.log(pingPick);
        }
        
        
        if (confirm("Your turn, ready?") === true){
            goCount = 0;
            yourGo();
        }
        else{
            console.log("Player quit");
            return;
        }
        
    });
    }
    
    function yourGo(){

            yourList = [];

            var yourCount = 0;
            if (yourCount < 7){
                console.log(yourCount);
               var clickRed = document.getElementById("butRed");
               var clickGre = document.getElementById("butGre");
               var clickYel = document.getElementById("butYel");
               var clickBlue = document.getElementById("butBlu");
                clickRed.addEventListener("click", playRed);
                clickGre.addEventListener("click", playGre);
                clickYel.addEventListener("click", playYel);
                clickBlue.addEventListener("click", playBlu);

        }


            function playRed(){
                if (yourCount <= 4){
                    document.getElementById("butRed").style.opacity = "0.8";
                    document.getElementById("butGre").style.opacity = "0.8";
                    document.getElementById("butYel").style.opacity = "0.8";
                    document.getElementById("butBlu").style.opacity = "0.8";                    
                yourList.push(1);
                console.log("1", yourCount);
                document.getElementById("butRed").style.opacity = "0.4";
                yourCount++;
                }
                else{
                gameCheck();
                console.log("your guess ", yourList);

    }
            }
            function playGre(){
                if (yourCount <= 4){
                    document.getElementById("butRed").style.opacity = "0.8";
                    document.getElementById("butGre").style.opacity = "0.8";
                    document.getElementById("butYel").style.opacity = "0.8";
                    document.getElementById("butBlu").style.opacity = "0.8";                    
                yourList.push(2);
                console.log("2", yourCount);
                document.getElementById("butGre").style.opacity = "0.4";
                yourCount++;
                }
                else{
                gameCheck();
                console.log("your guess ", yourList);

    }
            }
            function playYel(){
                if (yourCount <= 4){
                    document.getElementById("butRed").style.opacity = "0.8";
                    document.getElementById("butGre").style.opacity = "0.8";
                    document.getElementById("butYel").style.opacity = "0.8";
                    document.getElementById("butBlu").style.opacity = "0.8";                    
                yourList.push(3);
                console.log("3", yourCount);
                document.getElementById("butYel").style.opacity = "0.4";
                yourCount++;
                }
                else{
                gameCheck();
                console.log("your guess ", yourList);

    }
            }
            function playBlu(){
                if (yourCount <= 4){
                    document.getElementById("butRed").style.opacity = "0.8";
                    document.getElementById("butGre").style.opacity = "0.8";
                    document.getElementById("butYel").style.opacity = "0.8";
                    document.getElementById("butBlu").style.opacity = "0.8";                    
                yourList.push(4);
                console.log("4", yourCount);
                document.getElementById("butBlu").style.opacity = "0.4";
                yourCount++;
                }
                else{
                gameCheck();
                console.log("your guess ", yourList);

    }
            }
        }

        function gameCheck(){
            if (parseInt(myList) == parseInt(yourList)){
                alert("Congrats!")
            }
            else {
                alert("Unlucky. I picked " + myList + " and you picked " + yourList + ".")
            }
        }

        /*  ------------------ CONSOLE.LOG EVERYTHING ---------------------

        random 1-4, light button, goCount++, 
        
        stick it in an array

        ask user input, stick in array

        compare arrays

        Failed, it was red, blue, green etc
        */
});