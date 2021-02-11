/* becode/javascript
 *
 * /05-arrays/04-walk-two/script.js - 5.4: parcours de tableau (2)
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
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    /*  
        The forEach() :
            method calls a function once for each element in an array, in order.
        Syntax :
            arr.forEach(callback(currentValue[, index[, array]]) {
            execute something
            }[, thisArg]);
    */
    document.getElementById("run").addEventListener("click", function(){
        fruits.forEach(element =>{
            console.log(element);
        })


    })

})();
