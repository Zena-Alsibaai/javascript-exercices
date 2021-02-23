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
    // function articles (error, array){
    //     console.log(error);
    //     console.log(array);
    // }
    document.getElementById("run").addEventListener("click", function(){
        window.lib.getPosts(function(error, array){
            
           if(error) {
               console.log(error); // on a fait les conditions car parfois ça renvoit error mais pas dans cet exercice
           }else{
            console.log(array);
           }
            
        });
    })
})();
