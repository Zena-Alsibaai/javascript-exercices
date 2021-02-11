/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function () {

        function numberOfFridaythe13thsIn(year) {
            var count = 0;
            for (var month=0; month<12; month++) {
                var d = new Date(year,month,13);
                if(d.getDay() == 5){
                    var preciseMonth = d.toLocaleString('en-EN', {month: 'long'});
                    console.log(preciseMonth);
                    count++;
               }
            }
            return count;
        }

        alert("There is " + numberOfFridaythe13thsIn(document.getElementById("year").value)  + "Friday the 13th in " + document.getElementById("year").value +". " + "Open the console to find out which ones !");
    });
})();
