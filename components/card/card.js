export function createCharacterCard(data) {
  const cardContainer = document.createElement("ul");
  cardContainer.classList.add("card-container");
  /* // add HTML element <IMG>
  const imageItem = document.createElement("li");
  imageItem.classList.add("card__image"); */
  //cardContainer.innerHTML =
}
console.log("Hi");

document.addEventListener("scroll", async (event) => {
  const users = await getUsers();
  renderUsers(users);
});

function renderUsers(users) {
  users.forEach((user) => {
    const listItem = `<li><img src="${user.image}"> ${user.name} ${user.status} ${user.type} ${user.episode}</li>`;
    cardContainer.innerHTML += listItem;
  });
}
async function getUsers() {
  const response = await fetch("https://rickandmortyapi.com/api/character/197");
  const json = await response.json();
  return json.data;
}
