/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    document.getElementById("run").addEventListener("click", function(){

        const entries = new Array();// pour créer un nouveau tableau
        for (i=0; i<keys.length; i++){
            entries.push([keys[i], values[i]]);//on push dans l'array vide. 
            //first element is the keys , and the second is the values.
        }
        console.log(entries);

        const obj = Object.fromEntries(entries); // .fromEntries() method transforms a list of key-value pairs into an object.
        console.log(obj)
        

    })
   
})();
