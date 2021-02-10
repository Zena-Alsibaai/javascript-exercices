/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    /* Qu'est ce que j'ai ? 
J'ai l'ID run pour le bouton
L'ID  

*/
/*
Qu'est ce que j'ai besoin ?
D'une fonction d'écoute pour le bouton (run) 
Aller chercher la date que le visiteur va selectionne
Afficher l'age de visiteur en foction de la date selectionné
Aller récupperer les valeurs contenu dans l'ID 
*/ 
        let today = new Date();
        let currentYear = today.getFullYear(); // pour l'année actuelle
        let birthDate = document.getElementById("dob-day").value;
        let birthMonth = document.getElementById("dob-month").value;
        let birthYear = document.getElementById("dob-year").value;


        document.getElementById("run").addEventListener("click", function() {

            
            let total = currentYear - birthYear -1 ; 
            alert(total);



        });
  


})();


  // Get the current date
    // var today = new Date();
    // var dd = today.getDate();
    // var mm = today.getMonth() + 1; //January is 0!
    // var yyyy = today.getFullYear();
    // // alert(yyyy + "-" + mm + "-" + dd);
    

    // //Calculate the given birth in years
    //  var birthYear =document.getElementById("dob-year").value;
    //  var ageYear = ( yyyy - birthYear) -1 ;
    
    //  //Calculate the given birth in month
    //  var birthMonth =document.getElementById("dob-month").value;
    //  var ageMonth = (12 - birthMonth) + mm  ;

    //  //Calculate the given birth in days
    
    //  var birthDay =document.getElementById("dob-day").value;
    //  var ageDays = (31 - birthDay) + dd;
     

    //  alert("You are " + ageYear + " Years old and " + ageMonth + " Months and " + ageDays + " Days" ); 


