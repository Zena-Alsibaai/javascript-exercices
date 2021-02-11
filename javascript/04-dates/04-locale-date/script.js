/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    // Qu'est ce que j'ai ?
    // J'ai l'ID de tag <p> que je dois aller chercher pour changer le contenu.

    // Qu'est ce que j'ai besoin ?
    // j'ai besoin des méthode pour pouvoir changer le texte et mettre la date d'aujourd'hui.
    // changer la date sous forme de chaîne
        let today = new Date();
        let day = today.toLocaleString('en-EN', {weekday: 'long'}); //toLocaleDateString A String, représentant la date sous forme de chaîne
        let date= today.getDate();  //renvoie la date spécifiée en fonction de l'heure locale.
        let month =today.toLocaleDateString('en-En', { month: 'long'});
        let year =today.getFullYear();
        let hour = today.getHours();
        let min =today.getMinutes();
       
     
         document.getElementById("target").innerHTML = day + " " + date + " " + month + " " + year + ","  + " " + hour +"h"+ min;

})();
