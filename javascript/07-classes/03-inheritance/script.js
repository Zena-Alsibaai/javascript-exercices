/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Cat extends Animal {
        constructor(name){
            super()
            this.name = name

        }
    }
})();

/*
The super() method refers to the parent class.

By calling the super() method in the constructor method, 
we call the parent's constructor method and gets access 
to the parent's properties and methods.
 */
