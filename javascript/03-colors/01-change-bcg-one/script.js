/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let redColor = document.getElementById("red");
    redColor.addEventListener("click", function(){
        document.body.style.background = "red";

    });

    let greenColor = document.getElementById("green");
    greenColor.addEventListener("click", function(){
        document.body.style.background = "green";

    });

    let yellowColor = document.getElementById("yellow");
    yellowColor.addEventListener("click", function(){
        document.body.style.background = "yellow";

    });

    let blueColor = document.getElementById("blue");
    blueColor.addEventListener("click", function(){
        document.body.style.background = "blue";

    });

})();
