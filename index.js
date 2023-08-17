import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 42;
let page = 1;
const searchQuery = "";

//fetch function
async function fetchCharacters() {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character?page=page${page}"
  );
  const data = await response.json();
  const charactersData = data.results;
  cardContainer.innerHTML = "";
  charactersData.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.append(card);
  });
  pagination.textContent = `${page}/${maxPage}`;
}

fetchCharacters();

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});
