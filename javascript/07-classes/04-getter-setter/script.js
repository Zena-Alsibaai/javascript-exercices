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
    const Person = class { // creat a class
    
    } 
    get name () {
        return (` ${this.firstName} ${this.lastName}`)
    }
    set name (){
        this.name
    }
})();
/*
1- creat a class name Person with 2 properties
2- method getter = return the properties
3- method setter = transforme the proprties in the objects that already create
 */
