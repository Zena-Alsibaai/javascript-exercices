/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    /*
    1. chercher l'ID ("run") de bouton pour ajouter l'eventlistener
    2. une fontion loop pour afficher 10 chiffres entre 1 - 100 dans l'array
    3. déclarer une variable pour générer des chiffres aléatoires
    4. chercher l'ID dans le tableau (n-) et l'innerHTML pour écrire dans le document HTML 
    5. créer un array vide
    6. utiliser la methode push pour ajouter des éléments dans l'array
     */
    
    document.getElementById("run").addEventListener("click", function(){
        
        for (var i = 1; i<11; i ++ ){   //l'affichage les 10 élements
        let random = Math.floor(Math.random() * 100);  //généré des chiffres aléatoires
        document.getElementById("n-" + i).innerHTML = random; // afficher les chiffres aléatoires dans l'arra           
        }
       


    })


})();
