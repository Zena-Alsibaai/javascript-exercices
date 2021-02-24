/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  /*
    1-AddEventListener sur le bouton
    2-Appeler getPersons function (promis) et l'afficher dans le console
    3-Utiliser .catch() et console.error()pour afficher l'error
    La méthode catch() renvoie un objet Promise et ne traite que des cas où la promesse initiale est rejetée.
     */
  //1-
  document.getElementById("run").addEventListener("click", function () {
    //-2
    window.lib.getPersons().then((array) => {
      console.log(array);
    });
    window.lib.getPersons().catch((error) => {
      console.error(error); //console.error() pour afficher le texte de l'error
    });
  });
  //2-
})();
