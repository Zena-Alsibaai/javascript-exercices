/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  /*
Qu'est ce que j'ai ?
- J'ai la fonctionne getPersons

Qu'est ce que j'ai besoins ?
1- J'ai besoin de mettre 2 paramètres(error,array) dans getPersons
    window.getPersons(function(error, array){

    })
2- L'ID pour ajouter addEventListener pour le bouton
    document.getElementById("run").addEventListener("click",function()
    })
3- Condition pour l'error
4- Utiliser console.error() 
 */
  document.getElementById("run").addEventListener("click", function () {
    // callback function with 2 parameter
    window.lib.getPersons(function (error, array) {
      if (error) {
        // S'il y a une erreur on l'affiche avec console.error()
        console.error(error);
      } else {
        console.log(array);
      }
    });
  });
})();
