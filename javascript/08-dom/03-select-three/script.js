/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //  Change the text of all elements with class="target"
    //  find how many elements with class="target", we use the length property
    
    var x = document.querySelectorAll(".target");
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = "Owned";
      }
      // Une boucle pour répèter des instructions sue tous 

})();

// https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
