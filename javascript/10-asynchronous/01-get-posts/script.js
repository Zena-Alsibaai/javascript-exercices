/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  // Fonction callback appelée quand on click le button
  // Je crée la function de callback pour pouvoir l'imbriquer dans la 2eme function

  // function articles(error, array) {
  //   // Je crée la fonctionne callback pour pouvoir l'impriquer dans l'autre fonctionne getPosts
  //   console.log(error);
  //   console.log(array);
  // }
  // window.lib.getPostes(articles); // dans ma fonctionne getPoste j'appelle la fonction articles
  // document.getElementById("run").addEventListener("click", function ()

  document.getElementById("run").addEventListener("click", function () {
    window.lib.getPosts(function (error, array) {
      if (error) {
        console.log(error); // on a fait les conditions car parfois ça renvoit error mais pas dans cet exercice
      } else {
        console.log(array);
      }
    });
  });
})();

// 1- function articles(error, array) {
//     // Je crée la fonctionne callback pour pouvoir l'impriquer dans l'autre fonctionne getPosts
//     console.log(error);
//     console.log(array);
//   }

// 2-   window.lib.getPostes(articles); // dans ma fonctionne getPoste j'appelle la fonction articles

// 3-  document.getElementById("run").addEventListener("click", function ()

// function articles(error, array) {
//   console.log(error);
//   console.log(array);
// }
// document.getElementById("run").addEventListener("click", function () {
//   window.lib.getPostes(articles)
// })
