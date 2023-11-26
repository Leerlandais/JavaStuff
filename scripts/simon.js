document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("butStart").onclick = startSimon;

    function startSimon(){
        document.getElementById("butStart").style.opacity = "0";
        var goes = 5; // add user defined level soon

        var goCount = 0;
        var myList = [];
        var yourList = [];
        while (goCount < 5){
            document.getElementById("butRed").style.opacity = "0.4";
            document.getElementById("butGre").style.opacity = "0.4";
            document.getElementById("butYel").style.opacity = "0.4";
            document.getElementById("butBlu").style.opacity = "0.4";
            var pingPick = Math.floor(Math.random() * 4) + 1;
            if (pingPick === 1){
                pingRed();
                goCount++;
                myList.push(pingPick);
                console.log(pingPick);
            }
            else if (pingPick === 2){
                pingGre();
                goCount++;
                myList.push(pingPick);
                console.log(pingPick);
            }
            else if (pingPick === 3){
                pingYel();
                goCount++;
                myList.push(pingPick);
                console.log(pingPick);
            }
            else{
                pingBlu();
                goCount++;
                myList.push(pingPick);
                console.log(pingPick);
            }
            
        }
            console.log(myList);
            if (confirm("Your turn, ready?") === true){
                goCount = 0;
                yourGo();
            }
            else{
                console.log("Player quit");
                return;
            }
            

        function pingRed(){
            document.getElementById("butRed").style.opacity = "1";
        }
        function pingGre(){
            document.getElementById("butGre").style.opacity = "1";
        }
        function pingYel(){
            document.getElementById("butYel").style.opacity = "1";
        }
        function pingBlu(){
            document.getElementById("butBlu").style.opacity = "1";
        }

        function yourGo(){
            document.getElementById("butRed").style.opacity = "0.8";
            document.getElementById("butGre").style.opacity = "0.8";
            document.getElementById("butYel").style.opacity = "0.8";
            document.getElementById("butBlu").style.opacity = "0.8";
            for (goCount = 0; goCount < 5; goCount++) {
            document.getElementById("butRed").onclick = playRed;
            document.getElementById("butGre").onclick = playGre;
            document.getElementById("butYel").onclick = playYel;
            document.getElementById("butBlu").onclick = playBlu;
            
        }
            alert("Player turn over");
            console.log("your guess ", yourList);
            console.log("Mine ", myList);
    }
            function playRed(){
                yourList.push("1");
                console.log("1");
                document.getElementById("butRed").style.opacity = "0.4";
                goCount++;
            }
            function playGre(){
                yourList.push("2");
                console.log("2");
                document.getElementById("butGre").style.opacity = "0.4";
                goCount++;
            }
            function playYel(){
                yourList.push("3");
                console.log("3");
                document.getElementById("butYel").style.opacity = "0.4";
                goCount++;
            }
            function playBlu(){
                yourList.push("4");
                console.log("4");
                document.getElementById("butBlu").style.opacity = "0.4";
                goCount++;
            }


        /*  ------------------ CONSOLE.LOG EVERYTHING ---------------------

        random 1-4, light button, goCount++, 
        
        stick it in an array

        ask user input, stick in array

        compare arrays

        Failed, it was red, blue, green etc
        */
    }

});