/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    fruits.shift();             // removes the first element
    fruits.pop();              //  removes the last element
    fruits.unshift("banana"); //  adds new element to the beginning
    fruits.push("kiwi");     // adds elements to the end

    document.getElementById("run").addEventListener("click", function(){
        console.log(fruits);
       

     })

})();
