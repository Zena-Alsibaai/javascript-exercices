/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", () => {
    //Je crée une fonction async qu'elle permet d'executer du code de maniére asynchrone et qu'elle va retourner une fonction promesse
    async function operationAsync() {
      // Je déclare une const pour attendre les résultas de la fonction getPosts()
      const attenteAsync = await window.lib.getPosts();
      // return posts = await window.lib.getPosts(); // Si je utilise return je dois tout de suite fermer ma fonction et je met la console.log après la    fermeture de la fonction et dans la console.log j'appelle l'asunce fonction ex console.log(operationAsync())
      // J'affiche les résultas
      console.log(attenteAsync);
    }
    //J'appelle la fonction
    operationAsync();
  });
})();
/*
1- click on the button
2- call the getPosts function
3- display the items obtained in the console
4- getPosts function will always be resolved without error
use the syntax async/await
 
 */
/* async le mot clé transforme ou renvoit une promesse
await s'utilise dans la fonction async et il va nous permettre d'attendre les résultas d'une promesse
 */
