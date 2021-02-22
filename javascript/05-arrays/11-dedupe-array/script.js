/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    /*
    Je dois créer un tableau vide pour stocker les valeur dedans.
    trier le tableau fruits pour comparer chaque element et voir s'ils sont en double => j'ai besoin de la méthode 
    J'ai besoin d'une condition pour les valeurs qui sont en double, et quand on les trouve on va pusher dans l'array vide avec la methode push()

    Je dois stocker les valeurs de Fruits qui sont en double

     */
    document.getElementById("run").addEventListener("click", function(){

        let arr =[];
        fruits.forEach((element) =>{ 
            if ( !(arr.includes(element ))) { // Si tu ne trouve pas l'element dans l'array ARR, tu push. (! est different de)
                arr.push(element);
            }   
        })
          console.log(arr); 
    })
    // 2éme solution
    // let arr = [...new Set (fruits)]; // ... spread operateur, quand on va inserer un tableau dans un autre. Pour éléminer les crochés
    // console.log(arr); 
   

})();
