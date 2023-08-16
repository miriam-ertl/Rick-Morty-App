export function createCharacterCard(character) {
  const cardContainer = document.createElement("li");
  cardContainer.classList.add("card-container");
  /* // add HTML element <IMG>
  const imageItem = document.createElement("li");
  imageItem.classList.add("card__image"); */
  //cardContainer.innerHTML =
}
console.log("Hi");

document.addEventListener("scroll", async (event) => {
  const characters = await getCharacters();
  renderCharacters(characters);
});

function renderCharacters(character) {
  characters.forEach((character) => {
    const listItem = `<li><img src="${character.image}"> ${character.name} ${character.status} ${character.type}</li>`;
    cardContainer.innerHTML += listItem;
  });
}
async function getCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character/197");
  const json = await response.json();
  return json.data;
}
