document.addEventListener("DOMContentLoaded", function(){

        var button = document.getElementById("step2");
            button.addEventListener("click", function() {
            document.getElementById("guide").style.opacity = "1";
            document.getElementById("guide").textContent = "On a créé une copie du Grand Projet sur nos PC.";
            document.getElementById("StepText").innerHTML = showStep3;
            document.getElementById("downmid").style.color = "firebrick";
            document.getElementById("downmid").textContent = "GRAND PROJET";
            
        })
        // Event delegation for dynamically added element               I admit, wholeheartedly that I had to go to Chat for this one. Here's what I asked it, "Everything works up until it tries to declare button3. I believe the problem is because the step3 is contained within the inner.HTML of showStep3. Any advice?". I could see what the problem is but an hour of searching elsewhere didn't help

        var button2 = document.getElementById("step3");
            document.addEventListener("click", function(event) {
                if (event.target && event.target.id === "step3") {
                        document.getElementById("guide").textContent = "On a créé un endroit sur Github où on pourrait éventuellement mettre nos travaux.";
                        document.getElementById("StepText").innerHTML = showStep4;
                        document.getElementById("upleft").style.color = "firebrick";
                        document.getElementById("upleft").style.border = "2px solid";
                        document.getElementById("downmid").style.color = "black";
                        document.getElementById("origin").textContent = "Origin";
        }
        })

        var button3 = document.getElementById("step4");
            document.addEventListener("click", function(event) {
                if (event.target && event.target.id === "step4") {
                        document.getElementById("guide").textContent = "On ajoute nos images à notre copie du Grand Projet.";
                        document.getElementById("StepText").innerHTML = showStep5;
                        document.getElementById("upleft").style.color = "black";
                        document.getElementById("downmid").style.color = "firebrick";
                        document.getElementById("downmid").textContent = "GRAND PROJET + Images";
        }
        })

        var button4 = document.getElementById("step5");
            document.addEventListener("click", function(event) {
                if (event.target && event.target.id === "step5") {
                        document.getElementById("StepText").innerHTML = showStep6;
                        document.getElementById("downmid").style.color = "black";
                }

        })

        var button5 = document.getElementById("step6");
            document.addEventListener("click", function(event) {
                if (event.target && event.target.id === "step6") {
                        document.getElementById("StepText").innerHTML = showStep7;
                }
            })
        
        var button6 = document.getElementById("step7");
            document.addEventListener("click", function(event) {
                if (event.target && event.target.id === "step7") {
                        document.getElementById("StepText").innerHTML = showStep8;
                        document.getElementById("upleft").style.color = "firebrick";
                        document.getElementById("upleft").textContent = "GRAND PROJET + Images";
                }
            })

        var button7 = document.getElementById("step8");
            document.addEventListener("click", function(event) {
                if (event.target && event.target.id === "step8") {
                        document.getElementById("StepText").innerHTML = showStep9;
                        document.getElementById("upleft").style.color = "black";
                        document.getElementById("upmid").innerHTML = "J'ai, fini Chef. C'est bien pour toi? <br>=====>";
                        document.getElementById("upmid").style.color = "firebrick";
                }
            })

        var button8 = document.getElementById("step9");
            document.addEventListener("click", function(event) {
                if (event.target && event.target.id === "step9") {
                        document.getElementById("StepText").innerHTML = showStep10;
                        document.getElementById("upmid").style.color = "black";
                        document.getElementById("upright").style.color = "firebrick";
                        document.getElementById("upright").textContent = "GRAND PROJET + Images";
                        document.getElementById("upmid").textContent = "";
                }
            })
        
        var button9 = document.getElementById("refresh");
            document.addEventListener("click", function(event) {
                if (event.target && event.target.id === "refresh") {
                        location.reload()
                }
            })
   
/*
        var showStep1 = `Tout d'abord, allons sur le <a href="https://github.com/Leerlandais/GitGuide" target="_blank">'dépôt GitHub</a>`;
        var showStep2 = `À partir de là, nous devons aller dans 'Code' et copier le lien (soit SSH soit HTTPS). Ensuite, ouvrez BASH dans le dossier souhaité et copiez l'intégralité du dépôt. La commande est // git clone https://github.com/Leerlandais/GitGuide.git // Cliquez <span id="step2" class="visible">ici</span> pour voir ce qui se passe quand vous faites cela'`;
  */      
        var showStep3 = `Maintenant que nous avons les fichiers sur notre PC, nous pouvons travailler dessus. Avant cela, nous pourrions aussi ajouter un endroit pour mettre nos fichiers.<br>La commande est // git remote add origin main //<br>Cliquez <span id="step3" class="visible">ici</span>`;
        var showStep4 = `Avec tout cela fait, nous pouvons maintenant travailler sur les modifications. Dans le Grand Projet, vous avez été chargé des images. Alors ajoutez-les. Cliquez <span id='step4' class='visible'>ici</span>`;
        var showStep5 = `Maintenant que nous avons fait le travail nécessaire, nous devons le téléverser sur git pour qu'il soit accessible aux autres. Pour cela, retournez dans BASH et préparez vos fichiers // git add . // Ce qui se passe ici, c'est que GIT vérifie les différences entre les fichiers sur votre PC et la version Upstream, et signale les changements effectués. Cliquez <span id='step5' class='visible'>ici</span> pour continuer`;
        var showStep6 = `L'étape suivante consiste à préparer les fichiers pour l'envoi, où nous incluons une description des changements.<br>La commande est // git commit -m'Votre message' //<br>Vos modifications sont maintenant prêtes à être envoyées...<br>Cliquez <span id='step6' class='visible'>ici</span>`;
        var showStep7 = `...et c'est pourquoi nous avons créé origin. Parce que nous ne possédons pas le Grand Projet, nous devons d'abord l'envoyer à Git en utilisant cette commande<br>// git push origin main //<br>Comme d'habitude, cliquez <span id='step7' class='visible'>ici</span> pour voir ce qui se passe quand vous faites cela`;
        var showStep8 = `Maintenant que les modifications sont téléversées sur git, nous devons informer le propriétaire du Projet que le travail est terminé. Retournez sur Git et utilisez la Pull Request. Cliquez <span id='step8' class='visible'>ici</span> pour voir ce qui se passe quand vous faites cela`;
        var showStep9 = `Le propriétaire peut maintenant voir vos modifications et les accepter (les fusionner dans le Grand Projet). Cliquez <span id='step9' class='visible'>ici</span> pour voir ce qui se passe'`;
        var showStep10 = `Refaire les étapes? Cliquez <span id = 'refresh' class='visible'>ici</span>`; 
});


































/* 
        var showStep1 = "Tout d'abord, allons sur le <a href='https://github.com/Leerlandais/GitGuide' target='_blank'>'dépôt GitHub</a>'";

*/
