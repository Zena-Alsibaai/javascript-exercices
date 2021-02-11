/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", function(){
    
        for(let i = 0; i < fruits.length; i++){         //if you want to run the same code over and over again, each time with a different value and this is the case in arrays
        console.log(fruits[i]);
        }
    })


})();
