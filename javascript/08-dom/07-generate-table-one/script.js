/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let table = document.createElement("table"); // pour créer le tableau
    document.querySelector("#target").appendChild(table); // chercher l'ID et ajouter mon tableau avec la méthode appendChild

    // Une boucle pour répèter l'action sue les 10 row
    for(i = 0; i < 10; i++){
        let row = table.insertRow(); // insérer le row dans le tableau
        let cell= row.insertCell(); //insérer la cellule dans le row
        let text = document.createTextNode("text")// mettre du texte
        cell.appendChild(text); // ajouter le texte dans la cellule
    }
    


})();
