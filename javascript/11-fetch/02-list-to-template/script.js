/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  /*
    - J'ai une temlate d'origin et je dois le copier dans la balise qu'elle l'Id target
    
     */
  const myMainTemplate = document.getElementById("tpl-hero"); // Origin area
  const myNewTarget = document.getElementById("target"); // copy area

  document.getElementById("run").addEventListener("click", () => {
    //
    async function fetchData() {
      const response = await fetch("http://localhost:3000/heroes");
      const data = await response.json();

      // Je fais une boucle pour chaque data dans laquelle je demandes de faire un clone de la structure de template, et je utilise la copie de template pour ajouter les data (les propriétés) spécifique à chaque hero

      data.forEach(({ name, alterEgo, abilities }) => {
        const myCopy = myMainTemplate.content.cloneNode(true);
        //   console.log(myCopy);
        myCopy.querySelector(".name").textContent = name;
        myCopy.querySelector(".alter-ego").textContent = alterEgo;
        myCopy.querySelector(".powers").textContent = abilities;
        myNewTarget.appendChild(myCopy); // j'ajoute les propriétés dans mon element target
      });
    }
    fetchData();
  });
})();
