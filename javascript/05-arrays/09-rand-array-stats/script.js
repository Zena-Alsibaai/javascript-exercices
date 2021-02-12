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
    7. on a besoin de la methode reduce() = pour réduire notre tableau à une valeur unique. Pour ce faire, il applique une fonction à chaque élément du tableau.
     */


    let arr =[]; // on crée un tableau vide pour stocker les éléments dedans car on ne sait pas où chercher les valeurs

    document.getElementById("run").addEventListener("click", function(){
        
        for (var i = 1; i<11; i ++ ){   //l'affichage les 10 élements
        let random = Math.floor(Math.random() * 100);  //généré des chiffres aléatoires
        document.getElementById("n-" + i).innerHTML = random; // afficher les chiffres aléatoires dans l'arra  
        arr.push(random) ;  //pour ajouter les valeurs dans un tableau qui servira de base pour la prochaine opération
        }

        document.getElementById("min").innerHTML = (Math.min(...arr)); // Math.min (... [1,2,3,4]) est identique à Math.min (1,2,3,4) 
        document.getElementById("max").innerHTML = (Math.max(...arr)); 
        document.getElementById("sum").innerHTML = arr.reduce((a, b) => a + b, 0); //0 = c'est où on doit commencer donc on va simplement commencer par zéro et ajouter une par une chaque valeur du tableau à notre valeur initiale jusqu'à ce que nous ayons parcouru tout le tableau. Une fois terminé, la valeur de l'accumulateur sera renvoyée
        document.getElementById("average").innerHTML = arr.reduce((a, b)=> a +b , 0) / arr.length; //quand on a la somme, on divise cette valeur par la longueur du tableau. Le résultat est la valeur moyenne qui est ensuite renvoyée.
        


    })
    //le site: https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332

})();

