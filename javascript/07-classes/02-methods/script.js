/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person {
        constructor(firstName, lastName){
            this.firstName = firstName; // this refere to its own class or object
            this.lastName = lastName;
            // to call the firstname in the object, we have to use this 
        };
        sayHello(){
            return `Hello ${this.firstName} ${this.lastName}`
        };// Create a function for Hello
    };
    const test = new Person("Dyala", "Helwani");
    document.getElementById("run").addEventListener("click", function(){
        console.log(test.sayHello());
    });
})();
