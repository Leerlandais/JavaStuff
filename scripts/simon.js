document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("butStart").onclick = startSimon;

    function startSimon(){
        document.getElementById("butStart").style.opacity = "0";
        var goes = 5; // add user defined level soon

        var goCount = 0;
        var myList = [];
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
            alert("Got this far");
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