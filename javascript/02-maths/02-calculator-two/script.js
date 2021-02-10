/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let num1 = document.getElementById("op-one").value;
    let num2 = document.getElementById("op-two").value;
    let sum;

    const performOperation = operation => {
        // perform the operation

        switch (operation) {
            case 'addition':
               alert(sum = parseInt(num1) + parseInt(num2));
               break;
            case "substraction":
                alert(sum = parseInt(num1) + parseInt(num2));
                break;
            case "multiplication":
                alert(sum = parseInt(num1) + parseInt(num2));
                break;
            case "division":
                alert(sum = parseInt(num1) + parseInt(num2));
                break;
                default:
                    alert("none");
            
         }
        
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
