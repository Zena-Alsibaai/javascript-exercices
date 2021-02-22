/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const Person = class { // create a class
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
        }
        get getName () {
            return( `${this.firstName} ${this.lastName}`)
        }
        set setName(text){
            let arrName = text.split(" ")
            this.firstName = arrName[0]
            this.lastName = arrName[1]
        }
    
    } 
    const fullName = new Person ("black", "Umbrella");
    const newPerson = new Person();
    newPerson.setName ="Zena Alasibaai";
    document.getElementById("run").addEventListener("click", function(){
        console.log(fullName.getName);
        fullName.setName ="Hello";
        console.log(fullName.getName);

        console.log(newPerson);
    })
    
})();
/*
1- creat a class name Person with 2 properties
2- method getter = return the properties
3- method setter = transforme the proprties in the objects that already create
 */
