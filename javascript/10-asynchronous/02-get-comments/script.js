/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", function () {
    // callback
    window.lib.getPosts(function posts(error, array) {
      //callback
      if (error) {
        console.log(error);
      } else {
        // console.log(array);
        array.forEach((element) => {
          window.lib.getComments(element.id, function posts(error, array) {
            // callback
            // 1- element.id comme 1er paramétre (.id) pour pouvoir chercher l'id de  chaque l'element
            // 2- callback pour pouvoir aller lire l'array... et pour vérfier s'il y a une error
            if (error) {
              // S'il trouve une error
              console.log(error);
            } else {
              // console.log(array);
              // Si'l n'y a pas d'error,
              // il va ajouter la propriete comment à chaque element dans l'array
              element.comment = array;

              console.log(element);
              //  affiche l'element
            }
          });
        });
      }
    });
  });
})();

// Callback hell :on a 4 fonctionne callback
//Dans l'addEventListener (function)
//dans getPosts (function)
//dans getComments( function)

/*
Qu'est ce que j'ai ?
- getComments function
- getPoste function

- get
Qu'est ce que j'ai besoin ?
- Mettre 2 paramètres pour la fonction getComments ( id , callback)
- AddEventListener pour le bouton
- forEach pour chaque item dans l'array
- Appeler la fonction getComments pour tous les items
 */

// ---- Autre solution -------

// document.getElementById("run").addEventListener("click", () => {
//   window.lib.getPosts(function callback(error, posts) {
//     posts.forEach((post) => {
//       window.lib.getComments(post.id, function (error, comments) {
//         // console.log(comments);
//         post.comments = comments;
//       });
//     });
//     console.log(posts);
//   });
// });
