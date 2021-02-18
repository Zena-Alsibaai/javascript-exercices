/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    /*
    Qu'est ce que j'ai ?
    * Id pour le bouton "run"
    * Id target pour la balise <p>

    Qu'est ce que j'ai besoin ?
    * Eventlistener function pour le bouton 
    * Manipuler le dom html avec la méthode .innerHTML pour modifier le texte de la balise p en mettant les noms des oiseaux aléatoirement
    * Une fonction math.random
    * Une conditions pour l'adjectifs fem
    * Concatenation 
     */

     
    document.getElementById("run").addEventListener("click", function(){


    });
})();
