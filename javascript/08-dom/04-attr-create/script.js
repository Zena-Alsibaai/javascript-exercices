/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    // Chercher l'attribute :
    let x = document.getElementById("source").getAttribute("data-image");
    
    // Créer une image avec createElement() method
    let y = document.createElement("img");

    y.src = x;
    // AppendChild() pour déplacer l'élément
    document.getElementById("target").appendChild(y); 

    // Supprimer des éléments .remove()
    document.getElementById("source").remove();
    
})();
