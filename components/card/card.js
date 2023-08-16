const cardContainer = document.querySelector('[data-js="card-container"]');
const nextButton = document.querySelector('[data-js="button-next"]');

export function createCharacterCard(character) {
  const cardContainer = document.createElement("li");
  cardContainer.classList.add("card-container");
  characters.forEach((character) => {
    const listItem = `<li><img src="${character.image}">
    <h2 class="card__title">${character.name}</h2> 
    <p class="card__info-title">${character.status}</p>
    <p class="card__info-title">${character.type}</p>
    <p class="card__info-title">${character.episode.length}</p></li>`;
    cardContainer.innerHTML += listItem;
    /* // add HTML element <IMG>
  const imageItem = document.createElement("li");
  imageItem.classList.add("card__image"); */
    //cardContainer.innerHTML =
  });
}
console.log("Hi");

// nextButton.addEventListener("click", async (event) => {
//   const characters = await getCharacters();
//   renderCharacters(characters);
//   console.log(characters);
// });
// console.log("HiMoin");

// function renderCharacters(characters) {
//   characters.forEach((character) => {
//     const listItem = `<li><img src="${character.image}">
//     <h2 class="card__title">${character.name}</h2>
//     <p class="card__info-title">${character.status}</p>
//     <p class="card__info-title">${character.type}</p>
//     <p class="card__info-title">${character.episode.length}</p></li>`;
//     cardContainer.innerHTML += listItem;
//   });
//}
// async function getCharacters() {
//   const response = await fetch("https://rickandmortyapi.com/");
//   const json = await response.json();
//   return json.data;
// }
console.log("hallo");
//console.log("ok", response.ok, response.status);
