/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
    

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    let y = document.getElementById("op-one").value;
    let x = document.getElementById("op-two").value;
    let a;
    

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        a = parseInt(y) + parseInt(x);
        alert(a);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        a = parseInt(y) - parseInt(x);
        alert(a);

    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        a = parseInt(y) * parseInt(x);
        alert(a);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        a = parseInt(y) / parseInt(x);
        alert(a);
    });
})();
