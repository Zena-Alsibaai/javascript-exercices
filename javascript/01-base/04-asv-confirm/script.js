/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var firstQuestion= prompt("How old are you ?");
    var secondQuestion= prompt("What's you gender ?");
    var thirdQuestion= prompt("Where do you live ?");

    if(( firstQuestion !== "") &(secondQuestion !== "") &(thirdQuestion !== "")) {
        confirm ("I am" + firstQuestion + "\n I am a " + secondQuestion + "\n I live in " + thirdQuestion); // \n   to make a newline
    }
    else{
        alert("Try again");
        window.location="index.html";
    }
   


})();
