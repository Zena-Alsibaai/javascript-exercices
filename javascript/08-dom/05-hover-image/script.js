/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Chercher l'image
    let img = document.querySelector("img");
    // Chercher image src
    let source = img.src;
    //
    let hover = img.getAttribute("data-hover"); // l'att qui est dans l'img tag
    img.onmouseover = () => {img.src = hover ;} //
    img.onmouseout = () => {img.src = source;}

})();
//autre solution : addEventListener et après onmouseover, onmouseout
