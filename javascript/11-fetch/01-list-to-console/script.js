/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  /* 
    - La méthode fetch() est utilisée pour récuperer une ressource.
    - Elle prend un argement obligatoire et c'est le chemin vers ma ressource souhaitée.
    - Elle retourne une promesse
   */
  /*
  1- Cliquez sur le bouton
  2- Utilisez la fonction fetch
  3- Récupérez la liste des X-Men
  4- Affichez-la dans la console.
   */
  // 1- ajouter le click sur le bouton
  //   document.getElementById("run").addEventListener("click", () => {
  //     // 2- fetch méthode avec le url de la ressource
  //     fetch("http://localhost:3000/heroes")
  //       // 3- transforme la reponse en format json
  //       .then((response) => response.json())
  //       // 4- afficher les résultas dans la console
  //       .then((data) => console.log(data));
  //   });

  document.getElementById("run").addEventListener("click", () => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/heroes");
      //   console.log(response);
      const data = await response.json();
      console.log(data);
    }
    fetchData();
  });
})();

//Le lien  https://dmitripavlutin.com/javascript-fetch-async-await/
